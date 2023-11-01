import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Visual = ({ slides }: { slides: any[] }) => {
  return (
    <div>
      <Swiper
        className="mt-[28px] h-[320px]"
        modules={[Pagination]}
        slidesPerView={1.3268} // 한 번에 보여줄 슬라이드 수
        spaceBetween={14}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="h-[243px]" key={slide.image}>
            <img
              className="object-cover h-full rounded-bl-[30px]"
              src={slide.image}
              alt={slide}
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Visual;
