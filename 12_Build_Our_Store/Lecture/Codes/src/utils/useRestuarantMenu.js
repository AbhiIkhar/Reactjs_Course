import { useEffect, useState } from "react";
import { RestaurantAPI } from "../utils/constant";

const useRestuarantMenu = ({ resId }) => {
  const [restaurant, setRestaurant] = useState(null);

  console.log("resId: " + resId);

  const API = RestaurantAPI + resId;

  console.log(API);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(API);
    const json = await response.json();

    setRestaurant(json);
  }

  return restaurant;
};

export default useRestuarantMenu;
