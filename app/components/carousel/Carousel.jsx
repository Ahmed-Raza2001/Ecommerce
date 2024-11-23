import React, { useEffect, useRef, useState } from "react";
import "@/app/components/carousel/style.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    console.log("TOUCH >>>> START");
  };

  const onTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
    console.log("TOUCH >>>> MOVE");
  };

  const onTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }
    swipe.current = {};
    console.log("TOUCH >>>> END");
  };

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

const Slide = ({ link }) => (
  <div className="">
    <img src={link} />
  </div>
);

const CarouselImplement = () => {
  return (
    <Carousel>
      <CarouselItem>
        <Slide
          link={
            "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          }
        />
      </CarouselItem>
      <CarouselItem>
        <Slide
          link={
            "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          }
        />
      </CarouselItem>
      <CarouselItem>
        <Slide
          link={
            "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          }
        />
      </CarouselItem>
      <CarouselItem>
        <Slide
          link={
            "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          }
        />
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselImplement;
