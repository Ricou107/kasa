import './Banner.css'
import { useState } from 'react';
import leftArrow from '../../Assets/leftArrow.svg';
import rightArrow from '../../Assets/rightArrow.svg';
import useWindowDimensions from '../../Scripts/windowSize';

function Banner({img, text}) {
	const [pictureNumber, updatePictureNumber] = useState(0)

	const { width } = useWindowDimensions();

	return (
	<div className='banner'>
			{typeof(img) === 'string' ? <img src={img} alt='img' className='banner-img' />
			: <div className='carousel'>
				{(width > 600) ? <img src={leftArrow} alt='leftArrow' className='leftArrow' onClick={() => {pictureNumber === 0 ? updatePictureNumber(img.length - 1) : updatePictureNumber(pictureNumber - 1)}}/> : ''}
				<img src={img[pictureNumber]} alt='img' className='banner-img' />
				{(width > 600) ? <img src={rightArrow} alt='rightArrow' className='rightArrow' onClick={() => {pictureNumber === img.length - 1 ? updatePictureNumber(0) : updatePictureNumber(pictureNumber + 1)}}/> : ''}
				{(width > 600) ? <p className='carousel-text'>{`${pictureNumber + 1}/${img.length}`}</p> : ''}
			</div>}
		<p className='banner-title'>{text}</p>
	</div>
	)
}

export default Banner;