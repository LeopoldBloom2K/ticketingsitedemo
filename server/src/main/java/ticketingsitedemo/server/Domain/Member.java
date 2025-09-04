package ticketingsitedemo.server.Domain;

public class Member {
    private Long id;
    private String name;
    private String email;
    private Integer age;

    public Member(Long id, String name, String email, Integer age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }

    public String toString(){
        return id + name + email + age;
    }


}
// html에서 더미 데이터 출력 예정
// j