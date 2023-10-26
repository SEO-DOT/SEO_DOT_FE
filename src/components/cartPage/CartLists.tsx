import React, { useState } from "react";
import { ReactComponent as CheckBox } from "../../assets/images/check-circle.svg";
import { ReactComponent as XButton } from "../../assets/images/x.svg";

interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

const CartLists = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "Item 1", quantity: 1 },
        // Add more items as needed
    ]);

    // const [inputValue, setInputValue] = useState<string>("");

    const minusNumber = (itemId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
        );
    };

    const plusNumber = (itemId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.min(100, item.quantity + 1) } : item))
        );
    };

    return (
        <>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div className="flex justify-between">
                        <CheckBox />
                        <XButton />
                    </div>
                    <div className="flex space-x-4">
                        <img
                            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="bookImage"
                            className="w-cartItemWidth h-cartItemmHeight"
                        />
                        <div>
                            <p>{item.name}</p>
                            <p>4,000원</p>
                            <div className="flex">
                                <button
                                    onClick={() => minusNumber(item.id)}
                                    className="w-4 bg-gray-600"
                                >
                                    -
                                </button>
                                <input
                                    className="w-4"
                                    value={item.quantity}
                                />
                                <button
                                    onClick={() => plusNumber(item.id)}
                                    className="w-4 bg-gray-600"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CartLists;
