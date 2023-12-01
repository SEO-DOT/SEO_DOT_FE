import React from "react";
import "./style.css";
import AngchorIMG from "../../assets/images/listPage/Angchor.svg";
import StarIMG from "../../assets/images/listPage/Star.svg";

const BoxSchedule = () => {
  return (
    <div className="flex gap-[10px] pt-[24px] pb-[30px] border-b-[1px]">
      <img className="w-[100px] h-[140px]" src="" alt="" />
      <div className="flex flex-col justify-between w-[217px]">
        <p className="text-start item-title">
          여름을 한 입 베어 물었더니 여름을 한 입 베어 물었더니 여름을 한 입
          베어 물었더니
        </p>
        <div className="flex gap-[4px]">
          <p>작가</p>
          <div className="">
            <p className="w-[1px] h-full rounded-[1px] bg-[#979797]"></p>
          </div>
          <p>출판사</p>
        </div>
        {/* 가격 */}
        <div className="flex items-center gap-[4px]">
          <p>39,000원</p>
          <p>10%</p>
          <p className="px-[8px] py-[2px]">품절</p>
        </div>
        {/* 평점 / 좋아요 */}
        <div className="flex gap-[10px]">
          <div className="flex gap-[4px]">
            <img src={AngchorIMG} alt="평점" />
            <p>5.0</p>
          </div>
          <div className="flex gap-[4px]">
            <img src={StarIMG} alt="좋아요" />
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSchedule;
