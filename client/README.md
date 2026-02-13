# 티켓 예매 플랫폼 Front-End

---

## 완료상황

- 이메일 로그인과 회원가입 페이지
- 구글 소셜로그인 세팅
- 아이디 찾기 / 비밀번호 재설정 페이지 (UI 구현, API 미연동)
- 마이페이지 (프로필 조회, 비밀번호 변경, 호스트 신청현황)
- 이벤트 목록 페이지 (카테고리 필터, 검색)
- 이벤트 상세 페이지 (공연 소개, 정보, 예매 카드)
- 홈 페이지 (히어로 배너, 카테고리, 인기/오픈 예정 이벤트)
- 라이트/다크 모드 지원

---

## 현재 진행사항

- 이벤트 예매 기능 구현 예정
- 비밀번호 재설정 백엔드 API 연동 필요
- 호스트 신청현황 백엔드 API 연동 필요

---

## 페이지 구성

| 경로 | 페이지 | 파일 |
| --- | --- | --- |
| `/` | 홈 | `pages/Home.tsx` |
| `/login` | 로그인 | `components/Login.tsx` |
| `/register` | 회원가입 | `components/Register.tsx` |
| `/mypage` | 마이페이지 | `components/Mypage.tsx` |
| `/events` | 이벤트 목록 | `pages/Events.tsx` |
| `/events/:id` | 이벤트 상세 | `pages/EventDetail.tsx` |
| `/find-id` | 아이디 찾기 | `components/FindId.tsx` |
| `/reset-password` | 비밀번호 재설정 요청 | `components/RequestPasswordReset.tsx` |
| `/confirm-password-reset/:token` | 비밀번호 재설정 확인 | `components/ConfirmPasswordReset.tsx` |

---

## 실행 필수 라이브러리

```
npm install axios
npm install react
npm install react-router-dom
```

---

## 실행방법

```
npm install
npm run dev
```
