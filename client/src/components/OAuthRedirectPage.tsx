import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const OAuthRedirectPage = ({ handleLogin }: { handleLogin: () => void }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // URL 쿼리 파라미터에서 'token' 값을 추출합니다.
        const token = searchParams.get('token');

        if (token) {
            // 토큰이 있다면 localStorage에 저장합니다.
            localStorage.setItem('token', token);
            // App.tsx의 로그인 상태를 업데이트합니다.
            handleLogin();
            alert('소셜 로그인이 완료되었습니다.');
            // 사용자를 홈페이지로 이동시킵니다.
            navigate('/');
        } else {
            // 토큰이 없다면 로그인 실패로 간주합니다.
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
            navigate('/login');
        }
    }, [searchParams, navigate, handleLogin]);

    // 사용자에게 보여줄 로딩 메시지
    return (
        <div>
            <p>로그인 처리 중입니다. 잠시만 기다려주세요...</p>
        </div>
    );
};

export default OAuthRedirectPage;