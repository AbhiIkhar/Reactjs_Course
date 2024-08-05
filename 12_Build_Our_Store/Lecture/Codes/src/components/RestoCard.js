import { CDN_URL } from "../utils/constant";

const RestoCard = (props) => {
  const { resO } = props;
  const { name, costForTwo, deliveryTime, cloudinaryImageId, avgRating } =
    resO?.info;

  return (
    <div
      className=" flex-col 
      transition delay-75 duration-75 ease-in 
    w-[250px] 
    h-[450px] 
    p-2 
    m-2 
    border-solid 
    border-black 
    border-[1px] 
    rounded-lg 
    bg-red-300 
    gap-1

    hover:bg-red-400 
    "
    >
      <div>
        <img className="w-[100%] h-[30%]" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="flex-col justify-center content-center text-center">
        <h3 className="font-bold py-2">{name}</h3>
        <h3>Prize is {costForTwo}</h3>
        <h3>Deliver in {deliveryTime} min</h3>
        <h3>Rating is {avgRating}</h3>
      </div>
    </div>
  );
};

export const LabelRestaurant = (RestoCard) => {
  return (props) => {
    const { resO } = props;
    console.log(resO?.info?.aggregatedDiscountInfoV2?.header);
    return (
      <div>
        <label className="absolute m-2 p-2 text-white text-3xl">
          {resO?.info?.aggregatedDiscountInfoV2?.header}
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
