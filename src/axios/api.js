import axios from "axios";

// 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    // 기본 Content-Type 설정
    // "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행할 작업
    return config;
  },
  function (error) {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  function (response) {
    // 성공적인 응답처리
    return response;
  },
  function (error) {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export default instance;
