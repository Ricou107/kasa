import logo from '../../Assets/logo.svg';
import './Header.css'
import { NavLink } from "react-router-dom";

function Header() {
	return (
        <div className='header'>
            <img src={logo} alt='logo-kasa' className='header-logo' />
            <ul className='header-navbar'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "no-active"}>Accueil</NavLink></li>
                <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : "no-active"}>À propos</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;