package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import ticketingsitedemo.server.domain.enums.Ticket_StatusMethod;
import java.sql.Timestamp;

@Entity
@Table(name="ticket")
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticket_id;

    @ManyToOne // 관계를 다대일로 수정
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne // 관계를 다대일로 수정
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Ticket_StatusMethod ticket_statusMethod;

    private String qr_code;
    private Timestamp created_at;

    @OneToOne(mappedBy = "ticket", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Payment payment;
}