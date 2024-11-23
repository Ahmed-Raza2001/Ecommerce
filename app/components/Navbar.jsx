"use client";
import Link from "next/link";
import Modal from "./Modal";
import PhoneIcon from "./icons/PhoneIcon";
import MapIcon from "./icons/MapIcon";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import logo2 from "@/public/logo2.png";
import { useContext } from "react";
import { Context as CartContext } from "@/app/context/CartContext";

const Navbar = () => {
  const {
    state: {
      location: { orderType, city, area, deliveryCharges },
    },
  } = useContext(CartContext);
  return (
    <header className="flex items-center justify-between p-2">
      <Link className="text-red-500 font-semibold text-md mr-2" href="">
        <Image
          className="object-cover h-11 w-28 rounded-lg"
          src={logo2}
          alt="Extreme Burger logo"
          height={0}
          width={0}
          sizes="100"
        />
      </Link>
      <nav className="flex justify-end items-center gap-1 text-gray-500 font-semibold">
        <Link
          href=""
          className="bg-red-500 text-white px-1 py-1 rounded-lg text-nowrap"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <div className="flex justify-between items-center">
            <MapIcon />
            <div className="flex flex-col justify-start item-start">
              <p className="text-[10px]">Change Location</p>
              <span className="block text-[8px]">{area}</span>
            </div>
          </div>
        </Link>
        <Link href="tel:0213-111544888">
          <PhoneIcon />
        </Link>
        <Link className="text-white" href=""></Link>
        <Modal />
      </nav>
    </header>
  );
};

export default Navbar;
