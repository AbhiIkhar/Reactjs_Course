import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
const Cart = () => {
  const list = useSelector((store) => store.cart.list);
  console.log(list);
  //   return "Cart it is";
  return (
    <div className="border-2 m-auto my-10  w-6/12 border-gray-500 shadow-sm shadow-gray-600">
      {list.map((obj) => (
        <div className="flex border-b-2 p-2 border-gray-500">
          <div className="w-9/12">
            <div className="py-5">
              <h1 className="text-lg font-bold">{obj?.name}</h1>
              <h3>{obj?.defaultPrice / 100 || obj?.price / 100}₹</h3>
            </div>
            <p>{obj?.description}</p>
          </div>
          <div className="relative w-3/12 p-4">
            <div className="absolute left-16 top-6 border-2 border-black bg-black rounded-md">
              <button className="text-white font-normal">Add +</button>
            </div>
            <img className="w-full" src={CDN_URL + obj?.imageId} alt="image" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;
/*

return (
    
      
      
    </div>
  );
*/
