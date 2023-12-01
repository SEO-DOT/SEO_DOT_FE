import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("HOME");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="nav-wrapper mt-[20px]">
      <Swiper
        spaceBetween={24} // 사이 간격
        slidesPerView={4} // 한번에 보여줄 갯수
      >
        {categories.map((category) => (
          <SwiperSlide
            className="nav-slide"
            key={category.title}
            style={{ width: "auto" }}
            onClick={() => handleCategoryClick(category)}
          >
            {category.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nav;
