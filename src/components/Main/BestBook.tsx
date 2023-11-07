import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Arrow from "../../assets/images/main/arrow_right.svg";

const photos = [
  "https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const BestBook = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mt-[30px] mb-[20px]">
        <div className="text-2xl font-semibold">Best Book</div>
        <div className="flex bottom-0 items-end">
          <div className="flex">
            <p className="text-xs">전체보기</p>
            <img src={Arrow} className="w-[12px]" alt="화살표" />
          </div>
        </div>
      </div>

      {/* 슬라이드 */}
      <div className="flex justify-center">
        <div className="swiper-button-prev flex justify-center items-center">
          <img src={Arrow} alt="Prev" style={{ transform: "rotate(180deg)" }} />
        </div>
        <p>제목</p>
        <div className="swiper-button-next flex justify-center items-center">
          <img src={Arrow} alt="Next" />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        effect="coverflow"
        loop={true}
        slidesPerView={3}
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 70,
          depth: 100,
        }}
        navigation={{
          // navigation prop 설정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="coverflow"
      >
        {photos.map((img, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img className="rounded-[20px]" src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BestBook;
