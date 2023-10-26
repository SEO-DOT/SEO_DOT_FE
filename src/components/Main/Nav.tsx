import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Nav = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        className="w-full"
        spaceBetween={24} // margin 값
        slidesPerView={5} // 한 번에 보여줄 슬라이드 수
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>HOME</SwiperSlide>
        <SwiperSlide>베스트</SwiperSlide>
        <SwiperSlide>신상품</SwiperSlide>
        <SwiperSlide>국내도서</SwiperSlide>
        <SwiperSlide>서양도서</SwiperSlide>
        <SwiperSlide>일본도서</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Nav;

// 일단 포기
