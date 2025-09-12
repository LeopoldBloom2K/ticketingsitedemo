# Ticketing Site Project (가명)

# 파일 구조

1️⃣ 개념 구조
```
ServerApplication
│
├─ Domain (Entity)
│    ├─ Member.java           → JPA Entity (회원 관리)
│    ├─ Admin.java            → JPA Entity (관리자)
│    └─ Ticket.java           → MyBatis 도메인 객체 (좌석/발권)
│
├─ Repository
│    ├─ MemberRepository.java → JPA Repository
│    └─ AdminRepository.java  → JPA Repository
│
├─ Mapper (MyBatis)
│    ├─ TicketMapper.java     → XML/SQL 직접 작성
│    └─ PaymentMapper.java    → 결제/로그 관련 SQL
│
├─ Service
│    ├─ MemberService.java    → JPA Repository 호출
│    ├─ AdminService.java     → JPA Repository 호출
│    └─ TicketService.java    → Mapper 호출
│
└─ Controller
├─ MemberController.java
├─ AdminController.java
└─ TicketController.java
```
## 현재 진행 상황
- ~~로그인 / 회원가입 페이지 구상~~     👉 DB 구현 진행 중
- Whitelabel Error Page HTML 작성
- 실행 중 페이지 HTML 작성

## 실행
```bash
./gradlew bootRun
```