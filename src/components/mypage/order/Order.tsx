import React, { useEffect } from "react";
import OrderTag from "./OrderTag";
import BookImg from "../../../assets/images/myPage/Review_IMG.png";
import instance from "../../../api/api";
const Order = () => {
  const getUserInfoOrder = async () => {
    try {
      const response = await instance.get(`/api/mypage/orders`);
      console.log("주문조회data", response);
      return response;
    } catch (error) {
      console.error("mypage 주문조회 오류", error);
    }
  };

  // useEffect(() => {
  //   getUserInfoOrder();
  // }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회
  return (
    <div className="flex-cul w-full h-full bg-blue-300">
      <OrderTag />
      <section className="w-full h-screen bg-[#18ca95] overflow-auto">
        <div className="w-full bg-[#fff] mb-[12px]">
          <div className="px-[24px] flex justify-between items-center w-full h-[40px] border-[1px] border-[#000]">
            <p className="text-left text-[16px] font-medium">
              23.10.10(123456789)
            </p>
            <p className="text-[12px] text-[#767676]">주문상세</p>
          </div>
          <div className="mx-[24px] flex py-[20px] border-b-[1px] border-b-[#e8e8e8]  bg-[#efabe6]">
            <img
              className="flex-initial bg-[#567891] w-[60px] h-[84px] mr-[10px]"
              src={BookImg}
              alt="reviewBook"
            />
            <div className=" flex-cul flex-1 font-medium text-justify h-full overflow-hidden">
              <p className="items-center h-[19px] whitespace-nowrap text-[14px] font-medium  text-black">
                여름을 한 입 베어 물었더니
              </p>
              <div
                className="flex items-center text-[12px] font-normal text-[#797979]"
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <p>작가</p>
                <div className="flex items-center mx-[4px] w-[1px] h-[10px] bg-[#797979]"></div>
                <p>출판사</p>
              </div>
              <p className="text-[12px] font-medium text-[#797979]">수량:1</p>
              <div className="w-full bg-[#fff] text-right">
                <p className="text-[12px] font-medium text-[#5EBAD9]">
                  배송완료
                </p>
                <p className="text-[14px] font-bold">39,000원</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
