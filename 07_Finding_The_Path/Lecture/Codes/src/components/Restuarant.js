import { useEffect, useState } from "react";
import { API2 } from "../utils/constant";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestoCard from "./RestoCard";
const Restaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const res = await fetch(API2);
    const jsonData = await res.json();
    console.log("restuarant: ");
    console.log(jsonData);

    const newList =
      jsonData?.data?.success?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;
    console.log("newList: ");
    console.log(newList);
    setRestaurant(newList);
  };
  if (restaurant === null) return <Shimmer />;

  const list = restaurant.filter((obj) => {
    console.log(obj.info.id);
    console.log(resId);
    if (obj.info.id === resId) {
      return <RestoCard key={obj.info.id} props={obj} />;
    }
  });
  console.log(list);
  return (
    <div className="restaurant">
      <h1>{list[0].info.name}</h1>
      <h1>Rating: {list[0].info.avgRating}</h1>
      <h3>Cuisines : </h3>
      <ul>
        {list[0].info.cuisines.map((obj) => (
          <li key={obj.id}>{obj}</li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurant;
