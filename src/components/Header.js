import { Link } from "react-router-dom";
import './Header.scss';

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
        <div className="wrapper">
        <h1>Team Bustle!</h1>
        <h2>We are Bustle, a solution that aims to improve employee retention and satisfaction at large organizations.</h2>
        <p>Help your employees:</p>
        <ul>
            <li>Feel supported and included through sharing of work-related events, mentorship, and project postings</li>
            <li>Ensure access to interesting growth opportunities by viewing and signing up for work-sharing tasks</li>
            <li>Display their "impact" and feel valued</li>
        </ul>
        </div>
        </header>
    )
}

export default Header;