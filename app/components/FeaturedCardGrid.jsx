import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCardGrid = () => {
  return (
    <>
      <h1 className="mx-4 font-bold">Popular Items</h1>
      <p className="mx-4">Most Ordered this Week</p>
      <section className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 m-4">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </section>
    </>
  );
};

export default FeaturedCardGrid;
