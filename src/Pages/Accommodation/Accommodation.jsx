import { useParams } from "react-router-dom";
import data from "../../Assets/data.json";
import { Navigate } from "react-router-dom";


function Accommodation() {
	let { id } = useParams(); 
	const accommodation = data.find((acco) => acco.id === id );

	return <div className='accommodation'>
		{accommodation ? <p>ok</p> : <Navigate to="/404"/>}
	</div>
}

export default Accommodation;