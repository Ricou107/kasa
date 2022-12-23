import data from "../../Assets/data.json"
import Factory from "../Factory/Factory";
import "./HomepageList.css";

function HomepageList() {
  data.forEach((acco) => console.log(acco));  

  return (
    <div className="homepage-list">
        {data.map(acco => (
       <Factory accommodation={acco} />
        ))}
    </div>
  );
}

export default HomepageList;
