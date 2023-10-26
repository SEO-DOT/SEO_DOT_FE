import React from "react";
import { BsCart } from "react-icons/bs";

const MyPage = () => {
  return (
    <>
      <header className="px-[24px] py-[20px] h-[79px] bg-indigo-600 flex justify-between items-center">
        <p className="text-[24px] font-semibold">프로필</p>
        <BsCart className="fill-[#797979] w-[24px] h-[24px]"></BsCart>
      </header>
      <div className="px-[24px] py-[20px]">
        <div className="flex w-6/12 h-full bg-[#676767]">
          <div className="rounded-full w-[56px] h-[56px] bg-[#E1E6EF]"></div>
          <div className="pl-[8px]">
            <p className="flex text-[12px] text-[#767676] font-medium">등급</p>
            <p className="flex text-[20px] text-[#000] font-semibold">닉네임</p>
          </div>
        </div>
        <div className="w-6 h-6 text-blue-500">
          {/* <svg className="fill-[#000]">
            <use xlinkHref="../assets/images/mypage/gear.svg#gear" />
          </svg> */}
          {/* <use xlinkHref={GearIcon.default} /> */}
          {/* 테일윈드 클래스로 스타일 적용 */}
          {/* <settingIcon className="w-full h-full" /> */}
          {/* 커스텀 클래스로 스타일 적용 */}
        </div>
        <div className="rounded flex justify-between items-center px-[12px] py-[8px] bg-[#E1E6EF] w-[172px] h-[30px]">
          <div className="flex text-[12px] font-normal">
            <p>리뷰&nbsp;</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="w-[0.5px] h-[10px] bg-black"></div>
          <div className="flex text-[12px]">
            <p>적립금&nbsp;</p>
            <p className="font-semibold">100,0000P</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[48px]">
        {/* 버튼 중간 border가 겹치면서 킹받게 굵어지는데 이건 추후 색깔 바뀌면 수정할 듯  */}
        <button
          className="bg-[red] w-6/12 border-solid border-[#767676] border-[1px]
          hover:bg-[#5EBAD9] hover:border-none
          "
        >
          <p className="text-[16px] font-bold text-[#767676] hover:text-[#fff]">
            주문/배송
          </p>
        </button>
        <button
          className="bg-[blue] w-6/12 border-solid border-[#767676] border-[1px]
          hover:bg-[#5EBAD9] hover:border-none
          "
        >
          <p className="text-[16px] font-bold text-[#767676] hover:text-[#fff]">
            리뷰/목록
          </p>
        </button>
      </div>
    </>
  );
};

export default MyPage;
