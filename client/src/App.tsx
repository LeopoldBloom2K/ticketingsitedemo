import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

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
                    {/* Add other routes here */}
                </Routes>
            </div>
            {/* Footer */}
            <Footer />
        </Router>
    );
};

export default App;