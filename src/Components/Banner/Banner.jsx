import './Banner.css'

function Banner({img, text}) {
	return (
	<div className='banner'>
		<img src={img} alt='img' className='banner-img' />
		<p>{text}</p>
	</div>
	)
}

export default Banner;