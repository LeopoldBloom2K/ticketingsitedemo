package ticketingsitedemo.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ticketingsitedemo.server.domain.User;
import ticketingsitedemo.server.dto.AuthDto;
import ticketingsitedemo.server.dto.AuthResponseDto;
import ticketingsitedemo.server.JwtUtil;
import ticketingsitedemo.server.service.AuthService;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    public UserController(AuthService authService, JwtUtil jwtUtil) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
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
            String token = jwtUtil.generateToken(user.getEmail());
            AuthResponseDto response = new AuthResponseDto();
            response.setToken(token);
            return ResponseEntity.ok(response);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}