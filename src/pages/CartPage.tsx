import React, { useState } from "react";
import CartLists from "../components/cartPage/CartLists";
import { ReactComponent as CheckBox } from "../assets/images/cartPage/check-circle.svg";
import { ReactComponent as XButton } from "../assets/images/cartPage/x.svg";
import { ReactComponent as UpButton } from "../assets/images/cartPage/chevron-up.svg";
import TopHeader from "../components/common/TopHeader";

const CartPage = () => {
    const [orderButton, setOrderButton] = useState(false);
    const orderButtonHandler = () => {
        setOrderButton(true);
    };
    const closeHandler = () => {
        setOrderButton(false);
    };
    const openHander = () => {
        setOrderButton(true);
    };
    return (
        <>
            <TopHeader />
            <div className="p-24 ">
                <div className="flex justify-between pt-[8px] pb-[8px]">
                    <div className="flex">
                        <CheckBox />
                        <p>전체선택(1/4)</p>
                    </div>
                    <p>상품삭제</p>
                </div>
            </div>
            <div className="border-[6px]" />
            <section>
                <CartLists />
            </section>
            {orderButton ? (
                <div className="w-full h-[317px] border-[1px] border-solid border-[rgba(0, 0, 0, 0.08)] rounded-t-[20px] fixed bottom-0 ">
                    <div className="w-full h-[56px] flex justify-between p-24 pt-[16px] pb-[16px] border-b-[1px] border-solid border-[#E8E8E8]">
                        <p>결제 예상 금액</p>
                        <XButton onClick={closeHandler} />
                    </div>
                    <div className="w-full h-[35px] flex justify-between box-border pr-[26px] pl-[26px] pt-[8px] pb-[8px]">
                        <p>상품금액</p>
                        <p>39,000원</p>
                    </div>
                    <div className="w-full h-[35px] flex justify-between pr-[26px] pl-[26px] pt-[8px] pb-[8px]">
                        <p>배송비</p>
                        <p>0원</p>
                    </div>
                    <div className="w-full h-[35px] flex justify-between pr-[26px] pl-[26px] pt-[8px] pb-[8px] border-b-[1px] border-solid border-[#E8E8E8]">
                        <p>할인 금액</p>
                        <p>0원</p>
                    </div>
                    <div className="w-full h-[56px] flex justify-between box-border pr-[26px] pl-[26px] pt-[16px] pb-[16px] border-b-[1px] border-solid border-[#E8E8E8]">
                        <p>결제 예상 금액</p>
                        <p>39,000원</p>
                    </div>

                    <div className="w-full h-[100px] flex justify-around items-center rounded-t-[20px] pl-[20px] pr-[20px] ">
                        <div className="flex">
                            <p>총 39,000원</p>
                            <UpButton />
                        </div>
                        <button
                            className="bg-[#797979]  pt-[17px] pb-[16px] pl-[64.5px] pr-[65.5px]"
                            onClick={orderButtonHandler}
                        >
                            구매하기(1)
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-full h-[100px] border-[1px] border-solid border-[rgba(0, 0, 0, 0.08)] flex justify-around items-center rounded-t-[20px] pl-[20px] pr-[20px] fixed bottom-0">
                    <div className="flex">
                        <p>총 39,000원</p>
                        <UpButton onClick={openHander} />
                    </div>
                    <button
                        className="bg-[#797979]  pt-[17px] pb-[16px] pl-[64.5px] pr-[65.5px]"
                        onClick={orderButtonHandler}
                    >
                        구매하기(1)
                    </button>
                </div>
            )}
        </>
    );
};

export default CartPage;
