import React from "react";
import Megaphone from "../../assets/images/main/megaphone.svg";

const Notice = () => {
  return (
    <div className="flex justify-center gap-[4px] leading-[60px] border-y-[1px] mt-[40px] mx-6">
      <img src={Megaphone} alt="Megaphone" />
      <div className="whitespace-nowrap truncate">
        [공지] 공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.
      </div>
    </div>
  );
};

export default Notice;
