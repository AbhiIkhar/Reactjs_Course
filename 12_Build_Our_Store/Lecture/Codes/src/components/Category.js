import { useState } from "react";
import ItemCard from "./ItemCard";

const Category = ({ resObj, toggle, setShowIndex, setNullIndex }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    open ? setShowIndex() : setNullIndex();

    setOpen(!open);
  };

  //    Building Accordian
  return (
    <div
      id={resObj.card.card.title}
      className="w-full border-b-2 border-1 py-1 border-gray-400 shadow-sm shadow-gray-500 m-2"
    >
      <div
        className="flex flex-row justify-between text-xl text-bold my-3 px-2 cursor-pointer "
        onClick={handleClick}
      >
        <h1 className="text-xl font-bold">
          {resObj.card.card.title}({resObj?.card?.card?.itemCards.length})
        </h1>
        <span>🔽</span>
      </div>
      {toggle ? (
        resObj?.card?.card?.itemCards.map((obj) => {
          // console.log(obj?.card?.info);
          // console.log(obj?.card?.info.id);
          return (
            <ItemCard key={obj?.card?.info?.id} resObj={obj?.card?.info} />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Category;
