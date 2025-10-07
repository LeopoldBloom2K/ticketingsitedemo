import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import FindId from "./components/FindId";
import FindPassword from "./components/RequestPasswordReset";
import ConfirmPasswordReset from "./components/ConfirmPasswordReset";

const App = () => {
    return (
        <Router>
            {/* Header */}
            <Header />
            {/* Body */}
            <div className="Body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* ID, Password Reset Routes */}
                    <Route path="/find-id" element={<FindId />} />
                    <Route path="/reset-password" element={<FindPassword />} />
                    <Route path="/confirm-password-reset/:token" element={<ConfirmPasswordReset />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
            {/* Footer */}
            <Footer />
        </Router>
    );
};

export default App;