package ticketingsitedemo.server;

import jakarta.persistence.*;
import lombok.Data;

@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String role;
}