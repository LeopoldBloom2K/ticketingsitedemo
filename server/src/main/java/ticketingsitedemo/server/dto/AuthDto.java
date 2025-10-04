// Data Transfer Object
package ticketingsitedemo.server.dto;

import lombok.Data;

@Data
public class AuthDto {
    private String email;
    private String password;
}