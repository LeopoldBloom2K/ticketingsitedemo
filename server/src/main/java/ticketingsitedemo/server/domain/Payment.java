package ticketingsitedemo.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import ticketingsitedemo.server.domain.enums.Payment_PaymentMethod;
import ticketingsitedemo.server.domain.enums.Payment_StatusMethod;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name="Payment")
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payment_id;

    // payment -> ticket
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    private BigDecimal amount;

    @Enumerated(EnumType.STRING)    // SUCCESS, FAIL, PENDING
    private Payment_StatusMethod paymentStatusMethod;

    @Enumerated(EnumType.STRING)    // CARD, KAKAO, TOSS, BANK
    private Payment_PaymentMethod paymentPaymentMethod;

    private LocalDateTime paidAt;
}
