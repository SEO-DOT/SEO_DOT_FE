import React, { useEffect } from "react";
import { ReactComponent as AnchorIcon } from "../../../assets/images/myPage/anchor.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/myPage/heart.svg";
import { ReactComponent as ChatIcon } from "../../../assets/images/myPage/chat-alt.svg";
import { instance } from "../../../api/api";
import BookImg from "../../../assets/images/myPage/Review_IMG.png";

const Review = () => {
  const getUserInfoReview = async () => {
    try {
      const response = await instance.get(
        `/api/mypage/reviews?page=1&per=20&sort=new`
      );
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error("mypage 조회 오류", error);
    }
  };

  useEffect(() => {
    getUserInfoReview();
  }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회

  return (
    <section className="px-[24px] pt-[20px] w-full h-screen">
      <div
        className="flex p-[16px] rounded-[20px] w-full h-[200px] bg-[#F2F3F4]
      shadow-[8px_8px_8px_0_rgba(0,0,0,0.08)]
      "
      >
        <img
          className="flex-initial mr-[15px] w-[120px] h-full"
          src={BookImg} // 이미지 파일 경로를 지정
          alt="reviewBook"
        />
        {/* <div className="flex-initial mr-[15px] w-[120px] h-full bg-[#850505]"></div> */}
        <div className=" flex-cul flex-1 font-medium text-justify h-full overflow-hidden">
          <p className="items-center h-[19px] whitespace-nowrap mb-[8px] text-[16px]  text-black">
            책제목이 들어갑니다eeeegeee
          </p>
          <div
            className="mb-[8px] h-[14px] flex text-[12px] text-[#767676] items-center"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <p>작가입니다...</p>
            <p>출판사가 들어갑...</p>
          </div>
          <p className="whitespace-nowrap h-[14px] mb-[8px] text-[12px] text-[#767676]">
            닉네임(아이디)
          </p>
          <p className="text-[12px] text-[#000] h-[64px] overflow-hidden">
            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
          </p>
          <div className="mt-[8px] flex items-center justify-between first-letter:mt-[8px] w-[160px] h-[16px]">
            <div className="flex items-center">
              <AnchorIcon className="w-[16px] h-[16px]" />
              <p className="text-[12px] text-[#767676]">5.0</p>
            </div>
            <div className="flex items-center">
              <HeartIcon className="w-[12px] h-[10px]" />
              <p className="text-[12px] text-[#767676]">100</p>
            </div>
            <div className="flex items-center">
              <ChatIcon className="w-[16px] h-[16px]" />
              <p className="text-[12px] text-[#767676]">100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
