import React from "react";
import Cart from "../assets/images/main/cart.svg";

const Header = () => {
  return (
    <div className="flex justify-between mb-[20px]">
      <div className="text-[#5EBAD9] text-[28px] font-semibold">SEO.</div>
      <div className="relative flex items-center">
        <img className="w-[24px] h-[24px]" src={Cart} alt="카트" />
        <div className="flex justify-center items-center w-[12px] h-[12px] absolute top-[6px] right-[-5px] rounded-full text-white bg-black text-[10px]">
          1
        </div>
      </div>
    </div>
  );
};

export default Header;
