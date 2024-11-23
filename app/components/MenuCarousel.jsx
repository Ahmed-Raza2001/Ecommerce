"use client";
import React from "react";
import burger from "@/public/menuicons/burger.png";
import chips from "@/public/menuicons/chips.png";
import cornDog from "@/public/menuicons/corn-dog.png";
import pizza from "@/public/menuicons/pizza.png";
import pasta from "@/public/menuicons/pasta.png";
import friedChicken from "@/public/menuicons/fried-chicken.png";
import beverages from "@/public/menuicons/soft-drink.png";
import shawarma from "@/public/menuicons/shawarma.png";
import Link from "next/link";

const MenuCarousel = ({ showLabelMenu }) => {
  const onPress = (href) => {
    const target = window.document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const labelMenus = [
    { label: "Starters", href: "123", image: cornDog },
    { label: "Pizza", href: "1234", image: pizza },
    { label: "Chicken Burgers", href: "12345", image: burger },
    { label: "Beef Burgers", href: "123456", image: burger },
    { label: "Pasta", href: "764", image: pasta },
    { label: "Beverages", href: "845", image: beverages },
    { label: "Crispy Chicken", href: "er", image: friedChicken },
    { label: "Shawarma", href: "sd", image: shawarma },
  ];
  return (
    <div className="sticky top-0 overflow-scroll overflow-y-hidden whitespace-nowrap z-10 my-4 border bg-zinc-100 p-2 rounded-md dark:bg-gray-900 dark:border-gray-600">
      {/* <button
        className="sticky left-0 z-50 bg-red-500 rounded-full "
        onClick={() => {
          const collection = document.getElementById("321");
          collection.scrollLeft -= 150;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
      <ul className="flex ">
        {labelMenus.map(({ href, image, label }) => {
          return (
            <li key={label}>
              <a
                // onClick={(href) => onPress(href)}
                // scroll={false}
                data-to-scrollspy-id={href}
                href={`#${href}`}

                // className={
                //   path === href
                //     ? "inline-flex align-top text-lg"
                //     : "inline-flex align-top text-sm"
                // }
                // onClick={onPress}
              >
                {/* {showLabelMenu <= 600 ? (
                <div className="flex justify-start flex-col items-start mx-4">
                <Image
                src={image}
                height={30}
                width={50}
                alt="Burger"
                className="w-10 h-10"
                />
                <span className="font-bold text-xs">{label}</span>
                </div>
              ) : ( */}
                <div
                  className="flex justify-start flex-col items-start mx-4"
                  tabIndex="-1"
                >
                  {label}
                  {/* <span className=""></span> */}
                </div>
                {/* )} */}
              </a>
            </li>
          );
        })}
      </ul>
      {/* <button
      className="hidden sticky right-0 z-50 h-28 bg-red-500 rounded-full md:inline "
      onClick={() => {
        const collection = document.getElementById("321");
        collection.scrollLeft += 150;
        }}
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10h-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default MenuCarousel;
