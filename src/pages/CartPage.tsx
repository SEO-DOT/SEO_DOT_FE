import React from "react";
import TopHeader from "../components/common/TopHeader";
import Order from "../components/cartPage/Order";
import CartList from "../components/cartPage/CartList";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/api";
import { ItemsProps } from "../types/data";
import { CartContext } from "../components/cartPage/CartContext";
import { QueryKeys } from "../queryClient";

const CartPage = () => {
    const { data, isLoading, error } = useQuery({ queryKey: [QueryKeys.CART], queryFn: getCart });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !data || !data[0]) {
        console.error("Error fetching cart data:", error);
        return <div>장바구니 데이터를 가져오는 데 실패했습니다.</div>;
    }

    const CartItems = data[0]?.CartList;
    console.log("sssss", CartItems);

    return (
        <>
            <CartContext.Provider value={CartItems}>
                <TopHeader />
                {!CartItems.length ? <div>장바구니 비었습니다.</div> : <CartList items={CartItems} />}
                <Order />
            </CartContext.Provider>
        </>
    );
};

export default CartPage;
