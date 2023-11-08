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
        className={`w-6/12 h-full hover:bg-[#5EBAD9] hover:border-none ${
          activePage === "주문배송"
            ? "bg-[#5EBAD9] border-none text-white"
            : "bg-[#fff] border-solid border-[#767676] border-[1px] text-[#767676]"
        }`}
        onClick={() => onClickPageHandler("주문배송")}
      >
        <p className="text-[16px] font-bold hover:text-[#fff]">주문/배송</p>
      </button>
      <button
        className={`w-6/12 h-full hover:bg-[#5EBAD9] hover:border-none ${
          activePage === "나의리뷰"
            ? "bg-[#5EBAD9] border-none text-white"
            : "bg-[#fff] border-solid border-[#767676] border-[1px] text-[#767676]"
        }`}
        onClick={() => onClickPageHandler("나의리뷰")}
      >
        <p className="text-[16px] font-bold hover:text-[#fff]">리뷰목록</p>
      </button>
    </div>
  );
};

export default MyPageNav;
