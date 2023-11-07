import React from "react";
import { ReactComponent as Previous } from "../../assets/images/cartPage/chevron-right.svg";

const TopHeader = () => {
    return (
        <section>
            <div className="bg-gray-300 pt-[20px] pb-[20px] p-24 flex justify-between align-middle">
                <Previous />
                <p className="pr-[28px]">TopHeader</p>
                <p></p>
            </div>
        </section>
    );
};

export default TopHeader;
