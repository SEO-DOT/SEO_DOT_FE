import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/images/common/bottomNav/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/common/bottomNav/search.svg";
import { ReactComponent as StarIcon } from "../../assets/images/common/bottomNav/star.svg";
import { ReactComponent as HumanIcon } from "../../assets/images/common/bottomNav/human.svg";

const BottomNav = () => {
  const navigate = useNavigate();
  const svgStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    stroke: "#fff",
  };

  return (
    <div className="left-[-20px] bottom-0 border-solid border-[1px] rounded-t-[20px] px-[24px] pb-[24px] pt-[12px] w-screen h-[84px] bg-[#fff] shadow-[0_-8px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="flex w-full h-[48px] justify-between items-center">
        <HomeIcon className="w-[30px] h-[30px]" />
        <SearchIcon className="w-[30px] h-[30px]" />
        <StarIcon style={svgStyle} />
        <HumanIcon style={svgStyle} />
      </div>
    </div>
  );
};

export default BottomNav;
