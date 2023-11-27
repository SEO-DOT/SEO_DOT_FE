import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

const categories = [
  {
    title: "HOME",
  },
  {
    title: "베스트",
  },
  {
    title: "신상품",
  },
  {
    title: "국내도서",
  },
  {
    title: "서양도서",
  },
  {
    title: "일본도서",
  },
];

const Nav = () => {
  const [selectedCategory, setSelectedCategory] = useState("HOME");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category.title);
  };

  return (
    <div className="nav-wrapper mt-[20px] mx-6">
      <Swiper
        spaceBetween={24} // 사이 간격
        slidesPerView={4.3} // 한번에 보여줄 갯수
      >
        {categories.map((category) => (
          <SwiperSlide
            className={`w-important nav-slide ${
              selectedCategory === category.title ? "active" : ""
            }`}
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
