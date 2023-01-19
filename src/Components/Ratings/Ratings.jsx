import './Ratings.css'
import greyStar from '../../Assets/greyStar.svg';
import orangeStar from '../../Assets/orangeStar.svg';

function Ratings({rating}) {
    rating = parseInt(rating)
    let ratingArray = []
    for (let i = 0; i < 5 ; i++) {
        if (rating > 0) {
            ratingArray.push(true)
            rating --
        } else {
            ratingArray.push(false)
        }
    }

	return (
	<div className='Ratings'>
        {ratingArray.map((isGood, index) => (
            isGood ? <img key={'orangeStar' + index} src={orangeStar} alt='rating' className='orangeStar'/> : <img key={'greyStar' + index} src={greyStar} alt='rating' className='greyStar'/>
        ))}
	</div>
	)
}

export default Ratings