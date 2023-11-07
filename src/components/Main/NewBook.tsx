import React, { MouseEventHandler, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/images/main/arrow_right.svg";

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

const NewBook = () => {
  // 카테고리 선택
  const [activeCategory, setActiveCategory] = useState("HOME");

  // 핸들러
  const handleCategoryClick = (category: any) => {
    if (activeCategory === category) {
      // 활성화 된 카테고리를 다시 클릭시 변화 X
      console.log(category);
      return;
    }
    // 다른 카테고리를 클릭시, 활성화 상태 변경
    setActiveCategory(category);
    console.log(category);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mt-[30px] mb-[20px]">
        <div className="text-2xl font-semibold">신간도서</div>
        <div className="flex bottom-0 items-end">
          <div className="flex">
            <p className="text-xs">전체보기</p>
            <img src={Arrow} className="w-[12px]" alt="화살표" />
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="overflow-hidden whitespace-nowrap">
        <Swiper
          className=""
          spaceBetween={10} // 사이 간격
          slidesPerView={3.5} // 한번에 보여줄 갯수
        >
          {categories.map((category) => (
            <SwiperSlide
              className={`w-important px-[10px] py-[7px] border-[2px] rounded-[26px] ${
                category.title === activeCategory ? "active-categori" : ""
              }`}
              key={category.title}
              onClick={() => handleCategoryClick(category.title)}
            >
              {category.title}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* List */}
      <div className="flex justify-between gap-x-2.5 pt-[30px] pb-[30px] border-b-[1px]">
        {/* 이미지 */}
        <div className="w-[60px] h-[84px]">이미지</div>
        {/* 순위 */}
        <div className="w-[34px]">1</div>
        {/* 책 내용 */}
        <div className="flex flex-col w-[213px]">
          <h1>여름을 한 입 베어 물었더니</h1>
          <div className="mt-[10px] mb-[10px]">작가 | 출판사</div>
          <div className="flex justify-end gap-[4px]">
            <div>10%</div>
            <div>39,000원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
