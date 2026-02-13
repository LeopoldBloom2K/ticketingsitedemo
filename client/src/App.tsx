import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import FindId from "./components/FindId";
import FindPassword from "./components/RequestPasswordReset";
import ConfirmPasswordReset from "./components/ConfirmPasswordReset";
import OAuthRedirectPage from "./components/OAuthRedirectPage";
import Mypage from "./components/Mypage";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/oauth2/redirect"
            element={<OAuthRedirectPage handleLogin={handleLogin} />}
          />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/reset-password" element={<FindPassword />} />
          <Route
            path="/confirm-password-reset/:token"
            element={<ConfirmPasswordReset />}
          />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
