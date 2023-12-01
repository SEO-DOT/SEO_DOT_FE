import React, { useState } from "react";
import { ReactComponent as CheckBox } from "../../assets/images/cartPage/check-circle.svg";
import { ReactComponent as XButton } from "../../assets/images/cartPage/x.svg";

const CartLists = () => {
    // const [inputValue, setInputValue] = useState<string>("");

    return (
        <section className="p-24 pt-[20px] pb-[20px] border-b-[1px] flex">
            <CheckBox />
            <div className="w-full">
                <div className="flex justify-end">
                    <XButton />
                </div>
                <div className="flex">
                    <img
                        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="bookImage"
                        className="w-[60px] h-[84px]"
                    />
                    <div className="flex flex-col justify-between ml-[10px] text-left w-full">
                        <p>bookName</p>
                        <div className="flex">
                            <p className="mr-[4px]">10%</p>
                            <p>4,000원</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartLists;
