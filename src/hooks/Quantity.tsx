import React, { useState } from "react";
import { ReactComponent as PlusButton } from "../assets/images/detailPage/plus.svg";
import { ReactComponent as MinusButton } from "../assets/images/detailPage/minus.svg";

// interface CartItem {
//     id: number;
//     name: string;
//     quantity: number;
// }

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    console.log(setQuantity);

    // const [cartItems, setCartItems] = useState<CartItem[]>([
    //     { id: 1, name: "Item 1", quantity: 1 },
    //     // Add more items as needed
    // ]);

    const minusNumber = () => {
        // setCartItems((prevItems) =>
        //     prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
        // );
        // if (quantity < 2) {
        //     return quantity === 1;
        // }
        // setQuantity(quantity - 1);
        console.log("-----");
    };

    const plusNumber = () => {
        // setCartItems((prevItems) =>
        //     prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.min(100, item.quantity + 1) } : item))
        // );
        // setQuantity(quantity + 1);
        console.log("+++++");
    };

    // const handleChange = () => {
    //     console.log("111");
    // };
    return (
        <div className="h-[36px] flex  ">
            <button
                className="w-[36px] h-[36px] border-[1px] text-[#959595] flex justify-center items-center rounded-tl-[4px] rounded-bl-[4px] bg-[#FFFFFF]"
                onClick={minusNumber}
            >
                <MinusButton />
            </button>
            <div>
                <input
                    className="w-[40px] h-[36px] border-t-[1px] border-b-[1px] text-center bg-[#E8E8E8]"
                    value={quantity}
                    readOnly
                />
            </div>
            <button
                className="w-[36px] h-[36px] border-[1px] text-[#959595] flex justify-center items-center rounded-tr-[4px] rounded-br-[4px] bg-[#FFFFFF]"
                onClick={plusNumber}
            >
                <PlusButton />
            </button>
        </div>
    );
};

export default Quantity;
