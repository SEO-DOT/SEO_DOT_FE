import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./styles.css";

interface SlidesType {
  url: string;
}

const Visual = ({ slides }: { slides: any[] }) => {
  return (
    <div className="mx-6">
      <Swiper
        className="mt-[28px] h-[280px]"
        modules={[Pagination]}
        slidesPerView={1.3268} // 한 번에 보여줄 슬라이드 수
        spaceBetween={14}
        pagination={{ clickable: true }}
      >
        {slides.map((slide: SlidesType, index: number) => (
          <SwiperSlide className="h-[243px]" key={index}>
            <img
              className="object-cover h-full rounded-bl-[30px]"
              src={slide.url}
              alt="사진"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Visual;
