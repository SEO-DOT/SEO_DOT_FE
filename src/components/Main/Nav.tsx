import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

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
    <div className="nav-wrapper">
      <Swiper
        spaceBetween={24} // 사이 간격
        slidesPerView={4} // 한번에 보여줄 갯수
      >
        {categories.map((category) => (
          <SwiperSlide
            className="nav-slide"
            key={category.title}
            style={{ width: "auto" }}
          >
            {category.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nav;
