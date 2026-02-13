// client/src/components/Login.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style-components/Login.css";
import apiClient from "../api/axiosConfig";

// --- 아이콘 ---
import googleIcon from "../assets/icon/google.png";
import kakaoIcon from "../assets/icon/kakao.png";
const NaverIcon = () => (
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M9.27271 3.5H12V12.5H9.27271V8.11989L6.1818 12.5H3.5V3.5H6.1818V7.88011L9.27271 3.5Z" fill="white"/>
    </svg>
);

const Login = ({ handleLogin }: { handleLogin: () => void }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSocialLogin = (provider: string) => {
        window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            handleLogin();
            alert("로그인에 성공했습니다!");
            navigate("/");
        } catch (error) {
            alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.");
            console.error("Login error:", error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="social-login">
                    <h3>간편 로그인</h3>
                    <div className="social-icons">
                        <button onClick={() => handleSocialLogin("google")} className="social-btn google"><img src={googleIcon} alt="Google" width="24" height="24" /></button>
                        <button onClick={() => handleSocialLogin("naver")} className="social-btn naver"><NaverIcon /></button>
                        <button onClick={() => handleSocialLogin("kakao")} className="social-btn kakao"><img src={kakaoIcon} alt="Kakao" width="24" height="24" /></button>
                    </div>
                </div>
                <div className="divider"><span>OR</span></div>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* 이메일, 비밀번호 폼 생략 */}
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="login-btn">로그인</button>
                </form>
                <div className="form-links">
                    <a href="/find-id">아이디 찾기</a>
                    <span>|</span>
                    <a href="/reset-password">비밀번호 재설정하기</a>
                </div>
            </div>
        </div>
    )
}

export default Login;