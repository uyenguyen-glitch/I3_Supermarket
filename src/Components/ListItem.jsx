import React, { useEffect } from "react";
import Item from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination } from "swiper";
import "../App.css";

/**
 * Carousel được làm bằng thư viện Swiper
 */

const ListItem = ({ data, onSelect }) => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      className="bg-white px-24 py-10"
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      spaceBetween={30}
    >
      {data.map((subArray, ind) => (
        <SwiperSlide key={ind}>
          <div className="grid gap-4 grid-cols-3 grid-rows-2 justify-items-center justify-center px-24 box-border">
            {subArray.map((product) => (
              <Item key={product.id} product={product} onSelect={onSelect} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ListItem;
