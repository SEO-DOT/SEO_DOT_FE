import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { BsCart } from "react-icons/bs";
import { ReactComponent as GearIcon } from "../assets/images/myPage/gear.svg";
import { ReactComponent as PencilIcon } from "../assets/images/myPage/pencil.svg";
import MyPageNav from "../components/mypage/MyPageNav";
import Order from "../components/mypage/order/Order";
import Review from "../components/mypage/review/Review";

interface MyPageBoxProps {
  children: React.ReactNode; // 예: 컴포넌트의 자식 엘리먼트
  activePage: string;
}

const MyPage = () => {
  const queryClient = useQueryClient();
  const [activePage, setActivePage] = useState<string>("주문배송");

  // 새로고침해도 현재 페이지 유지
  // useEffect(() => {
  //   const storedActivePage = localStorage.getItem("activePage");
  //   if (storedActivePage) {
  //     setActivePage(storedActivePage);
  //   }
  // }, []);

  const onClickPageHandler = (page: string) => {
    queryClient.setQueriesData("activePage", page);
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };

  return (
    <>
      <header className="px-[24px] py-[20px] h-[79px flex justify-between items-center">
        <p className="text-[24px] font-semibold">프로필</p>
        <BsCart className="fill-[#797979] w-[24px] h-[24px]"></BsCart>
      </header>
      <section className="px-[24px] py-[20px] flex">
        <div className="flex h-[80px]">
          <div className="relative  w-[60px] h-[60px] ">
            <div className="absolute top-0 rounded-full w-[56px] h-[56px] bg-[#E1E6EF]"></div>
            <div className="absolute top-[35px] left-[35px] shadow-[0_4px_4px_-0px_rgba(0,0,0,25)] rounded-full w-[24px] h-[24px] bg-[#fff] flex justify-center items-center">
              <PencilIcon />
            </div>
          </div>
          <div className="pl-[8px]">
            <p className="flex text-[20px] text-[#000] font-semibold">닉네임</p>
          </div>
          <div className=" w-[172px] h-6 bg-[#fff] flex-cul">
            <div className="flex justify-end pb-[26px]">
              <GearIcon />
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
        </div>
      </section>
      <MyPageBox activePage={activePage}>
        <MyPageNav
          activePage={activePage}
          onClickPageHandler={onClickPageHandler}
        />
        {activePage === "주문배송" ? <Order /> : <Review />}
      </MyPageBox>
    </>
  );
};

export default MyPage;

export const MyPageBox: React.FC<MyPageBoxProps> = ({
  children,
  activePage,
}) => {
  return <div className="flex-cul">{children}</div>;
};
