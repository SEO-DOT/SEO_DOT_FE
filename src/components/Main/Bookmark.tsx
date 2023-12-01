import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/images/main/arrow_right.svg";
import Arrow_left from "../../assets/images/main/chevron-left.svg";
import "swiper/css/pagination";
import "./styles.css";

const Bookmark = ({ slides }: { slides: any[] }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mt-[30px] mb-[20px]">
        <div className="text-2xl font-semibold">OO님의 북마크리스트</div>
        <div className="flex bottom-0 items-end">
          <div className="flex">
            <p className="text-xs">전체보기</p>
            <img src={Arrow} className="w-[12px]" alt="화살표" />
          </div>
        </div>
      </div>

      {/* 슬라이드 */}
      <Swiper
        className="mt-[28px]"
        slidesPerView={2} // 한 번에 보여줄 슬라이드 수
        spaceBetween={12}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="flex flex-col" key={slide.image}>
            <div className="flex flex-col w-[160px] h-[160px] overflow-hidden pb-[10px] pl-[13px] pr-[12px] rounded-[4px] box-border bg-[#D1D1D1]">
              <img src={Arrow_left} alt="" />
            </div>
            <div className="bookmark-contents flex mt-[8px]">
              <div>텍스트가 들어갈 예정입니다. 텍스트가 들어갈 예정입니다.</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bookmark;
