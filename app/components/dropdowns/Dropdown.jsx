"use client";
import { cities, areas } from "@/app/data";
import Badge from "../Badge";
import CityDropdown from "./CityDropdown";
import Image from "next/image";
import logo2 from "@/public/logo2.png";
import { Context as CartContext } from "@/app/context/CartContext";
import { useContext } from "react";

const Dropdown = () => {
  const {
    state: {
      location: { orderType, city, area, deliveryCharges },
    },
    setArea,
    setCity,
    setOrderType,
  } = useContext(CartContext);
  return (
    <>
      <div className="form-control w-full ">
        <div className="label flex flex-col justify-center">
          <Image
            sizes="100"
            width={0}
            height={0}
            className="rounded-lg h-36 object-cover"
            src={logo2}
            alt="logo"
          />
          <span className="label-text text-center text-lg text-black mt-4 dark:text-white">
            Please Select Area
          </span>
          <div className="flex gap-2">
            <div role="tablist" className="tabs tabs-lifted mt-2 rounded-lg">
              <span
                onClick={() => setOrderType("Delivery")}
                role="tab"
                className={`tab ${
                  orderType === "Delivery"
                    ? "tab-active  [--tab-bg:rgb(239,68,68)] text-white dark:text-black"
                    : "text-black dark:text-white"
                }`}
              >
                DELIVERY
              </span>
              <span
                role="tab"
                className={`tab ${
                  orderType === "Pickup"
                    ? "tab-active  [--tab-bg:rgb(239,68,68)] text-white dark:text-black"
                    : "text-black dark:text-white"
                }`}
                onClick={() => setOrderType("Pickup")}
              >
                PICKUP
              </span>
              <span
                role="tab"
                className={`tab  ${
                  orderType === "Dinein"
                    ? "tab-active  [--tab-bg:rgb(239,68,68)] text-white dark:text-black"
                    : "text-black dark:text-white"
                }`}
                onClick={() => setOrderType("Dinein")}
              >
                DINEIN
              </span>
            </div>
          </div>
        </div>
        <CityDropdown
          placeHolder="Select City"
          dataref={cities}
          onChange={({ value }) => setCity(value)}
          className={
            "select select-bordered text-black mt-4 outline-none focus:outline-none"
          }
        />
        <CityDropdown
          placeHolder="Select Area"
          dataref={areas}
          onChange={({ value, deliveryCharges }) => {
            setArea({ value, deliveryCharges });
          }}
          className={
            "select select-bordered text-black mt-4 outline-none focus:outline-none"
          }
        />
      </div>
    </>
  );
};

export default Dropdown;
