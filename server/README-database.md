# 📑 DB 운영용 쿼리 모음

---

## 👥 Users (유저)

| 산출물                  | 쿼리                                                              |
| ----------------------- | ----------------------------------------------------------------- |
| 전체 유저 목록          | `sql SELECT user_id, name, email, role, created_at FROM Users;`   |
| 이메일로 특정 유저 찾기 | `sql SELECT * FROM Users WHERE email = 'user@example.com';`       |
| 호스트만 조회           | `sql SELECT user_id, name, email FROM Users WHERE role = 'host';` |

---

## 🎫 Events (이벤트)

| 산출물                  | 쿼리                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 다가올 이벤트 목록      | `sql SELECT event_id, title, start_time, end_time FROM Events WHERE start_time > NOW() ORDER BY start_time;`                                                                                      |
| 특정 유저가 만든 이벤트 | `sql SELECT * FROM Events WHERE host_id = :userId;`                                                                                                                                               |
| 이벤트별 참가자 수      | `sql SELECT e.event_id, e.title, COUNT(t.ticket_id) AS participants FROM Events e LEFT JOIN Tickets t ON e.event_id = t.event_id AND t.status IN ('reserved','paid','used') GROUP BY e.event_id;` |

---

## 🎟️ Tickets (티켓)

| 산출물             | 쿼리                                                   |
| ------------------ | ------------------------------------------------------ |
| 이벤트별 티켓 목록 | `sql SELECT * FROM Tickets WHERE event_id = :eventId;` |
| 특정 유저의 티켓   | `sql SELECT * FROM Tickets WHERE user_id = :userId;`   |
| 사용된 티켓만      | `sql SELECT * FROM Tickets WHERE status = 'used';`     |

---

## 💳 Payment (결제)

| 산출물           | 쿼리                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 최근 결제 내역   | `sql SELECT p.payment_id, u.name, e.title, p.amount, p.status, p.paid_at FROM Payment p JOIN Tickets t ON p.ticket_id = t.ticket_id JOIN Users u ON t.user_id = u.user_id JOIN Events e ON t.event_id = e.event_id ORDER BY p.paid_at DESC LIMIT 50;` |
| 결제 상태별 합계 | `sql SELECT status, COUNT(*) AS cnt, SUM(amount) AS total_amount FROM Payment GROUP BY status;`                                                                                                                                                       |

---

## 📧 Email_Log (이메일 로그)

| 산출물              | 쿼리                                                          |
| ------------------- | ------------------------------------------------------------- |
| 최근 발송 50건      | `sql SELECT * FROM Email_Log ORDER BY sent_at DESC LIMIT 50;` |
| 특정 유저 메일 내역 | `sql SELECT * FROM Email_Log WHERE user_id = :userId;`        |
| 실패 메일만         | `sql SELECT * FROM Email_Log WHERE status = 'failed';`        |

---

## 📝 Host_Applications (호스트 신청)

| 산출물                | 쿼리                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 대기중 신청 목록      | `sql SELECT ha.application_id, u.name, u.email, ha.reason, ha.created_at FROM Host_Applications ha JOIN Users u ON ha.user_id = u.user_id WHERE ha.status = 'pending' ORDER BY ha.created_at;` |
| 특정 유저의 신청 상태 | `sql SELECT * FROM Host_Applications WHERE user_id = :userId;`                                                                                                                                 |
| 승인된 신청자         | `sql SELECT ha.application_id, u.name, u.email, ha.reviewed_at FROM Host_Applications ha JOIN Users u ON ha.user_id = u.user_id WHERE ha.status = 'approved';`                                 |
