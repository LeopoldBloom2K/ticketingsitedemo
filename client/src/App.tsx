import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"; // useState, useEffect 추가
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import FindId from "./components/FindId";
import FindPassword from "./components/RequestPasswordReset";
import ConfirmPasswordReset from "./components/ConfirmPasswordReset";

const App = () => {
    // 1. 로그인 상태를 App 컴포넌트에서 관리
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 2. 앱 시작 시 토큰 확인하여 초기 로그인 상태 설정
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    // 3. 로그인/로그아웃 처리 함수
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        alert('로그아웃 되었습니다.');
        // navigate('/'); // App 컴포넌트에서는 navigate를 직접 사용하기 복잡하므로 Header에서 처리
    };

    return (
        <Router>
            {/* Header에 상태와 함수를 props로 전달 */}
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <div className="Body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    {/* Login에 로그인 처리 함수를 props로 전달 */}
                    <Route path="/login" element={<Login handleLogin={handleLogin} />} />

                    <Route path="/find-id" element={<FindId />} />
                    <Route path="/reset-password" element={<FindPassword />} />
                    <Route path="/confirm-password-reset/:token" element={<ConfirmPasswordReset />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;