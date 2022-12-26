import data from "../../Assets/data.json"
import Factory from "../Factory/Factory";
import "./HomepageList.css";

function HomepageList() {
  return (
    <div className="homepage-list">
        {data.map(acco => (
       <Factory key={acco.id} accommodation={acco} />
        ))}
    </div>
  );
}

export default HomepageList;
