import React from "react";

const Quantity = () => {
    return (
        <div className="h-[36px] flex items-center">
            <button className="w-[36px] h-[36px] border-[1px] text-[#959595]">-</button>
            <div className="w-[40px] ">1</div>
            <button className="w-[36px] h-[36px] border-[1px] text-[#959595]">+</button>
        </div>
    );
};

export default Quantity;
