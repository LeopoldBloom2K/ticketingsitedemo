import { useNavigate } from "react-router-dom";
import "../style-components/Register.css";

// SVG 아이콘 컴포넌트
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
       fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
);

const NaverIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="currentColor" d="M9.273 3.5H12v9H9.273V8.12L6.182 12.5H3.5V3.5h2.682v4.38L9.273 3.5z"/>
    </svg>
);

const KakaoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 4.25c-4.97 0-9 3.16-9 7.05 0 2.46 1.62 4.68 3.94 5.97l-1.09 4.02 4.3-2.2c.58.1 1.19.16 1.85.16 4.97 0 9-3.16 9-7.05S16.97 4.25 12 4.25z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M16.36 13.52c.03 3.06 2.7 4.08 2.73 4.09-.02.07-.43 1.5-1.42 2.98-.86 1.25-1.76 2.5-3.17 2.53-1.38.03-1.82-.82-3.39-.82-1.57 0-2.06.79-3.36.85-1.35.05-2.38-1.35-3.27-2.6-1.78-2.55-3.15-7.2-1.32-10.34.91-1.58 2.54-2.58 4.31-2.61 1.35-.03 2.63.91 3.39.91.76 0 2.34-1.13 3.95-1 .67.03 2.56.27 3.77 2.07-.1.06-2.25 1.32-2.21 3.94zM14.54 4.3c.73-.91 1.22-2.18 1.09-3.45-1.06.04-2.39.71-3.16 1.62-.69.81-1.28 2.12-1.12 3.37 1.19.09 2.42-.6 3.19-1.54z"/>
  </svg>
);

const Register = () => {
    // useNavigate 훅을 사용하여 페이지 이동 함수 생성
    const navigate = useNavigate();

    // 이메일 회원가입 버튼 클릭 핸들러
    const handleEmailRegister = () => {
        navigate("/register/email");
    }
    
    // 소셜 회원가입 버튼 클릭 핸들러
    const handleSocialRegister = (provider: string) => {
        alert(`${provider}로 회원가입 기능은 현재 준비 중입니다.`);
        console.log(`${provider}로 회원가입 시도`);
    }

    return (
        //메인 컨테이너
        <div className="register">
            {/* 회원가입 옵션 섹션 */}
            <div className="register-options">
                <h2>회원가입 페이지</h2>
                {/* 옵션 리스트 */}
                <div className="options-list">
                    <button onClick={handleEmailRegister} className="option-btn email">
                        <EmailIcon />
                        <span>Email로 시작하기</span>
                    </button>
                    <button onClick={() => handleSocialRegister("google")} className="option-btn google">
                        <GoogleIcon />
                        <span>Google로 시작하기</span>
                    </button>
                    <button onClick={() => handleSocialRegister("naver")} className="option-btn naver">
                        <NaverIcon />
                        <span>Naver로 시작하기</span>
                    </button>
                    <button onClick={() => handleSocialRegister("kakao")} className="option-btn kakao">
                        <KakaoIcon />
                        <span>Kakao로 시작하기</span>
                    </button>
                    <button onClick={() => handleSocialRegister("apple")} className="option-btn apple">
                        <AppleIcon />
                        <span>Apple로 시작하기</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;