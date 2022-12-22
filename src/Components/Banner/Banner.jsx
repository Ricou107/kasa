import logo from '../../Assets/logo.svg';
import './Banner.css'
import { NavLink } from "react-router-dom";

function Banner() {
    console.log(window.location.pathname)
	return (
        <div className='banner'>
            <img src={logo} alt='logo-kasa' className='banner-logo' />
            <ul className='banner-navbar'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "no-active"}>Accueil</NavLink></li>
                <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : "no-active"}>À propos</NavLink></li>
            </ul>
        </div>
    )
}

export default Banner;