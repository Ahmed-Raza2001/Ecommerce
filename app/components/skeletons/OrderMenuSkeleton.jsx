import ProductCardSkeleton from "./ProductCardSkeleton";

const OrderMenuSkeleton = () => {
  return (
    <div>
      <div className="skeleton w-screen h-96 rounded-none" />
      <div className="skeleton rounded-lg h-28 w-screen mt-2" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mr-8">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  );
};

export default OrderMenuSkeleton;
