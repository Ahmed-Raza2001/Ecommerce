"use client";
import { useContext } from "react";
import CancelIcon from "../icons/CancelIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import Link from "next/link";
import { Context as CartContext } from "@/app/context/CartContext";
import ClearCartModal from "./ClearCartModal";

const ShoppingCart = () => {
  const {
    state: {
      items,
      total,
      location: { deliveryCharges },
    },
    deleteItemFromCart,
    getCartTotal,
    increaseItem,
  } = useContext(CartContext);
  return (
    <div className="z-50 drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-screen min-h-full bg-base-200 text-base-content lg:max-w-[400px]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-black dark:text-gray-200">
              Your Cart
            </h1>
            <div className="flex items-center justify-between">
              <span
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="px-2 py-3 text-gray-900 bg-gray-300 cursor-pointer badge"
              >
                Clear Cart
              </span>
              <label
                htmlFor="my-drawer-4"
                className="cursor-pointer drawer-button"
              >
                <CancelIcon />
              </label>
            </div>
          </div>
          {/* Sidebar content here */}
          {items.map((item, index) => {
            const { name, price, imageUrl, id, desciption, options, quantity } =
              item;
            return (
              <div
                key={index}
                className="flex justify-between mt-6 border-b-2 border-gray-200"
              >
                <img
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  className="object-cover w-20 h-20 mb-4"
                />
                <div className="p-3 text-lg font-medium text-black dark:text-gray-200">
                  {name}
                </div>
                <div>
                  <div className="flex flex-col items-end justify-between text-right">
                    <div className="text-lg text-black dark:text-gray-200">
                      Rs. {price}
                    </div>
                    <div className="flex justify-center">
                      <span
                        onClick={() => {
                          deleteItemFromCart(item);
                          getCartTotal();
                        }}
                        className="cursor-pointer"
                      >
                        <MinusIcon />
                      </span>
                      <input
                        type="tel"
                        readOnly
                        className="w-4 mx-2 text-xl font-bold text-right bg-transparent dark:text-gray-200"
                        value={quantity}
                        disabled
                      />
                      <span
                        onClick={() => {
                          increaseItem(item);
                          getCartTotal();
                        }}
                        className="cursor-pointer"
                      >
                        <PlusIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Total
              </span>
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Rs. {total}
              </span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Delivery Charges
              </span>
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Rs. {items.length > 0 ? deliveryCharges : 0}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Grand Total
              </span>
              <span className="text-lg font-semibold text-black dark:text-gray-200">
                Rs. {items.length > 0 ? total + deliveryCharges : 0}
              </span>
            </div>
            <div className="relative flex items-center justify-center top-6">
              {items.length > 0 && (
                <Link
                  className="px-24 m-10 text-white bg-red-500 btn dark:text-gray-900"
                  href="/checkout"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <ClearCartModal />
    </div>
  );
};

export default ShoppingCart;
