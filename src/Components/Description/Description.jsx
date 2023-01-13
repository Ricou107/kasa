import './Description.css'
import Host from "../Host/Host";
import Ratings from "../Ratings/Ratings";

function Description({accommodation}) {
	return (
	<div className='Description'>
        <div className='General'>
            <p className='title'>{accommodation.title}</p>
            <p className='location'>{accommodation.location}</p>
            <div className='tags'>
                {accommodation.tags.map(tag => (
                <p className='tag' key={tag}>{tag}</p>
                ))}
            </div>
        </div>
        <div className='HostAndRatings'>
            <Host name={accommodation.host.name} picture={accommodation.host.picture}/>
            <Ratings rating={accommodation.rating}/>
        </div>

	</div>
	)
}

export default Description