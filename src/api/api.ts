import axios from "axios";
import { CartAPIType } from "../types/data";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  // 매개변수 이름은 config가 아니라도 됨
  function (config) {
    let accesstoken = localStorage.getItem("authorization");
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqa2prOTUyMkBuYXZlci5jb20iLCJhdXRoIjoiVVNFUiIsIk9hdXRoSWQiOnsib2F1dGhTZXJ2ZXJJZCI6IjMxNzIzMjI3ODQiLCJwbGF0Zm9ybSI6IktBS0FPIn0sImV4cCI6MjAwMDgxODYyMywiaWF0IjoxNzAwODE4NjIzfQ.dThL4B7Itis-jscylr7j15Xz6usvYZypEsUbWoURY9A`;
    return config;
  },
  //오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log("request", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // 응답을 보내기 전 수행되는 함수
  function (response) {
    return response;
  },
  //오류응답을 보내기 전 수행되는 함수
  function (error) {
    console.log("레스폰스", error);
    return Promise.reject(error);
  }
);
export default instance;
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
