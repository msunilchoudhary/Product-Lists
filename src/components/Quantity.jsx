
import { FaMinus, FaPlus } from "react-icons/fa6";

function Quantity({cartItem, setCartItems}) {

  const increment = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity>1 ? item.quantity - 1 : item.quantity} : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <button className="w-8 h-8 text-gray-500 flex justify-center items-center border rounded-full bg-gray-200 border-none hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer" onClick={() => decrement(cartItem.id)}>
        <FaMinus />
      </button>
      <span>{cartItem.quantity}</span>
      <button
        className="w-8 h-8 text-gray-500 flex justify-center items-center border rounded-full bg-gray-200 border-none hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer"
        onClick={() => increment(cartItem.id)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default Quantity;
