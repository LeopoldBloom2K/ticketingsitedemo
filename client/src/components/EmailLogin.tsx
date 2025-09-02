import React from "react";
import { useNavigate } from "react-router-dom";
import "../style-components/EmailLogin.css";

const EmailLogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 이메일 회원가입 로직 추가
        console.log("Email: "+email);
        console.log("Password: "+password);
        alert("로그인중입니다");
        navigate("/");
    }

    return (
        <div className="email-Login">
            <div className="Login-form">
                <h2>이메일로 로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">로그인</button>
                </form>
            </div>
        </div>
    ); 
}

export default EmailLogin;