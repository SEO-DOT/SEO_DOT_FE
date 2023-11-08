import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

// Axios 인스턴스 생성
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 마이페이지 조회
export const getUserInfo = async () => {
  try {
    const response = await instance.get(
      `/api/mypage/reviews?page=1&per=20&sort=new`
    );
    return response.data;
  } catch (error) {
    console.error("mypage 조회 오류", error);
  }
};
