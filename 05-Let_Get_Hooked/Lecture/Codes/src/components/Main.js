import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Main = () => {
  // const [practiseData, setPractiseData] = useState(resList);

  // Can be written like this also
  const arr = useState(resList);

  const [practiseData, setPractiseData] = arr;

  return (
    <div className="main">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const list = practiseData.filter((obj) => {
              return obj.data.deliveryTime < 30;
            });
            setPractiseData(list);
            console.log(practiseData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resList">
        {practiseData.map((obj) => (
          <RestoCard key={obj.data.id} resO={obj} />
        ))}
      </div>
    </div>
  );
};

export default Main;
