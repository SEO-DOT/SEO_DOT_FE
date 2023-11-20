import axios from "axios";
import { CartAPIType } from "../types/data";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// CART ----------------------------------------------------------------------------------------

// cart 요청
export const getCart = async () => {
    try {
        const response = await instance.get(`/cart`);
        return response.data as CartAPIType[];
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
};

// cart 추가
export const addCart = async (item: string) => {
    try {
        const response = await instance.post(`/cart`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// cart 업데이트(수량변경)
export const updateCart = async (itemId: number, updateAmount: number) => {
    try {
        const response = await instance.put(`/cart`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// cart 삭제
export const deleteCart = async ({ itemId }: { itemId: any }) => {
    try {
        const response = await instance.delete(`/cart/${itemId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
