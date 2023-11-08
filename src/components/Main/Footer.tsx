import React, { useState } from "react";
import Arrow_Under from "../../assets/images/main/arrow_under.svg";
import Arrow_Right from "../../assets/images/main/arrow_right.svg";

const Footer = () => {
  // 사업자 정보 Toggle
  const [isInfoVisible, setInfoVisible] = useState(false);

  // 클릭 이벤트
  const toggleInfoVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className="mt-[20px] mb-[20px]">
      {/* 로고 */}
      <div className="flex text-base font-bold mb-[20px]">(주) SEO.</div>
      {/* 펼쳐보기 */}
      <div
        className="flex items-center mb-[20px]"
        onClick={toggleInfoVisibility}
      >
        <div className="text-[10px]">사업자 정보 펼쳐보기</div>
        <div className="flex w-[12px] h-[12px] justify-center items-center">
          <img src={Arrow_Under} alt="아래" />
        </div>
      </div>
      {/* 추가정보 */}
      {isInfoVisible && (
        <div className="flex flex-col mb-[20px]">
          <div className="flex justify-between">
            <div className="text-[10px]">대표이사: 00</div>
            <div className="text-[10px]">사업자등록번호: 00</div>
            <div className="text-[10px]">호스팅 제공자: (주)SEO.</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-[10px]">주소: 000 - 000 - 000</div>
            <div className="text-[10px]">
              개인정보보호 관련 문의: 000 - 000 - 000
            </div>
            <div className="text-[10px]">마케팅 제휴 문의: 000 - 000 - 000</div>
          </div>
        </div>
      )}
      {/* 이용약관 및 Copyright */}
      <div className="flex gap-[8px] mb-[28px]">
        {/* 이용약관 */}
        <div className="flex items-center ">
          <div className="text-[10px]">이용약관</div>
          <div className="flex w-[12px] h-[12px] justify-center items-center">
            <img src={Arrow_Right} alt="아래" />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="text-[10px]">이용약관</div>
          <div className="flex w-[12px] h-[12px] justify-center items-center">
            <img src={Arrow_Right} alt="아래" />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="text-[10px]">이용약관</div>
          <div className="flex w-[12px] h-[12px] justify-center items-center">
            <img src={Arrow_Right} alt="아래" />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="text-[10px]">이용약관</div>
          <div className="flex w-[12px] h-[12px] justify-center items-center">
            <img src={Arrow_Right} alt="아래" />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-[8px] text-left">
        Copyright © 2023 SEO. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
