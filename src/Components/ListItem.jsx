import React, { useEffect } from "react";
import Item from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Pagination } from "swiper";

const ListItem = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      className="bg-white"
      pagination={true}
      modules={[Pagination]}
    >
      {data.map((subArray, ind) => (
        <SwiperSlide key={ind}>
          <div className="grid gap-4 grid-cols-3 grid-rows-2 justify-items-center justify-center ">
            {subArray.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
};

export default ListItem;

{
  /* <Swiper
        slidesPerView={6}
        grabCursor={true}
        // className="grid gap-4 grid-cols-3"
        pagination={true}
        modules={[Pagination]}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <Item product={product} className="" />
          </SwiperSlide>
        ))}
      </Swiper> */
}
