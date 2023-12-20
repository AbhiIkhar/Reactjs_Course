import resList from "../utils/appData";
import RestoCard from "./RestoCard";
import { useState } from "react";
const Main = () => {
  const [listres, setListres] = useState(resList);
  const topRestaurant = () => {
    const newRest = listres.filter((obj) => obj.data.avgRating > 4);
    setListres(newRest);
    console.log(newRest);
  };
  return (
    <div className="main">
      <div className="Search">
        <h1 onClick={topRestaurant}>Top Rated Restuarant</h1>
      </div>
      <div className="resList">
        {listres.map((obj) => (
          <RestoCard key={obj.data.id} resO={obj} />
        ))}
      </div>
    </div>
  );
};

export default Main;
