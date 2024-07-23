import { useEffect, useState } from "react";
import { API2 } from "./constant";
const useRestuarantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
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

  return restaurant;
};

export default useRestuarantMenu;
