import contactImage from "../images/contact.jpg";
const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col sm:flex-row m-10 shadow-lg shadow-black w-full sm:w-2/3 lg:w-1/2 h-auto rounded-lg border-black">
        <div className="bg-gray-200 w-full sm:w-1/3 h-48 sm:h-auto lg:h-full flex items-center justify-center">
          <img
            src={contactImage}
            alt="image"
            className="w-full h-full object-cover rounded-lg sm:rounded-none"
          />
        </div>
        <div className="flex flex-col p-4 bg-white justify-between w-full">
          <div className="flex flex-col mb-4">
            <div className="min-[600px]:flex-col flex justify-between mb-2">
              <h3 className="font-bold text-xl">Classic Utility Jacket</h3>
              <h3 className="font-bold text-gray-500">$110</h3>
            </div>
            <h4 className="text-gray-500 mb-3 text-xl">In stock</h4>
            <div className="flex justify-start mb-10">
              <ul className="flex gap-4">
                <li>XL</li>
                <li>L</li>
                <li>M</li>
                <li>W</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 mb-4">
              <button className="border-gray-300 border-2 rounded-lg p-2 bg-gray-100">
                Buy now
              </button>
              <button className="border-gray-300 border-2 rounded-lg p-2 bg-gray-100">
                Add to bag
              </button>
            </div>
            <p className="text-gray-500">
              Free shipping on all continental India orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
