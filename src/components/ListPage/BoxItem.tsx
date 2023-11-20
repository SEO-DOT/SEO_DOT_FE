import React from "react";
import AngchorIMG from "../../assets/images/listPage/Angchor.svg";
import StarIMG from "../../assets/images/listPage/Star.svg";

const BoxItem = () => {
  return (
    <div className="flex flex-col w-[160px] my-[24px]">
      {/* 이미지 */}
      <div className="w-full h-[186px]">
        <img src="" alt="" />
      </div>
      {/* 상품 정보 */}
      <div>
        <div className="text-start">여름을 한 입 베어 물었더니</div>
        <div className="flex gap-[4px]">
          <div>작가</div>
          <div className="">
            <p className="w-[1px] h-full rounded-[1px] bg-[#979797]"></p>
          </div>
          <div>출판사</div>
        </div>
        {/* 가격 */}
        <div className="flex items-center gap-[4px]">
          <div>39,000원</div>
          <div>10%</div>
          <div className="px-[8px] py-[2px]">품절</div>
        </div>
        {/* 평점 / 좋아요 */}
        <div className="flex gap-[10px]">
          <div className="flex gap-[4px]">
            <img src={AngchorIMG} alt="평점" />
            <div>5.0</div>
          </div>
          <div className="flex gap-[4px]">
            <img src={StarIMG} alt="좋아요" />
            <div>100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
