// mocking data
import { rest } from "msw";
import uuid from "react-uuid";
import { CartAPIType } from "../types/data";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
    bookId: uuid(),
    // image: `https://loremflickr.com/640/480?random=${i + 1}`,
    image: `https://loremflickr.com/640/480?random=${i + 1}`,
    price: 50000,
    discountPrice: 50000,
    title: `임시상품${i + 1}`,
    quantity: 2,
}));

const mock_cart = {
    CartSize: mock_products.length,
    CartList: mock_products,
};

export const handlers = [
    rest.get<CartAPIType>(`${process.env.REACT_APP_BASE_URL}/cart`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
                status: 200,
                msg: "장바구니 조회 성공",
                data: mock_cart,
            })
        );
    }),
];
