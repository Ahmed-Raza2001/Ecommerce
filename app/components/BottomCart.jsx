"use client";
import { useContext } from "react";
import { Context as CartContext } from "@/app/context/CartContext";

const BottomCart = () => {
  const {
    state: { items, total },
  } = useContext(CartContext);

  return (
    <>
      {items.length > 0 && (
        <div className="btm-nav bg-red-500 rounded-lg lg:bottom-2">
          <button>
            <div className="btm-nav-label w-8 h-8 rounded-full bg-white font-normal text-lg flex justify-center items-center dark:text-gray-200 dark:bg-gray-900">
              {items.reduce((total, i) => {
                return total + i.quantity;
              }, 0) || 0}
            </div>
          </button>
          <button>
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btm-nav-label font-bold text-white cursor-pointer dark:text-gray-900"
            >
              View Cart
            </label>
            {/* <span className="btm-nav-label font-bold text-white">
              View Cart
            </span> */}
          </button>
          <button>
            <span className="btm-nav-label font-bold text-white dark:text-gray-900">
              Rs. {total}
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default BottomCart;
