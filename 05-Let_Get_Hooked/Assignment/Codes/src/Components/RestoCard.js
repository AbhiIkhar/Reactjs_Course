import { CDN_LINK } from "../utils/constant";

const RestoCard = (props) => {
  const { resO } = props;
  const { name, costForTwo, deliveryTime, cloudinaryImageId, avgRating } =
    resO?.data;
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_LINK + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>Prize is {costForTwo}</h3>
      <h3>Deliver in {deliveryTime} min</h3>
      <h3>Rating is {avgRating}</h3>
    </div>
  );
};

export default RestoCard;
