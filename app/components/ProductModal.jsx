"use client";
import { useContext } from "react";
import CancelIcon from "./icons/CancelIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import { Context as CartContext } from "../context/CartContext";
import TrashIcon from "./icons/TrashIcon";

const ProductModal = ({ renderedData, productId }) => {
  console.log(renderedData);
  const {
    addToCart,
    getCartTotal,
    deleteItemFromCart,
    increaseItem,
    state: { total, items },
  } = useContext(CartContext);

  return (
    <>
      <button
        className="hidden btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      />
      <dialog id="my_modal_3" className="modal ">
        <button className="inline disabled" />
        {renderedData.map((item) => {
          const { name, description, imageUrl, price, id } = item;
          const priceInInt = parseInt(price);

          const currentItemQuantity = items
            .filter((item) => item.id === id)
            .map((i) => i.quantity);

          return (
            <div
              key={id}
              className="p-0 bg-gray-100 modal-box dark:bg-gray-900"
            >
              <div className="sticky top-0 px-3 py-2 overflow-hidden bg-white border-b-2 dark:bg-gray-900 dark:border-b-gray-700">
                <div className="flex items-start justify-between">
                  <h1 className="text-3xl font-semibold text-red-500">
                    {name}
                  </h1>
                  <CancelIcon />
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="mt-2 text-2xl font-bold">Rs. {priceInInt}</div>
                <p className="mt-2 text-md">{description}</p>
                <img className="mt-2 rounded-lg" src={imageUrl} alt="Shoes" />
              </div>
              {/* <ul className="px-3 py-2 mt-8">
                <li className="flex pb-3 mt-3 border-b-2 justify-evenly">
                  <input
                    type="radio"
                    name="radio-8"
                    className="inline-block mr-2 radio radio-error"
                  />
                  <div className="flex items-center justify-between w-screen">
                    <span>Cheese</span>
                    <span>Rs. 0</span>
                  </div>
                </li>
                <li className="flex pb-3 mt-3 border-b-2 justify-evenly">
                  <input
                    type="radio"
                    name="radio-8"
                    className="inline-block mr-2 radio radio-error"
                  />
                  <div className="flex items-center justify-between w-screen">
                    <span>Extra Cheese</span>
                    <span>Rs. 200</span>
                  </div>
                </li>
              </ul> */}
              <div className="px-3 py-2 mb-4">
                <h1 className="mt-4 text-lg font-bold">Order Remarks</h1>
                <textarea
                  className="w-full mt-1 align-middle textarea textarea-bordered"
                  placeholder="Enter remarks about your order"
                />
              </div>
              {currentItemQuantity >= 1 ? (
                <div className="sticky bottom-0 flex items-center px-3 py-2 mt-8 overflow-hidden bg-white border-t-2 justify-evenly dark:bg-gray-900 dark:border-t-gray-700">
                  <div className="flex items-center justify-between">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        deleteItemFromCart(item);
                        getCartTotal();
                      }}
                    >
                      {currentItemQuantity > 1 ? (
                        <span>
                          <MinusIcon />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            document.getElementById("my_modal_3").close()
                          }
                        >
                          <TrashIcon />
                        </span>
                      )}
                    </div>
                    <input
                      value={currentItemQuantity}
                      type="tel"
                      className="w-8 p-0 text-xl font-semibold text-center input disabled:bg-white disabled:text-red-500 disabled:border-none dark:bg-gray-900 dark:disabled:bg-gray-900"
                      disabled
                    />
                    <div
                      className="mr-4 cursor-pointer"
                      onClick={() => {
                        increaseItem(item);
                        getCartTotal();
                      }}
                    >
                      <PlusIcon />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById("my_modal_3").close();
                    }}
                    className="w-full px-3 py-2 text-white bg-red-500 rounded-lg text-md text-nowrap dark:text-gray-900"
                  >
                    Add to Cart Rs.{" "}
                    {renderedData.reduce((total, i) => {
                      return total + i.price * currentItemQuantity;
                    }, 0) || price}
                  </button>
                </div>
              ) : (
                <div className="sticky bottom-0 px-3 py-3 overflow-hidden bg-white border-t-2 dark:bg-gray-900 dark:border-t-gray-700">
                  <button
                    onClick={() => {
                      addToCart(renderedData);
                      getCartTotal();
                    }}
                    className="w-full px-3 py-2 text-white bg-red-500 rounded-lg text-md text-nowrap dark:text-gray-900"
                  >
                    Add to Cart Rs.{" "}
                    {renderedData.reduce((total, i) => {
                      return total + i.price * currentItemQuantity;
                    }, 0) || price}
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ProductModal;
