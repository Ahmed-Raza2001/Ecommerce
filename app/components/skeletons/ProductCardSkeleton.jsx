const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full mx-4">
      <div className="skeleton h-40 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <section className="skeleton mt-8 mx-4" id="123" tabIndex="-1">
        <span className="skeleton rounded-lg h-28 w-screen object-cover" />
      </section>
    </div>
  );
};

export default ProductCardSkeleton;
