package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import ticketingsitedemo.server.domain.enums.Host_Application_StatusMethod;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "host_application")
@Data
public class Host_Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long app_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String reason;

    @Enumerated
    private Host_Application_StatusMethod host_application_statusMethod;

    @ManyToOne // 관계를 ManyToOne으로 수정
    @JoinColumn(name = "reviewed_by")
    private User reviewed_by;

    private LocalDateTime reviewed_at;

    private Timestamp created_at;
}