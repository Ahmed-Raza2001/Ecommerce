"use client";
import { useState } from "react";
import ProductModal from "./ProductModal";
import AddIcon from "./icons/AddIcon";

const ProductCard = ({ products }) => {
  const [productId, setProductId] = useState(1);
  const renderedData = products.filter((i) => i.id === productId) || [];

  return (
    <>
      {products.map((item) => {
        const { description, imageUrl, name, id, price } = item;
        return (
          <div
            key={id}
            onClick={() => {
              setProductId(id);
              document.getElementById("my_modal_3").showModal();
            }}
            className="w-full h-full shadow-xl card glass bg-base-100 hover:bg-red-100"
          >
            <figure className="object-scale-down h-48">
              <img src={imageUrl} alt="Food Image" />
            </figure>
            <div className="p-2 card-body">
              <h2 className="text-sm font-bold dark:text-gray-200">{name}</h2>
              <p className="text-xs dark:text-gray-200">{description}</p>
              <div className="items-center justify-between card-actions">
                <div className="text-xl font-bold dark:text-gray-200">
                  Rs. {price}
                </div>
                <AddIcon />
              </div>
            </div>
          </div>
        );
      }) || []}
      <ProductModal productId={productId} renderedData={renderedData} />
    </>
  );
};

export default ProductCard;
