"use client";
import ScrollSpy from "react-ui-scrollspy";
import ProductCard from "./ProductCard";

const OrderMenu = ({ products }) => {
  return (
    <ScrollSpy activeClass="active" scrollThrottle={100} useBoxMethod={false}>
      <section className="mx-4 mt-8" id="123" tabIndex="-1">
        <img
          className="object-cover w-screen rounded-lg h-28"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3">
          <ProductCard products={products} />
        </div>
      </section>
      <section className="mx-4 mt-8" id="1234" tabIndex="-1">
        <img
          className="object-cover w-screen rounded-lg h-28"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3">
          <ProductCard products={products}  />
        </div>
      </section>
      <section className="mx-4 mt-8" id="12345" tabIndex="-1">
        <img
          className="object-cover w-screen rounded-lg h-28 "
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3">
          <ProductCard products={products}  />
        </div>
      </section>
      <section className="mx-4 mt-8" id="123456" tabIndex="-1">
        <img
          className="object-cover w-screen rounded-lg h-28 "
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3">
          <ProductCard products={products} />
        </div>
      </section>
    </ScrollSpy>
  );
};

export default OrderMenu;
