import Banner from "../../Components/Banner/Banner";
import img from "../../Assets/about-us.png";
import "./AboutUs.css"

function AboutUs() {
	return <div className='about-us'>
		<Banner img={img} />
	</div>
}

export default AboutUs;