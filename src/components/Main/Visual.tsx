import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Visual = () => {
  return (
    <div>
      <Swiper
        className="w-full mt-[28px]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="w-[243px]">슬라이드 1</SwiperSlide>
        <SwiperSlide className="w-[243px]">슬라이드 2</SwiperSlide>
        <SwiperSlide className="w-[243px]">슬라이드 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Visual;
