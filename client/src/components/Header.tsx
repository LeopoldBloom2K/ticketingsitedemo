import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style-components/Header.css';

const Header = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search?query=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        /* Header setting */
        <header className="header">
            {/* Header inner setting */}
            <div className="header-inner">
                {/* 좌측 로고 */}
                <Link to ="/" className="logo">
                    Ticket
                </Link>

                {/* Search bar */}
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

                {/* Navigation */}
                <nav className="nav">
                    <Link to="/events" className="nav-link">이벤트</Link>
                    <Link to="/Login" className="nav-link">로그인</Link>
                    <Link to="/register" className="nav-link">회원가입</Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;