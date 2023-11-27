import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Arrow from "../../assets/images/main/arrow_right.svg";
import { getBestBook } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const BestBook = () => {
  const { data: bestBooks } = useQuery({
    queryKey: ["bestBooks"],
    queryFn: getBestBook,
  });

  console.log("bestBook :", bestBooks);
  return (
    <div className="mx-6">
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        loop={true}
        slidesPerView={1.9277}
        spaceBetween={20}
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          slideShadows: true,
        }}
        navigation={{
          // navigation prop 설정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="coverflow"
      >
        {bestBooks?.map((data: any, index: number) => {
          return (
            <SwiperSlide key={index} className="">
              <img src={data.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p>책 내용?</p>
    </div>
  );
};

export default BestBook;
