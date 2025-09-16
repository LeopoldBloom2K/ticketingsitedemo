// User.java
package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import ticketingsitedemo.server.domain.enums.User_RoleMethod;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private User_RoleMethod user_roleMethod;    // enum role : ADMIN HOST USER

    private LocalDateTime date;


    // event 에게 데이터 넘겨줌
    @OneToMany(mappedBy= "host")
    private List<Event> event;

    // ticket 에게 데이터 넘겨줌
    @OneToMany(mappedBy = "user")
    private List<Ticket> ticket;

    // h_a 에게 데이터 넘겨줌
    @OneToMany(mappedBy = "user")
    private List<Host_Application> host_application;

    // e_l 에게 데이터 넘겨줌
    @OneToMany(mappedBy = "user")
    private List<Email_Log> email_log;
}
