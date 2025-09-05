import { Link } from 'react-router-dom';
import '../style-components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-links">
                    <Link to="/about" className="footer-link">About Us</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                </div>
                <div className="footer-social">
                    {/* 소셜 미디어 아이콘 또는 링크를 여기에 추가하세요 */}
                </div>
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Ticket. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;