import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCart() {
    const cartSelector = useSelector((state) => state.cart.items);
    const cartCount = cartSelector.length;
  return (
    <Link to="/cart" className="flex items-center">
      <button className="relative p-2 rounded-full hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
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

        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount ? cartCount : 0}
        </span>
      </button>
    </Link>
  );
}

export default AddToCart;
