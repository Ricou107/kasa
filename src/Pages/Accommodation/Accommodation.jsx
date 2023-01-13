import { useParams } from "react-router-dom";
import data from "../../Assets/data.json";
import { Navigate } from "react-router-dom";
import Banner from '../../Components/Banner/Banner';
import Description from '../../Components/Description/Description';
import Collapse from '../../Components/Collapse/Collapse'
import "./Accommodation.css"

function Accommodation() {
	let { id } = useParams(); 
	const accommodation = data.find((acco) => acco.id === id );
	console.log(accommodation)

	return <div className='accommodation'>
		{accommodation ? 
		<div>
			<Banner img={accommodation.cover}/> 
			<Description accommodation={accommodation}/>
			<div className="dropdowns">
				<Collapse title={'Description'} text={accommodation.description} />
				<Collapse title={'Équipements'} text={accommodation.equipments} />
			</div>
		</div>
			: <Navigate to="/404"/>}
	</div>
}

export default Accommodation;