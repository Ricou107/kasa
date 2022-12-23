import './Home.css';
import Banner from '../../Components/Banner/Banner';
import img from '../../Assets/home.png'
import HomepageList from '../../Components/HomepageList/HomepageList';

function Home() {
  return (
    <div className="home">
      <Banner img={img} text={'Chez vous, partout et ailleurs'}/>
      <HomepageList />
    </div>
  );
}

export default Home;
