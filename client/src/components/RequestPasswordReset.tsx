import React, { useState } from 'react';
import apiClient from '../api/axiosConfig';
import '../style-components/PasswordReset.css'; // 공통 CSS 사용

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        try {
            // 백엔드에 비밀번호 재설정 요청
            // await apiClient.post('/auth/request-password-reset', { email });
            setMessage('비밀번호 재설정 링크가 이메일로 발송되었습니다. 이메일을 확인해주세요.');
        } catch (error) {
            setMessage('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="password-reset-container">
            <div className="password-reset-box">
                <h2>비밀번호 재설정</h2>
                {message ? (
                    <p>{message}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <p>가입한 이메일 주소를 입력하시면, 비밀번호 재설정 링크를 보내드립니다.</p>
                        <div className="input-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">재설정 링크 받기</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RequestPasswordReset;