package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="member")
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer age; // age 필드 추가

    public void setId(Long id) {
        this.id = id;
    }
}