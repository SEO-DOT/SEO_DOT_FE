import React from "react";

interface MyPageNavProps {
  activePage: string;
  onClickPageHandler: (page: string) => void;
}

export const MyPageNav: React.FC<MyPageNavProps> = ({
  activePage,
  onClickPageHandler,
}) => {
  return (
    <div className="w-full h-[48px]">
      <button
        className={`cursor-pointer w-6/12 h-full bg-[#fff]   hover:text-[#000] hover: border-b-2 border-[#000] ${
          activePage === "주문배송"
            ? " border-b-2 border-[#000] text-[#000]"
            : "border-none text-[#767676]"
        }`}
        onClick={() => onClickPageHandler("주문배송")}
      >
        <p className="text-[16px] font-bold hover:text-[#000]">주문/배송</p>
      </button>
      <button
        className={`cursor-pointer w-6/12 h-full bg-[#fff] hover:text-[#000] hover: border-b-2 border-[#000] ${
          activePage === "나의리뷰"
            ? "border-b-2 border-[#000] text-[#000]"
            : "border-none text-[#767676]"
        }`}
        onClick={() => onClickPageHandler("나의리뷰")}
      >
        <p className="text-[16px] font-bold hover:text-[#000]">리뷰목록</p>
      </button>
    </div>
  );
};

export default MyPageNav;
