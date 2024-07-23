import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { API2 } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
  // const [practiseData, setPractiseData] = useState(resList);

  // Can be written like this also

  const [practiseData, setPractiseData] = useState(null);
  const [cross, setCross] = useState(false);
  const [back, setBack] = useState(false);
  console.log("useState()");
  console.log(useState(["Haribol"]));
  const [resList, setReslist] = useState(null);

  const [searchText, setSearchtext] = useState("");
  // console.log("Main rendered");
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const res = await fetch(API2);
    const jsonData = await res.json();
    // console.log(jsonData);
    // console.log(
    //   jsonData?.data.cards[2].card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    const newList =
      jsonData?.data?.success?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;
    console.log(newList);
    setPractiseData(newList);
    setReslist(newList);
  };
  console.log(useOnlineStatus());
  if (!useOnlineStatus())
    return (
      <h1>Hey! You seems to offline please check your internet conectivity</h1>
    );

  // Here we put condition and we are rendering the things
  // This is known as conditional rendering
  return practiseData === undefined || practiseData === null ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="flex-col justify-center content-center">
      <div className="flex justify-around content-center bg-pink mx-10">
        {back ? (
          <button
            className="bg-black px-2 py-1 text-white rounded-lg fixed left-1"
            onClick={() => {
              setPractiseData(resList);
              setBack(false);
            }}
          >
            Back
          </button>
        ) : (
          <></>
        )}
        <div className="flex search gap-1">
          <input
            className="border-solid border-black border-2 rounded-lg p-2
            focus:caret-indigo-500"
            type="search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          {/* So here value is bind with searchText so if value changes then searchText needs to be change but here this is not 
          happing */}
          <button
            className="bg-lime-300 px-2 py-1 rounded-lg hover:bg-lime-500"
            onClick={() => {
              const newList = resList.filter((obj) => {
                return obj.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setPractiseData(newList);
              setBack(true);
              console.log("Filtering the res acc search");
            }}
          >
            search
          </button>
        </div>
        <div className="flex gap-1">
          {cross === true ? (
            <button
              onClick={() => {
                setPractiseData(resList);
                setCross(false);
              }}
            >
              ☒
            </button>
          ) : (
            <></>
          )}

          <button
            className="bg-orange-500 px-2 py-1 
            rounded-lg 
            hover:bg-orange-800
            shadow-lg
            shadow-orange-800"
            onClick={() => {
              const list = resList.filter((obj) => {
                return obj.info.avgRating > 4.5;
              });
              setPractiseData(list);
              console.log(practiseData);
              setCross(true);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center content-center m-5">
        {practiseData.map((obj) => (
          <Link
            className="restoPage"
            key={obj.info.id}
            to={"/restaurant/" + obj.info.id}
          >
            <RestoCard resO={obj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
