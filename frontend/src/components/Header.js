import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <h2>CONTACT FORM</h2>
            <div>
            <Link className="router-link" to="/">Contact Us</Link>
            <Link className="router-link" to="/admin">Admin Login</Link>
            </div>
        </div>
    )
}

export default Header;
