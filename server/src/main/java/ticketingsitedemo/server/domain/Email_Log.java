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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne // 관계를 다대일로 수정
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    private String email_addr;
    private String subject;
    private Timestamp sent_at;

    @Enumerated(EnumType.STRING)
    private Email_LogStatusMethod email_logStatusMethod;
}