package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import ticketingsitedemo.server.domain.enums.Email_LogStatusMethod;

import java.sql.Timestamp;

@Entity
@Table(name="email_log")
@Data
public class Email_Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long email_id;

    // e_l가 user 테이블 참조
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Ticket
    @OneToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    private String email_addr;
    private String subject;
    private Timestamp sent_at;

    @Enumerated(EnumType.STRING)
    private Email_LogStatusMethod email_logStatusMethod;    // SENT FAILED

}
