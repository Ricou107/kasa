import './Factory.css';

function Factory({accommodation}) {

  return (
    <div className="accommodation-card">
        <img src={accommodation.pictures[0]} alt='img' className='card-img' />
        <p>{accommodation.title}</p>
    </div>
  );
}

export default Factory;
