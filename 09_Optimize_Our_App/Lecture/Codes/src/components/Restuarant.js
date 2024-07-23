import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestoCard from "./RestoCard";
import RestoError from "./RestoCardError";
const Restaurant = () => {
  const { resId } = useParams();
  console.log(resId);

  const restaurant = useRestuarantMenu();

  if (restaurant === null) return <Shimmer />;

  const list = restaurant?.filter((obj) => {
    if (obj.info.id === resId) {
      return <RestoCard key={obj.info.id} props={obj} />;
    }
  });
  console.log(list);
  return list.length === 0 ? (
    <RestoError />
  ) : (
    <div className="restaurant">
      <h1>{list[0].info.name}</h1>
      <h1>Rating: {list[0].info.avgRating}</h1>
      <h3>Cuisines : {list[0].info.cuisines.join(" ")}</h3>
      {/* <ul>
        {list[0].info.cuisines.map((obj) => (
          <li key={obj.id}>{obj}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default Restaurant;
