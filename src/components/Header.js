import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
        <nav className="header__topNav">
            <ul className="header__topNavList">
                <li><Link to="/architecture">App Architecture</Link></li>
                <li><Link to="/presentation">Presentation</Link></li>
                <li><Link to="/teaminfo">About Our Team</Link></li>
            </ul>
        </nav>
        <h1>Team Bustle!</h1>
        </header>
    )
}

export default Header;