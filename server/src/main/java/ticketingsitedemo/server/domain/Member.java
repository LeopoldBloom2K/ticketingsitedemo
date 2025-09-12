package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="member")
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer age;

//    ADMIN(관리자 계정)도 같은 설정 할 것임.

    public Member () {}

    public Member(Long id, String name, String email, Integer age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }

    public String toString(){
        return "Member(id= " + id + ", name="  + name + ", email=" + email + ", age= " + age + ")";
    }


}
// html에서 더미 데이터 출력 예정
// j