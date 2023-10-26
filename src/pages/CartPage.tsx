import React from "react";
import CartLists from "../components/cartPage/CartLists";
import { ReactComponent as CheckBox } from "../assets/images/check-circle.svg";
import TopHeader from "../components/common/TopHeader";

const CartPage = () => {
    return (
        <>
            <TopHeader />
            <section className="p-24">
                <div className="flex">
                    <CheckBox />
                    <p>전체선택(1/4)</p>
                    <p>상품삭제</p>
                </div>
                <CartLists />
            </section>
        </>
    );
};

export default CartPage;
