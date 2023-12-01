import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { ReactComponent as CartIcon } from "../assets/images/myPage/cart.svg";
import MyPageNav from "../components/mypage/MyPageNav";
import Order from "../components/mypage/order/Order";
import Review from "../components/mypage/review/Review";
import MyProfile from "../components/mypage/profile/MyProfile";
import BottomNav from "../components/common/BottomNav";

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
      <header
        className={`
        mt-[-54px] bg-white w-full px-[24px] py-[20px] h-[79px] flex justify-between items-center`}
      >
        <p className="flex-1 text-[14px] font-medium ">프로필</p>
        <CartIcon className="w-[24px] h-[24px]"></CartIcon>
      </header>
      <MyProfile />
      <MyPageBox activePage={activePage}>
        <MyPageNav
          activePage={activePage}
          onClickPageHandler={onClickPageHandler}
        />
        {activePage === "주문배송" ? <Order /> : <Review />}
      </MyPageBox>
      <BottomNav />
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
