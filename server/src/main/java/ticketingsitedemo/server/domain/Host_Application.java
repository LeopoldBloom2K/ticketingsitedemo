package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import ticketingsitedemo.server.domain.enums.Host_Application_StatusMethod;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "host_application")
public class Host_Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long app_id;

    // h_a가 user 테이블 참조
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String reason;

    @Enumerated
    private Host_Application_StatusMethod host_application_statusMethod; // Status : PENDING APPROVED REJECTED

    // 목적 모르겠음 리뷰를 쓰는거?  host 라면서
    private Long reviewed_by;
    private LocalDateTime reviewed_at;

    private Timestamp created_at;
}
