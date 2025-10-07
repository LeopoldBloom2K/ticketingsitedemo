import React, { useState } from 'react';
import apiClient from '../api/axiosConfig';
import '../style-components/FindId.css'; // 이 CSS 파일도 새로 만들어야 합니다.

const FindId = () => {
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [foundEmail, setFoundEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setFoundEmail('');

        try {
            // 백엔드에 이름과 생년월일을 보내 이메일을 찾아달라고 요청합니다.
            // const response = await apiClient.post('/auth/find-id', { name, birthdate });
            // setFoundEmail(response.data.email);

            // 프론트엔드 테스트용 목업(mock) 데이터
            setFoundEmail('test****@gmail.com');

        } catch (error) {
            setErrorMessage('일치하는 사용자를 찾을 수 없습니다.');
        }
    };

    return (
        <div className="find-id-container">
            <div className="find-id-box">
                <h2>아이디 찾기</h2>
                {!foundEmail ? (
                    <form onSubmit={handleSubmit}>
                        <p>가입 시 입력한 이름과 생년월일을 입력해주세요.</p>
                        <div className="input-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthdate">생년월일</label>
                            <input
                                type="date"
                                id="birthdate"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">아이디 찾기</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                ) : (
                    <div className="result-box">
                        <p>회원님의 아이디는 아래와 같습니다.</p>
                        <div className="found-email">{foundEmail}</div>
                        <a href="/login" className="submit-btn">로그인 하러 가기</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindId;