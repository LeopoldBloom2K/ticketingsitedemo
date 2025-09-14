package ticketingsitedemo.server.domain;


import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "event")
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long event_id;

    @ManyToOne(fetch = FetchType.LAZY)      // DB: host_id
    @JoinColumn(name = "host_id")           // 외래키 칼럼 지정
    private User host;                      // 외래키 참조한 엔티티

    private String event_title;
    private String event_desc;
    private String event_loc;

    private LocalDateTime start_time;
    private LocalDateTime end_time;

    private Integer capacity;

    private Timestamp created_at;
}
