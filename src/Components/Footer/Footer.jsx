import './Footer.css'
import logo from '../../Assets/logoWhite.svg';

function Footer() {
	return (
	<div className='footer'>
		<img src={logo} alt='logo-kasa' className='footer-logo' />
		<p>© 2020 Kasa. All rights reserved</p>
	</div>
	)
}

export default Footer