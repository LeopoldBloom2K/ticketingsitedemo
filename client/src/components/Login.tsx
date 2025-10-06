import React from "react";
import { useNavigate } from "react-router-dom";
import "../style-components/Login.css";
import apiClient from "../api/axiosConfig"; // API 통신을 위한 axios import

// SVG 아이콘 컴포넌트
// Google Icon SVG (기존 버전으로 복원)
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
);

// Naver Icon SVG (N 로고만 있는 간단한 버전으로 수정)
const NaverIcon = () => (
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M9.27271 3.5H12V12.5H9.27271V8.11989L6.1818 12.5H3.5V3.5H6.1818V7.88011L9.27271 3.5Z" fill="white"/>
    </svg>
);

// Kakao Icon SVG
const KakaoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="#3C1E1E">
    <path d="M12 4.25c-4.97 0-9 3.16-9 7.05 0 2.46 1.62 4.68 3.94 5.97l-1.09 4.02 4.3-2.2c.58.1 1.19.16 1.85.16 4.97 0 9-3.16 9-7.05S16.97 4.25 12 4.25z"/>
  </svg>
);

const Login = () => {
    const navigate = useNavigate();

    const handleSocialLogin = (provider: string) => {
        alert(`${provider}로 로그인 기능은 현재 준비 중입니다.`);
        console.log(`${provider}로 로그인 시도`);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("로그인 중입니다.");
        navigate("/");
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="social-login">
                    <h3>간편 로그인</h3>
                    <div className="social-icons">
                        <button onClick={() => handleSocialLogin("google")} className="social-btn google">
                            <GoogleIcon />
                        </button>
                        <button onClick={() => handleSocialLogin("naver")} className="social-btn naver">
                            <NaverIcon />
                        </button>
                        <button onClick={() => handleSocialLogin("kakao")} className="social-btn kakao">
                            <KakaoIcon />
                        </button>
                    </div>
                </div>

                <div className="divider">
                    <span>OR</span>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="id">아이디</label>
                        <input type="text" id="id" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="login-btn">로그인</button>
                </form>

                <div className="form-links">
                    <a href="#">아이디 찾기</a>
                    <span>|</span>
                    <a href="#">비밀번호 재설정하기</a>
                </div>
            </div>
        </div>
    )
}

export default Login;