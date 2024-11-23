"use client";
import { useContext, useEffect, useState } from "react";
import Carousel from "./components/carousel/Carousel";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/FeaturedCardGrid";
import OrderMenu from "./components/OrderMenu";
import OrderMenuSkeleton from "./components/skeletons/OrderMenuSkeleton";
import BottomCart from "./components/BottomCart";
import ShoppingCart from "./components/cart/ShoppingCart";
import Navbar from "./components/Navbar";
import MenuCarousel from "./components/MenuCarousel";
import { Context as ProductContext } from "@/app/context/ProductContext";

export default function Home() {
  const [isLoading, setisLoading] = useState(false);
  const [showLabelMenu, setShowLabelMenu] = useState(0);

  const {
    state: { products },
    getProducts,
  } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setShowLabelMenu(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) return <OrderMenuSkeleton />;

  return (
    <main className="mb-28">
      <Navbar />
      <Carousel />
      <MenuCarousel showLabelMenu={showLabelMenu} />
      <SearchBar />
      <CardGrid />
      <OrderMenu products={products} />
      <ShoppingCart />
      <BottomCart />
    </main>
  );
}
