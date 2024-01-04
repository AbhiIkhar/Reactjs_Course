import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Main = () => {
  // const [practiseData, setPractiseData] = useState(resList);

  // Can be written like this also

  const [practiseData, setPractiseData] = useState([]);
  const [resList, setReslist] = useState([]);

  const [searchText, setSearchtext] = useState("");
  // console.log("Main rendered");
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await res.json();
    console.log(jsonData);
    console.log(
      jsonData?.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    const newList =
      jsonData?.data.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setPractiseData(newList);
    setReslist(newList);
  };

  // Here we put condition and we are rendering the things
  // This is known as conditional rendering
  return practiseData == undefined || practiseData.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="main">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          {/* So here value is bind with searchText so if value changes then searchText needs to be change but here this is not 
          happing */}
          <button
            onClick={() => {
              const newList = resList.filter((obj) => {
                return obj.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setPractiseData(newList);
              console.log("Filtering the res acc search");
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const list = resList.filter((obj) => {
              return obj.info.avgRating > 4.5;
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
          <RestoCard key={obj.info.id} resO={obj} />
        ))}
      </div>
    </div>
  );
};

export default Main;
