import React, { useEffect, useState } from "react";
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

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const previousSlideIndex =
    currentSlideIndex === 0 ? bestBooks?.length - 1 : currentSlideIndex - 1;
  const nextSlideIndex =
    currentSlideIndex === bestBooks?.length - 1 ? 0 : currentSlideIndex + 1;

  // 슬라이드가 변경될 때 호출되는 함수
  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

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
      <div className="flex justify-center gap-[6px]">
        <div className="w-[82px] line-clamp-1">
          <p>{bestBooks && bestBooks[previousSlideIndex]?.title}</p>
        </div>
        <div className="swiper-button-prev flex justify-center items-center">
          <img src={Arrow} alt="Prev" style={{ transform: "rotate(180deg)" }} />
        </div>
        {/* 책 제목 */}
        <div className="w-[147px] line-clamp-1">
          <p>{bestBooks && bestBooks[currentSlideIndex]?.title}</p>
        </div>
        <div className="swiper-button-next flex justify-center items-center">
          <img src={Arrow} alt="Next" />
        </div>
        <div className="w-[82px] line-clamp-1">
          <p>{bestBooks && bestBooks[nextSlideIndex]?.title}</p>
        </div>
      </div>

      {/* 작가 / 출판사 */}
      <div className="mt-[12px] mb-[8px]">
        <p>
          {bestBooks && bestBooks[currentSlideIndex]?.author} | &nbsp;
          {bestBooks && bestBooks[currentSlideIndex]?.publisher}
        </p>
      </div>

      <Swiper
        onSlideChange={handleSlideChange}
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
        className="coverflow pt-[16px] pb-[16px]"
      >
        {bestBooks?.map((data: any, index: number) => {
          return (
            <SwiperSlide key={index} className="w-[160px] h-[220px]">
              <img src={data.image} alt={data.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p className="line-clamp-3">
        {bestBooks && bestBooks[currentSlideIndex]?.description}
      </p>
    </div>
  );
};

export default BestBook;
