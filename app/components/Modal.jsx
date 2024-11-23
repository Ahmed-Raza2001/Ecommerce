"use client";
import React, { useContext, useEffect } from "react";
import CityDropdown from "./dropdowns/Dropdown";
import { Context as CartContext } from "../context/CartContext";

const Modal = () => {
  const {
    state: {
      location: { orderType, city, area, deliveryCharges },
    },
  } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my_modal_2").showModal();
    }, 2000);
  }, []);

  return (
    <>
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      />
      <dialog id="my_modal_2" className="modal height-screen">
        <div className="modal-box flex flex-col justify-center">
          <CityDropdown />
          <button
            onClick={() => {
              if (city || area === !null) {
                document.getElementById("my_modal_2").close();
              } else return;
            }}
            className="bg-red-500 mt-12 text-white rounded-lg text-md py-2 px-2 dark:text-gray-900"
          >
            Select
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
