import React from "react";
import SearchIMG from "../../assets/images/listPage/Search.svg";
import ChevronRightIMG from "../../assets/images/listPage/Chevron-Right.svg";

const Search = () => {
  return (
    <div className="flex items-center h-[69px]">
      {/* 화살표 */}
      <div>
        <img
          className="w-[28px] h-[28px]"
          src={ChevronRightIMG}
          alt="오른쪽 화살표"
        />
      </div>

      {/* 검색창 */}
      <form className="relative flex items-center w-full">
        <input
          className="w-full h-[44px] py-[10px] pr-[10px] pl-[12px]"
          type="text"
          placeholder="여름"
        />
        <img className="absolute right-[10px]" src={SearchIMG} alt="검색" />
      </form>
    </div>
  );
};

export default Search;
