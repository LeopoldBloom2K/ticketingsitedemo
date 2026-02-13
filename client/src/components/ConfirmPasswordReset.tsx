import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../api/axiosConfig";
import "../style-components/PasswordReset.css"; // 공통 CSS 사용

const ConfirmPasswordReset = () => {
  const { token } = useParams<{ token: string }>(); // URL에서 토큰 파라미터 가져오기
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    setMessage("");

    try {
      // 백엔드에 토큰과 새 비밀번호를 보내 변경 요청
      // await apiClient.post('/auth/confirm-password-reset', { token, password });
      alert("비밀번호가 성공적으로 변경되었습니다.");
      navigate("/login");
    } catch (error) {
      setMessage("유효하지 않거나 만료된 링크입니다.");
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        <h2>새 비밀번호 설정</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="password">새 비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">새 비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            비밀번호 변경
          </button>
          {message && <p className="error-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ConfirmPasswordReset;
