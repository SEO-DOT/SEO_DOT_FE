import React, { useState } from "react";
import ChevronBottomIMG from "../../assets/images/listPage/Chevron-Bottom.svg";
import ViewScheduleIMG from "../../assets/images/listPage/View-Schedule.svg";
import ViewBoxesIMG from "../../assets/images/listPage/View-Boxes.svg";
import BoxItem from "./BoxItem";
import BoxSchedule from "./BoxSchedule";

const List = () => {
  const [viewToggle, setViewToggle] = useState(true);

  const handleViewToggle = () => {
    setViewToggle(!viewToggle);
  };

  console.log(viewToggle);
  return (
    <div>
      {/* Nav */}
      <div className="flex justify-end py-[12px] border-y-[1px]">
        {/* 정렬 */}
        <div className="flex gap-[4px]">
          <p className="text-[12px]">인기순</p>
          <div>
            <img src={ChevronBottomIMG} alt="아래 토글" />
          </div>
        </div>
        {/* 구분선 */}
        <div className="mx-[12px]">
          <p className="w-[1px] h-full bg-[#767676]"></p>
        </div>
        {/* 토글 버튼 */}
        <div onClick={handleViewToggle}>
          {viewToggle ? (
            <img src={ViewScheduleIMG} alt="이미지 스케줄 토글" />
          ) : (
            <img src={ViewBoxesIMG} alt="이미지 박스 토글" />
          )}
        </div>
      </div>

      {/* ITEM LIST */}
      <div className="flex justify-between flex-wrap">
        {/* 박스형 */}
        <BoxItem />
        <BoxItem />
        {/* 스케줄형 */}
        <BoxSchedule />
      </div>
    </div>
  );
};

export default List;
