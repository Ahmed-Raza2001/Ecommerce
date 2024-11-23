const FeaturedCard = () => {
  return (
    <div className="flex items-end w-full h-full bg-transparent shadow-xl card image-full">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <span className="h-5 m-1 text-xs bg-white badge w-18">Rs 1129</span>
    </div>
  );
};

export default FeaturedCard;
