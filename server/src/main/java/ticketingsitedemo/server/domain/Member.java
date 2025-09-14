package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="member")   // 테이블 이름 지정
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer age;


    // lombok setter 메서드 연결 오류로 따로 지정
    public void setId(Long id) {
        this.id = id;
    }
}