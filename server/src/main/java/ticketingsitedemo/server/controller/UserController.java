package ticketingsitedemo.server.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; // EmailService import

import ticketingsitedemo.server.JwtUtil;
import ticketingsitedemo.server.domain.User;
import ticketingsitedemo.server.dto.AuthDto;
import ticketingsitedemo.server.dto.AuthResponseDto;
import ticketingsitedemo.server.service.AuthService;
import ticketingsitedemo.server.service.EmailService;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final EmailService emailService; // EmailService 주입

    // 임시로 인증 코드를 저장할 맵 (실제 서비스에서는 Redis나 DB 사용을 권장합니다)
    private final Map<String, String> verificationCodes = new HashMap<>();

    public UserController(AuthService authService, JwtUtil jwtUtil, EmailService emailService) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.emailService = emailService; // 생성자 수정
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        authService.registerUser(user);
        return new ResponseEntity<>("회원가입 성공", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody AuthDto authDto) {
        User user = authService.authenticate(authDto.getEmail(), authDto.getPassword());
        if (user != null) {
            String token = jwtUtil.generateToken(user);
            AuthResponseDto response = new AuthResponseDto();
            response.setToken(token);
            return ResponseEntity.ok(response);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/send-verification")
    public ResponseEntity<String> sendVerification(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String code = generateRandomCode();
        
        try {
            emailService.sendVerificationEmail(email, code);
            verificationCodes.put(email, code); // 이메일과 코드 저장
            return ResponseEntity.ok("인증 코드가 발송되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이메일 발송에 실패했습니다.");
        }
    }

    @PostMapping("/verify-code")
    public ResponseEntity<String> verifyCode(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String code = payload.get("code");
        
        String storedCode = verificationCodes.get(email);
        
        if (storedCode != null && storedCode.equals(code)) {
            verificationCodes.remove(email); // 인증 성공 시 코드 삭제
            return ResponseEntity.ok("이메일 인증이 완료되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("인증 코드가 올바르지 않습니다.");
        }
    }

    private String generateRandomCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000);
        return String.valueOf(code);
    }
}