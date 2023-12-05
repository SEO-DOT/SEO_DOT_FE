import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./styles.css";
import Visual1 from "../../assets/images/main/Visual_1.png";
import Visual2 from "../../assets/images/main/Visual_2.png";
import Visual3 from "../../assets/images/main/Visual_3.png";
import Visual4 from "../../assets/images/main/Visual_4.png";

const Visual = () => {
  const slides = [Visual1, Visual2, Visual3, Visual4];
  return (
    <div className="mx-6">
      <Swiper
        className="mt-[28px] h-[300px]"
        modules={[Pagination]}
        slidesPerView={1.3268} // 한 번에 보여줄 슬라이드 수
        spaceBetween={14}
        pagination={{ clickable: true }}
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide className="h-[242px]" key={index}>
            <img
              className="object-cover h-full rounded-bl-[30px]"
              src={slide}
              alt="사진"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Visual;
