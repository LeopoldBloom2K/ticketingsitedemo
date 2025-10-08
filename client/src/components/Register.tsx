import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axiosConfig"; // API 통신을 위한 axios import
import "../style-components/Register.css";

// --- SVG 아이콘 컴포넌트들 (Login.tsx에서도 이 코드를 사용하세요) ---
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
);
const NaverIcon = () => (
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M9.27271 3.5H12V12.5H9.27271V8.11989L6.1818 12.5H3.5V3.5H6.1818V7.88011L9.27271 3.5Z" fill="white"/>
    </svg>
);
const KakaoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="#3C1E1E">
    <path d="M12 4.25c-4.97 0-9 3.16-9 7.05 0 2.46 1.62 4.68 3.94 5.97l-1.09 4.02 4.3-2.2c.58.1 1.19.16 1.85.16 4.97 0 9-3.16 9-7.05S16.97 4.25 12 4.25z"/>
  </svg>
);
// --- SVG 아이콘 컴포넌트 끝 ---

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        verificationCode: "",
        name: "",
        birthdate: "",
        password: "",
        confirmPassword: ""
    });
    const [isVerified, setIsVerified] = useState(false); // 이메일 인증 완료 여부 상태

    // 입력 필드 값이 변경될 때마다 상태 업데이트
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // '인증요청' 버튼 클릭 핸들러
    const handleSendVerification = async () => {
        if (!formData.email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        try {
            await apiClient.post("/auth/send-verification", { email: formData.email });
            alert("인증 코드가 발송되었습니다. 이메일을 확인해주세요. (프론트엔드 테스트)");
        } catch (error) {
            alert("인증 코드 발송에 실패했습니다.");
        }
    };

    // '확인' 버튼 (인증번호 검증) 클릭 핸들러
    const handleVerifyCode = async () => {
         if (!formData.verificationCode) {
            alert("인증 코드를 입력해주세요.");
            return;
        }
        try {
            await apiClient.post("/auth/verify-code", { email: formData.email, code: formData.verificationCode });
            alert("이메일 인증이 완료되었습니다. (프론트엔드 테스트)");
            setIsVerified(true); // 인증 성공 시 상태 변경
        } catch (error) {
            alert("인증 코드가 올바르지 않습니다.");
        }
    };

    // '회원가입' 버튼 클릭 핸들러
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isVerified) {
            alert("이메일 인증을 먼저 완료해주세요.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const userData = {
                email: formData.email,
                name: formData.name,
                birthdate: formData.birthdate,
                password: formData.password
            };
            await apiClient.post("/auth/register", userData);
            alert("회원가입이 완료되었습니다! (프론트엔드 테스트)");
            navigate("/login");
        } catch (error: any) {
             alert(`회원가입 실패: ${error.response?.data || error.message}`);
        }
    };

    // 소셜 회원가입 버튼 클릭 핸들러
    const handleSocialRegister = (provider: string) => {
        alert(`${provider}로 회원가입 기능은 현재 준비 중입니다.`);
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="social-register">
                    <h3>간편 회원가입</h3>
                    <div className="social-icons">
                         <button onClick={() => handleSocialRegister("google")} className="social-btn google"><GoogleIcon /></button>
                         <button onClick={() => handleSocialRegister("naver")} className="social-btn naver"><NaverIcon /></button>
                         <button onClick={() => handleSocialRegister("kakao")} className="social-btn kakao"><KakaoIcon /></button>
                    </div>
                </div>

                <div className="divider"><span>OR</span></div>

                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <div className="input-with-button">
                            <input type="email" id="email" value={formData.email} onChange={handleChange} required disabled={isVerified} />
                            <button type="button" onClick={handleSendVerification} disabled={isVerified}>인증요청</button>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="verificationCode">인증번호</label>
                        <div className="input-with-button">
                            <input type="text" id="verificationCode" value={formData.verificationCode} onChange={handleChange} required disabled={isVerified} />
                            <button type="button" onClick={handleVerifyCode} disabled={isVerified}>확인</button>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">사용자 이름</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="birthdate">생년월일</label>
                        <input type="date" id="birthdate" value={formData.birthdate} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="register-btn">회원가입</button>
                </form>

                <div className="form-links">
                    <span>이미 계정이 있으신가요?</span>
                    <a href="/login">로그인</a>
                </div>
            </div>
        </div>
    )
}

export default Register;