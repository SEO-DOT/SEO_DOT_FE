import React, { useState } from "react";
import { ReactComponent as BookMarkButton } from "../../assets/images/detailPage/bookmark.svg";
import { ReactComponent as UnBookMarkButton } from "../../assets/images/detailPage/unbookmark.svg";
import "./detail.css";


interface OrderProps {
    status: string;
    orderButton: boolean;
    setOrderButton: (orderButton: boolean) => void;
}

const OrderStatus: React.FC<OrderProps> = ({ orderButton, setOrderButton, status }) => {
    const [bookMark, setBookMark] = useState(false);

    const openHandler = () => {
        setOrderButton(true);
    };
    const bookMarkHandler = () => {
        setBookMark(!bookMark);
    };

    return (
        <div className="w-full h-[103px] border-[1px] border-solid border-[#FFFFFF] bg-[#FFFFFF] flex justify-between items-center rounded-t-[20px] pb-[28px] pl-[20px] pr-[20px] fixed bottom-0 z-50 shadow">
            {!bookMark ? (
                <UnBookMarkButton
                    className="cursor-pointer"
                    onClick={bookMarkHandler}
                />
            ) : (
                <BookMarkButton
                    className="cursor-pointer"
                    onClick={bookMarkHandler}
                />
            )}
            <button
                className="bg-[#2CBDE4] w-full h-[51px] text-[#FFFFFF] cursor-pointer pt-[15px] pb-[15px] ml-[12px] rounded-[50px]"
                onClick={openHandler}
            >
                {status}
            </button>
        </div>
    );
};

export default OrderStatus;
