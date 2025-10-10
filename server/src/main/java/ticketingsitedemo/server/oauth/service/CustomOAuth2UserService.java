package ticketingsitedemo.server.oauth.service;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import ticketingsitedemo.server.domain.User;
import ticketingsitedemo.server.domain.enums.User_RoleMethod;
import ticketingsitedemo.server.repository.UserRepository;

import java.util.Map;
import java.util.Optional;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        // 소셜 서비스에서 제공하는 사용자 정보 (attributes)
        Map<String, Object> attributes = oAuth2User.getAttributes();
        String email = (String) attributes.get("email");
        String name = (String) attributes.get("name");

        // DB에서 이메일로 사용자 조회
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(email));

        User user;
        if (userOptional.isPresent()) {
            // 이미 가입된 사용자인 경우, 정보 업데이트 (선택적)
            user = userOptional.get();
        } else {
            // 신규 사용자인 경우, DB에 새로 저장
            user = new User();
            user.setEmail(email);
            user.setName(name);
            user.setUser_roleMethod(User_RoleMethod.USER);
            // 소셜 로그인 사용자는 비밀번호가 없으므로 임의의 값이나 null 처리
            // user.setPassword(null);
            userRepository.save(user);
        }

        // Spring Security 컨텍스트에서 사용할 수 있도록 UserDetails 형태로 변환 (혹은 CustomOAuth2User 클래스 생성)
        // 여기서는 간단히 oAuth2User를 그대로 반환하지만, 필요에 따라 커스텀 객체를 반환할 수 있습니다.
        return oAuth2User;
    }
}