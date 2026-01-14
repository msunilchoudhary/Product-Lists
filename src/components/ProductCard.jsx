import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import ProductRating from "./Rating";

function ProductCard() {
  const dispatch = useDispatch();

  const cartSelector = useSelector((state) => state.cart.items);
  const cartCount = cartSelector.length;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);

  console.log(productSelector);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-4 py-8">
      {productSelector.map((item) => (
        <div
          key={item.id}
          className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={item?.images[0]}
            alt={item?.title}
            className="h-40 object-cover mx-auto"
          />

          <div className="p-4">
            <p className="text-sm text-gray-500 mb-1 capitalize flex justify-between">
              <span>{item?.brand}</span>
            </p>
            <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap text-ellipsis overflow-hidden">
              {item?.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1 whitespace-nowrap text-ellipsis overflow-hidden">
              {item?.description}
            </p>
            {/* <p className="text-sm text-green-500 mt-2 whitespace-nowrap text-ellipsis overflow-hidden">
        {item?.availabilityStatus}
      </p> */}
            <p className="text-sm text-gray-500 mt-3"></p>
            <p className="text-sm text-gray-500 mt-3">
              <span className="flex gap-1">
                <ProductRating value={item?.rating} /> {item?.rating}
              </span>
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-gray-900">
                ${item.price}
              </span>
            </div>
            <div className="flex mt-3">
              {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button
                  className="flex w-full justify-center items-center gap-2 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" onClick={()=> dispatch(removeItem(item))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9"
                    />
                  </svg>
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="flex w-full justify-center items-center gap-2 bg-amber-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
                  onClick={() => dispatch(addItem(item))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9"
                    />
                  </svg>
                  Add to Cart
                </button>
              )}
            </div>
            {/* <button onClick={() => dispatch(removeItem(1))} className='btn bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 text-white transition-all duration-300'>Remove from cart</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
