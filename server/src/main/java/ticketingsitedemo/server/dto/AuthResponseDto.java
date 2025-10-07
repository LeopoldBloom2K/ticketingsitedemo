package ticketingsitedemo.server.dto;

import lombok.Data;

@Data
public class AuthResponseDto {      // getter, setter 메서드 오류, 직접 지정
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}