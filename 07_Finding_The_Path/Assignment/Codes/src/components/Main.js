import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";

const Main = () => {
  const [practiseData, setPractiseData] = useState([]);
  const [resList, setRestList] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const fetchAPI = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await res.json();
    console.log(jsonData);
    const newList =
      jsonData?.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setPractiseData(newList);
    setRestList(newList);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return practiseData === undefined || practiseData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter">
        <div className="Search">
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              let list = resList.filter((obj) =>
                obj.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setPractiseData(list);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let list = resList.filter((obj) => obj.info.avgRating >= 4.3);
            console.log(list);
            setPractiseData(list);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="resList">
        {practiseData.map((obj) => (
          <RestoCard key={obj.info.id} resO={obj} />
        ))}
      </div>
    </div>
  );
};

export default Main;
