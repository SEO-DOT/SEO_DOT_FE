import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/images/common/bottomNav/home.svg";
import { ReactComponent as FillHomeIcon } from "../../assets/images/common/bottomNav/fillHome.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/common/bottomNav/search.svg";
import { ReactComponent as FillSearchIcon } from "../../assets/images/common/bottomNav/fillSearch.svg";
import { ReactComponent as StarIcon } from "../../assets/images/common/bottomNav/star.svg";
import { ReactComponent as FillStarIcon } from "../../assets/images/common/bottomNav/fillStar.svg";
import { ReactComponent as HumanIcon } from "../../assets/images/common/bottomNav/human.svg";
import { ReactComponent as FillHumanIcon } from "../../assets/images/common/bottomNav/fillHuman.svg";
const BottomNav = () => {
  const navigate = useNavigate();
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false);
  const [isHumanHovered, setIsHumanHovered] = useState(false);

  const onClickMainPage = () => {
    navigate("/");
  };
  const onClickSearchPage = () => {
    navigate("/search");
  };
  const onClickBookmarkPage = () => {
    navigate("/bookmark");
  };
  const onClickMyPage = () => {
    navigate("/mypage");
  };
  const svgStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    stroke: "#fff",
  };

  return (
    <div className="absolute left-0 bottom-[-1px] border-solid border-[1px] rounded-t-[20px] px-[24px] pb-[24px] pt-[12px] w-screen h-[84px] bg-[#fff] shadow-[0_-8px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="flex w-full h-[48px] justify-between items-center">
        <div
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
          onClick={onClickMainPage}
        >
          {!isHomeHovered && <HomeIcon style={svgStyle} />}
          {isHomeHovered && <FillHomeIcon style={svgStyle} />}
        </div>
        <div
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
          onClick={onClickSearchPage}
        >
          {!isSearchHovered && <SearchIcon style={svgStyle} />}
          {isSearchHovered && <FillSearchIcon style={svgStyle} />}
        </div>
        <div
          onMouseEnter={() => setIsBookmarkHovered(true)}
          onMouseLeave={() => setIsBookmarkHovered(false)}
          onClick={onClickBookmarkPage}
        >
          {!isBookmarkHovered && <StarIcon style={svgStyle} />}
          {isBookmarkHovered && <FillStarIcon style={svgStyle} />}
        </div>
        <div
          onMouseEnter={() => setIsHumanHovered(true)}
          onMouseLeave={() => setIsHumanHovered(false)}
          onClick={onClickMyPage}
        >
          {!isHumanHovered && <HumanIcon style={svgStyle} />}
          {isHumanHovered && <FillHumanIcon style={svgStyle} />}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
