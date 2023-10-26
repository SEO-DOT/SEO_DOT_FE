import React from "react";
import Header from "../components/Header";
import Nav from "../components/Main/Nav";
import Visual from "../components/Main/Visual";

const Main = () => {
  return (
    <div className="w-[375px] px-6 mx-auto pt-[54px]">
      {/* 헤더 */}
      <Header />
      {/* 네비게이션 바 */}
      <Nav />
      {/* 메인 비주얼 */}
      <Visual />
    </div>
  );
};

export default Main;
