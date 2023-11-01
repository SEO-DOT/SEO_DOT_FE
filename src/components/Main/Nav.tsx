import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  {
    title: "HOME",
  },
  {
    title: "국내도서",
  },
  {
    title: "해외도서",
  },
  {
    title: "일본도서",
  },
  {
    title: "서양도서",
  },
  {
    title: "유아도서",
  },
];

const Nav = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <Swiper spaceBetween={24} slidesPerView={4}>
        {categories.map((category) => (
          <SwiperSlide className="inline-block" key={category.title}>
            {category.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nav;

// 문제점
// width 를 수정할 수가 없다.
