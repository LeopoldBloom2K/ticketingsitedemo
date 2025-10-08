import React, { useState } from 'react'; // useState를 import에 추가
import { Link, useNavigate } from 'react-router-dom';
import '../style-components/Header.css';

// App.tsx로부터 isLoggedIn과 handleLogout을 props로 받음
const Header = ({ isLoggedIn, handleLogout }: { isLoggedIn: boolean, handleLogout: () => void }) => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search?query=${encodeURIComponent(keyword)}`);
        }
    };
    
    // 로그아웃 시 navigate를 추가
    const onLogout = () => {
        handleLogout();
        navigate('/');
    };

    return (
        <header className="header">
            <div className="header-inner">
                <Link to ="/" className="logo">
                    Ticket
                </Link>
                <form className="search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="이벤트, 팀을 입력하세요"
                        className="search-input" value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type='submit' className="search-button">
                        검색
                    </button>
                </form>
                <nav className="nav">
                    <Link to="/events" className="nav-link">이벤트</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/mypage" className="nav-link">마이페이지</Link>
                            <button onClick={onLogout} className="nav-link-button">로그아웃</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">로그인</Link>
                            <Link to="/register" className="nav-link">회원가입</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
};

export default Header;