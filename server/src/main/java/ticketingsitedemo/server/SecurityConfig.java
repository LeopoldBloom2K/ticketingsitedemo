package ticketingsitedemo.server;

import org.springframework.context.annotation.Bean;

public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
