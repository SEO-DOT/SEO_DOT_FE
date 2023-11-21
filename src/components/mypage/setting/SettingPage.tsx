import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { ReactComponent as ArrowLeft } from "../../../assets/images/myPage/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/myPage/arrow-right.svg";
const Setting = () => {
  const navigate = useNavigate();
  const onClickMyInfoPage = () => {
    navigate("/setting/myinfo");
  };

  const onClickMyPage = () => {
    navigate("/mypage");
  };

  const onClickSettingHandler = (text: string) => {
    switch (text) {
      case "내 정보 관리":
        return onClickMyInfoPage;
    }
  };
  return (
    <div className="bg-[#f66464]">
      <header className="px-[24px] py-[25px] h-[79px] flex justify-between items-center">
        <ArrowLeft
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={onClickMyPage}
        />
        <p className="text-[20px] font-medium">설정</p>
        <BsCart className="fill-[#797979] w-[24px] h-[24px]"></BsCart>
      </header>
      <section>
        <div className="px-[24px] py-[8px] bg-[#e8e8e8] h-[30px] text-[12px] font-semibold text-left">
          관리
        </div>
        <div className="flex-cul bg-[#fff]">
          {["내 정보 관리", "19세 미만 설정관리", "적립금 관리"].map(
            (text, index) => (
              <div
                className={`flex justify-between px-[24px] py-[12px] w-full h-[44px] bg-[#fff] border-b-[1px] border-b-[#e8e8e8]flex items-center justify-center
                  text
                )}`}
                onClick={onClickSettingHandler(text)}
                key={index}
              >
                <p className="text-[16px] font-medium text-left">{text}</p>
                <ArrowRight className="w-[20px] h-[20px] cursor-pointer" />
              </div>
            )
          )}
        </div>
      </section>
      <section>
        <div className="px-[24px] py-[8px] bg-[#e8e8e8] h-[30px] text-[12px] font-semibold text-left">
          안내
        </div>
        <div className="flex-cul bg-[#fff]">
          {[
            "공지사항",
            "약관 및 정책/이용 동의",
            "고객센터",
            "버전정보 0.1",
          ].map((text, index) => (
            <div
              className={`flex justify-between px-[24px] py-[12px] w-full h-[44px] bg-[#fff] border-b-[1px] border-b-[#e8e8e8]flex items-center justify-center
                  text
                )}`}
              key={index}
            >
              <p className="text-[16px] font-medium text-left">{text}</p>
              <ArrowRight className="w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Setting;
