import './Factory.css';
import { Link } from "react-router-dom";


function Factory({accommodation}) {

  return (
    <Link to={`/accommodation/${accommodation.id}`}>
    <div className="accommodation-card">
        <img src={accommodation.pictures[0]} alt='img' className='card-img' />
        <p>{accommodation.title}</p>
    </div>
    </Link>
  );
}

export default Factory;
