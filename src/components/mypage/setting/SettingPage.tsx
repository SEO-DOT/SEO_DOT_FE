import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../../assets/images/myPage/cart.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/myPage/arrow-right.svg";
import { ReactComponent as LongArrowLeft } from "../../../assets/images/myPage/long-arrow-left.svg";
import BottomNav from "../../common/BottomNav";
import classNames from "classnames";

const Setting = () => {
  const initialToggleStates = [
    { text: "서비스 알림", isChecked: false },
    { text: "게시글 알림", isChecked: false },
    { text: "마케팅 혜택 및 이벤트 알림", isChecked: false },
    { text: "SMS 수신 동의", isChecked: false },
  ];
  const [updateToggleStates, setUpdataToggleStates] =
    useState(initialToggleStates);

  const handleToggleChange = (index: number) => {
    const updatedStates = [...updateToggleStates];
    updatedStates[index].isChecked = !updatedStates[index].isChecked;
    setUpdataToggleStates(updatedStates);
  };

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
    <div className="bg-[#fff]">
      <header className=" mt-[-54px]  w-full border-b-[1px] border-[#F4F4F4] px-[24px] pt-[6px] pb-[18px] h-[79px] flex justify-between items-center">
        <LongArrowLeft
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={onClickMyPage}
        />
        <p className="text-[14px] font-medium">설정</p>
        <CartIcon className="w-[20px] h-[20px]"></CartIcon>
      </header>
      <div className="grid gap-[12px] bg-[#fafafa]">
        <section className="bg-[#fff] w-full h-full">
          <div className="flex items-center px-[24px] pt-[36px] pb-[16px] h-[71px] text-[16px] font-medium text-left">
            관리
          </div>
          <div className="flex-cul">
            {["내 정보 관리", "19세 미만 설정관리", "적립금 관리"].map(
              (text, index) => (
                <div
                  className={`flex justify-between px-[24px] py-[12px] w-full h-[44px] bg-[#fff] items-center
                  text
                )}`}
                  onClick={onClickSettingHandler(text)}
                  key={index}
                >
                  <p className="text-[14px] font-medium text-left">{text}</p>
                  <ArrowRight className="w-[20px] h-[20px] cursor-pointer" />
                </div>
              )
            )}
          </div>
        </section>
        <section className="bg-[#fff]">
          <div className="flex items-center px-[24px] pt-[36px] pb-[16px]  h-[71px] text-[16px] font-medium text-left">
            알림
          </div>
          <div className="flex-cul">
            {updateToggleStates.map((item, index) => (
              <div
                className={`justify-between px-[24px] py-[12px] w-full h-[44px] flex items-center
                  text
                )}`}
                key={index}
              >
                <p className="text-[14px] font-medium text-left">{item.text}</p>
                <div>
                  <label className="flex items-center relative w-[48px] h-[24px]">
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => handleToggleChange(index)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`flex items-center absolute pr-[4px] w-[48px] h-[24px] bg-gray-300 rounded-xl transition duration-300 ${
                        item.isChecked ? "bg-[#2CBDE4]" : ""
                      }`}
                    >
                      <div
                        className={`absolute w-[20px] h-[20px] bg-white rounded-full transition duration-300 transform ${
                          item.isChecked ? "translate-x-6" : "translate-x-1"
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#fff]">
          <div className="flex items-center px-[24px] pt-[36px] pb-[16px] h-[71px] text-[16px] font-medium text-left">
            알림
          </div>
          <div className="flex-cul">
            {[
              "공지사항",
              "약관 및 정책/이용 동의",
              "고객센터",
              "버전정보 0.1",
            ].map((text, index) => (
              <div
                className={`flex justify-between px-[24px] py-[12px] w-full h-[44px] flex items-center
                  text
                )}`}
                key={index}
              >
                <p className="text-[14px] font-medium text-left">{text}</p>
                <ArrowRight className="w-[20px] h-[20px]" />
              </div>
            ))}
          </div>
        </section>
        <div className="px-[24px] pt-[16px] pb-[36px]">
          <button className="rounded-[5px] w-full py-[16px] text-[16px] font-medium text-[#707070] border-[1px] border-[#dfdfdf]">
            로그아웃
          </button>
        </div>
      </div>
      {/* <BottomNav /> */}
    </div>
  );
};

export default Setting;
