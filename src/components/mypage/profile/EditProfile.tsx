import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { ReactComponent as ArrowLeft } from "../../../assets/images/myPage/arrow-left.svg";
import { ReactComponent as CameraIcon } from "../../../assets/images/myPage/camera.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/myPage/arrow-right.svg";
import BottomNav from "../../common/BottomNav";
const EditProfile = () => {
  const navigate = useNavigate();
  const onClickMyPage = () => {
    navigate("/mypage");
  };
  const onClickMyInfoPage = () => {
    navigate("/setting/myinfo");
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <header className="fixed w-full top-0 px-[24px] py-[25px] h-[79px] flex justify-between items-center">
        <ArrowLeft
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={onClickMyPage}
        />
        <p className="text-[20px] font-medium">설정</p>
        <BsCart className="fill-[#797979] w-[24px] h-[24px]"></BsCart>
      </header>
      <section>
        <div className="fixed top-[79px] w-full h-[100px] ">
          <div className="fixed top-[79px] flex justify-center  w-full h-[100px]">
            <div className="flex relative w-[110px] h-[100px]">
              <div className="absolute inset-0 rounded-full w-[100px] h-[100px] bg-[#E1E6EF]"></div>
              <div className="cursor-pointer absolute  bottom-0 right-0 shadow-[0_4px_4px_-0px_rgba(0,0,0,25)] rounded-full w-[36px] h-[36px] bg-[#fff] flex justify-center items-center">
                <CameraIcon className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center w-full">
        <div className="fixed top-[179px] w-full text-[16px] font-medium px-[24px] py-[40px] h-[119px]">
          <div
            className="flex pb-[12px]"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p className="text-start">닉네임</p>
            <p className="text-[#7ecee9]">*</p>
          </div>
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            className="px-[12px] mb-[20px] w-full h-[46px] bg-[#fff] rounded border-[1px]  border-solid border-[#797979]"
          ></input>
          <div className="fixed items-center bottom-0 left-0 w-full  text-left">
            <div className="px-[24px]">
              <p className="text-[12px] text-[#767676] font-normal">
                ·회원기본정보는 회원정보수정에서 변경 가능합니다.
              </p>
              <div className="flex items-center pb-[40px]">
                <p className="text-[14px] font-semibold">내 정보 관리로 이동</p>
                <ArrowRight
                  className="w-[17px] h-[17px] cursor-pointer"
                  onClick={onClickMyInfoPage}
                />
              </div>
              <button
                className="mb-[12px] w-full h-[62px] rounded-[30px] bg-[#7ECEE9] text-[16px] font-bold text-[#fff]
               "
              >
                확인
              </button>
            </div>
            <BottomNav />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
