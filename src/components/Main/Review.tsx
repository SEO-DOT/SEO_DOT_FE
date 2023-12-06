import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Anchor from "../../assets/images/main/anchor.svg";
import Heart from "../../assets/images/main/heart.svg";
import Comment from "../../assets/images/main/comment.svg";

const Review = () => {
  return (
    <div className="mx-6">
      {/* Header */}
      <div className="flex justify-between mt-[30px] mb-[20px] text-2xl font-semibold">
        인기리뷰
      </div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper h-[220px]"
      >
        <SwiperSlide className="flex h-[200px] rounded-[20px] bg-[#F2F3F4;] p-[16px] gap-[15px]">
          {/* 책 이미지 */}
          <div className="flex items-center">
            <img className="w-[120px] h-[160px] rounded-[10px]" src="" alt="" />
          </div>
          {/* 책 / 리뷰 내용 / 평점 */}
          <div className="flex flex-col items-start gap-[8px]">
            <div className="text-[16px]">책 제목이 들어갑니다.</div>
            <div className="flex gap-[4px] text-[12px]">
              <div>작가</div>
              <div>|</div>
              <div>출판사</div>
            </div>
            <div className="text-[12px]">닉네임(아이디)</div>
            <div className="review-contents">
              댓글의 내용이 들어갑니다.댓글의 내용이 들어갑니다.댓글의 내용이
              들어갑니다.댓글의 내용이 들어갑니다.댓글의 내용이 들어갑니다.
            </div>
            <div className="flex">
              {/* 평점 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Anchor} alt="평점" />
                </div>
                <div className="w-[28px] text-[12px] text-left">5.0</div>
              </div>
              {/* 좋아요 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Heart} alt="좋아요" />
                </div>
                <div className="w-[36px] text-[12px] text-left">100</div>
              </div>
              {/* 코멘트 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Comment} alt="좋아요" />
                </div>
                <div className="w-[36px] text-[12px] text-left">100</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex h-[200px] rounded-[20px] bg-[#F2F3F4;] p-[16px] gap-[15px]">
          {/* 책 이미지 */}
          <div className="flex items-center">
            <img className="w-[120px] h-[160px] rounded-[10px]" src="" alt="" />
          </div>
          {/* 책 / 리뷰 내용 / 평점 */}
          <div className="flex flex-col items-start gap-[8px]">
            <div className="text-[16px]">책 제목이 들어갑니다.</div>
            <div className="flex gap-[4px] text-[12px]">
              <div>작가</div>
              <div>|</div>
              <div>출판사</div>
            </div>
            <div className="text-[12px]">닉네임(아이디)</div>
            <div className="review-contents">
              댓글의 내용이 들어갑니다.댓글의 내용이 들어갑니다.댓글의 내용이
              들어갑니다.댓글의 내용이 들어갑니다.댓글의 내용이 들어갑니다.
            </div>
            <div className="flex">
              {/* 평점 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Anchor} alt="평점" />
                </div>
                <div className="w-[28px] text-[12px] text-left">5.0</div>
              </div>
              {/* 좋아요 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Heart} alt="좋아요" />
                </div>
                <div className="w-[36px] text-[12px] text-left">100</div>
              </div>
              {/* 코멘트 */}
              <div className="flex gap-[4px]">
                <div className="flex items-center">
                  <img src={Comment} alt="좋아요" />
                </div>
                <div className="w-[36px] text-[12px] text-left">100</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
