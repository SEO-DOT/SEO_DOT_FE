import React from "react";
import ChevronBottomIMG from "../../assets/images/listPage/Chevron-Bottom.svg";

const Select = () => {
  return (
    <div className="flex items-center justify-between my-[12px] h-[32px] border-[1px] rounded-[4px] px-[12px]">
      <div className="text-[12px]">종합</div>
      <div className="flex">
        <img src={ChevronBottomIMG} alt="토글 이미지" />
      </div>
    </div>
  );
};

export default Select;
