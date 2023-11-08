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
        slidesPerView={2.0925} // 한 번에 보여줄 슬라이드 수
        spaceBetween={12}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="flex flex-col" key={slide.image}>
            <div className="flex flex-col h-[150px] rounded-[10px] overflow-hidden pb-[10px] pl-[13px] pr-[12px] box-border bg-[#D1D1D1]">
              <div className="flex justify-end mt-[7px]">
                <img src={Arrow_left} alt="" />
              </div>
              <div className="mb-[20px]">
                <p>여유로운 휴일을 위한 리프레싱</p>
              </div>
              <div className="flex">
                <div>1</div>
                <div>2</div>
              </div>
            </div>
            <div className="flex mt-[8px]">
              <div>#장르 1</div>
              <div>#장르 2</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bookmark;
