# 250829 - 첫 계획

| 항목      | 기술              |
| --------- | ----------------- |
| Front-End | Vite + React + Ts |
| Back-End  | Spring            |
| DB        | Mysql             |
| App       |                   |

---

## 9월 활동 예상

- 로그인과 회원가입 페이지 생성
  - 25.09.15 마감

---

## 활동 내용

### 9월

- 1일
  - 회원가입 페이지 백엔드 로직 구성

- 2일
  - 회원가입 페이지 프론트엔드 구성
    <img src="../img/web/Register.png" width="600" alt="회원가입페이지">
    <img src="../img/web/EmailRegister.png" width="600" alt="이메일회원가입페이지">

  - 로그인 페이지 프론트엔드 구성
    <img src="../img/web/Login.png" width="600" alt="로그인페이지">
    <img src="../img/web/EmialLogin.png" width="600" alt="로그인페이지">

---

### 프론트엔드 페이지 구현 현황

| 페이지 | 상태 | 비고 |
| --- | --- | --- |
| 홈 | 완료 | 히어로 배너, 카테고리, 인기/오픈 예정 이벤트 |
| 로그인 | 완료 | 이메일 + 소셜(구글/네이버/카카오) |
| 회원가입 | 완료 | 이메일 인증 + 소셜 |
| 마이페이지 | 완료 | 프로필 조회, 비밀번호 변경, 호스트 신청현황 |
| 이벤트 목록 | 완료 | 카테고리 필터, 검색, 카드 그리드 |
| 이벤트 상세 | 완료 | 공연 소개, 정보, 예매 카드 |
| 아이디 찾기 | UI만 완료 | 백엔드 API 미연동 |
| 비밀번호 재설정 | UI만 완료 | 백엔드 API 미연동 |

### 백엔드 API 구현 현황

| API | 상태 | 비고 |
| --- | --- | --- |
| 회원가입 (`/auth/register`) | 완료 | |
| 로그인 (`/auth/login`) | 완료 | JWT 토큰 발급 |
| 이메일 인증 (`/auth/send-verification`, `/auth/verify-code`) | 완료 | |
| OAuth2 소셜 로그인 | 완료 | 구글/네이버/카카오 |
| 비밀번호 변경 (`/auth/change-password`) | 미구현 | |
| 비밀번호 재설정 | 미구현 | |
| 호스트 신청현황 (`/host-application/my`) | 미구현 | |
| 이벤트 CRUD | 미구현 | EventRepository만 존재 |
