package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;


    // lombok setter 메서드 연결 오류로 따로 지정
    public void setId(Long id) {
        this.id = id;
    }
}