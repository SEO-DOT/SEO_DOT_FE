import React from "react";
import { ReactComponent as XButton } from "../../assets/images/cartPage/x.svg";
// import { ReactComponent as UpButton } from "../../assets/images/cartPage/chevron-up.svg";
// import Button from "../../hooks/Button";
import Quantity from "../../hooks/Quantity";
import "./detail.css";

interface OrderProps {
    orderButton: boolean;
    setOrderButton: (orderButton: boolean) => void;
}

const PurchaseWindow: React.FC<OrderProps> = ({ orderButton, setOrderButton }) => {
    // const [word, setWord] = useState("");
    // const [color, setColor] = useState("");
    // const [textColor, setTextColor] = useState("");

    const closeHandler = () => {
        setOrderButton(false);
    };

    // const orderButtonHandler = () => {
    //     setOrderButton(true);
    // };

    return (
        <div className="w-full h-[276px] border-[1px] border-solid rounded-t-[20px] fixed bottom-0 bg-[#FFFFFF] z-50 shadow">
            <div className="w-full h-[56px] flex justify-between p-24 pt-[22px] pb-[8px]">
                <p></p>
                <XButton
                    className="cursor-pointer"
                    onClick={closeHandler}
                />
            </div>
            <div className="w-full h-[57px] bg-[#F9F9F9] flex justify-between items-center box-border pr-[26px] pl-[26px] pt-[11px] pb-[10px]">
                <p className="text-[#959595]">주문수량</p>
                <Quantity />
            </div>
            <div className="w-full h-[56px] flex justify-between items-center box-border pr-[26px] pl-[26px] border-b-[1px] border-solid border-[#E8E8E8]">
                <p className="text-[16px] font-[500]">총 1권 상품 금액</p>
                <p className="text-[20px] font-[700]">39,000원</p>
            </div>
            <div className="p-24 w-full h-[103px] flex pt-[12px]">
                <button className="w-full h-[51px] border-[1px] border-[#C1C1C1] bg-[#FFFFFF] rounded-[50px] mr-[7px] text-[#959595] cursor-pointer">
                    장바구니
                </button>
                <button className="w-full h-[51px] bg-[#2CBDE4] rounded-[50px] text-[#FFFFFF] cursor-pointer">구매하기</button>
            </div>
        </div>
    );
};

export default PurchaseWindow;
