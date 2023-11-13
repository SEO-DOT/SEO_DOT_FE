import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../common/BottomNav";
import { ReactComponent as ArrowLeft } from "../../../assets/images/myPage/arrow-left.svg";
import { BsCart } from "react-icons/bs";

const MyInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [userName, setUserName] = useState("김서담");
  const [phoneNumber, setPhoneNumber] = useState("010-0000-0000");
  const [homeAddress, setHomeAddress] = useState("대구 수성구 달구벌대로 2435");
  const onClickSettingPage = () => {
    navigate("/setting");
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };
  return (
    <div>
      <header className="px-[24px] py-[25px] h-[79px] flex justify-between items-center">
        <ArrowLeft
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={onClickSettingPage}
        />
        <p className="text-[20px] font-medium">내 정보 관리</p>
        <BsCart className="fill-[#797979] w-[24px] h-[24px]"></BsCart>
      </header>
      <section className="bg-[#787878] w-full h-screen">
        <div className="mx-[24px] bg-[#f28f17] h-full">
          <div className="my-[16px]">
            <div className="flex text-[16px] font-medium">
              <p>이름</p>
              <p className="text-[#7ecee9]">*</p>
            </div>
            <div className="flex w-full h-[36px] justify-between items-center">
              {editing ? (
                <input
                  type="text"
                  value={userName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="rounded  w-full h-[36px] py-[8.5px] mr-[4px]"
                />
              ) : (
                <div className="text-[#767676] py-[8.5px] text-[16px] font-normal">
                  {userName}
                </div>
              )}
              <button
                className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                onClick={handleEdit}
              >
                변경
              </button>
            </div>
          </div>
          <div className="my-[16px]">
            <div className="flex text-[16px] font-medium">
              <p>주소</p>
              <p className="text-[#7ecee9]">*</p>
            </div>
            <div className="flex w-full h-[36px] justify-between items-center">
              {editing ? (
                <input
                  type="text"
                  value={homeAddress}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="rounded  w-full h-[36px] py-[8.5px] mr-[4px]"
                />
              ) : (
                <div className="text-[#767676] py-[8.5px] text-[16px] font-normal">
                  {homeAddress}
                </div>
              )}
              <button
                className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                onClick={handleEdit}
              >
                변경
              </button>
            </div>
          </div>
          <div className="my-[16px]">
            <div className="flex text-[16px] font-medium">
              <p>휴대폰번호</p>
              <p className="text-[#7ecee9]">*</p>
            </div>
            <div className="flex w-full h-[36px] justify-between items-center">
              {editing ? (
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="rounded  w-full h-[36px] py-[8.5px] mr-[4px]"
                />
              ) : (
                <div className="text-[#767676] py-[8.5px] text-[16px] font-normal">
                  {phoneNumber}
                </div>
              )}
              <button
                className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                onClick={handleEdit}
              >
                변경
              </button>
            </div>
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default MyInfoPage;
