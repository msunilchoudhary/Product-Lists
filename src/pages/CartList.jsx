import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "../components/Quantity";
import { removeItem } from "../redux/slice";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(
    cartSelector.map((item) => {
      return { ...item, quantity: 1 };
    })
  );

  const dispatch = useDispatch()

  useEffect(()=>{
    setCartItems(cartSelector.map((item) => {
      return { ...item, quantity: 1 };
    }))
  },[cartSelector])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <p>{cartItems.length} Items</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          {cartItems.length>0
            ? cartItems.map((cartItem) => (
              
                <div
                  key={cartItem.id}
                  className="flex items-center justify-between gap-4 border-b border-gray-300 pb-4 mb-4"
                >
                  <img
                    src={cartItem.thumbnail}
                    alt="Product"
                    className="w-13 rounded-lg object-cover"
                  />

                  <div className="w-[40%]">
                    <h3 className="font-semibold text-gray-800">
                      {cartItem.title}
                    </h3>
                    <p className="text-sm text-gray-400">{cartItem.brand}</p>
                  </div>
                  <div className="w-[16%] mt-2 px-2">
                    <Quantity cartItem={cartItem} setCartItems={setCartItems} />
                  </div>

                  <div className="text-sm w-[10%] text-right text-gray-500">
                    ${(cartItem.quantity?cartItem.price*cartItem.quantity:cartItem.price).toFixed(2)}
                  </div>
                  <button onClick={()=> dispatch(removeItem(cartItem))} className="text-red-500 hover:text-red-700 text-sm font-medium">
                    Remove
                  </button>
                </div>
              ))
            : null}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>$ {cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
          </div>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Shipping</span>
            <span>0</span>
          </div>

          <div className="border-t my-3"></div>

          <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
            <span>Total</span>
            <span>$ {(cartItems.reduce((sum, item) => item.quantity? sum + item.price * item.quantity : sum + item.price, 0)).toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
