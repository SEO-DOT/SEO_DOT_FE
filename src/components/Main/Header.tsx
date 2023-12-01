import React from "react";
import Cart from "../../assets/images/main/cart.svg";
import Logo from "../../assets/images/main/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="text-[#5EBAD9] text-[28px] font-semibold">
        <img src={Logo} alt="로고" />
      </div>
      <div className="relative flex items-center w-[32px]">
        <img className="w-[24px] h-[24px]" src={Cart} alt="카트" />
        {/* 장바구니 카운트 */}
        <div className="flex justify-center items-center w-[12px] h-[12px] absolute top-0 right-[2px] rounded-full text-white bg-black text-[10px]">
          1
        </div>
      </div>
    </div>
  );
};

export default Header;
