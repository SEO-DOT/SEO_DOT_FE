import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LongArrowLeft } from "../../../assets/images/myPage/long-arrow-left.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/myPage/cart.svg";
import instance from "../../../api/api";
import AddressSearch from "../../common/AddressSearch";

export interface MyInfoData {
  userName: string;
  phoneNumber: string;
  zoneCode: string;
  streetAddress: string;
  detailAddress: string;
}

const MyInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [nameEditing, setNameEditing] = useState(false);
  const [phoneEditing, setPhoneEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  // const [myInfoEditing, setMyInfoEditing] = useState({
  //   detailAddress: "",
  //   phoneNumber: "",
  //   streetAddress: "",
  //   userName: "",
  //   zoneCode: "",
  // });
  const [myInfoData, setMyInfoData] = useState<MyInfoData[]>([]);
  const [myInfo, setMyInfo] = useState<MyInfoData>({
    detailAddress: "",
    phoneNumber: "",
    streetAddress: "",
    userName: "",
    zoneCode: "",
  });

  const getMyInfoData = async () => {
    try {
      const response = await instance.get(`/api/mypage/user-detail`);
      const InfoData = response.data;
      setMyInfoData(InfoData);
      console.log("마이인포data", InfoData);
      return InfoData;
    } catch (error) {
      console.error("내정보조회 오류", error);
    }
  };

  useEffect(() => {
    getMyInfoData();

    const fetchData = async () => {
      try {
        const data = await getMyInfoData();
        console.log("데이터", data.zoneCode);
        // console.log("데이터배열", data[0].detailAddress);
        if (data) {
          setMyInfo({
            detailAddress: data.detailAddress,
            phoneNumber: data.phoneNumber,
            streetAddress: data.streetAddress,
            userName: data.userName,
            zoneCode: data.zoneCode,
          });
        }
        console.log("마이인포", myInfo);
      } catch (error) {
        console.error("데이터 불러오기 오류", error);
      }
    };

    fetchData(); // 비동기 함수 호출

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("로딩확인", myInfo);
  const onClickSettingPage = () => {
    navigate("/setting");
  };

  const handleNameEdit = () => {
    setNameEditing(true);
  };

  const handlePhoneEdit = () => {
    setPhoneEditing(true);
  };

  const handleAddressEdit = () => {
    setAddressEditing(true);
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMyInfo((prevMyInfo) => ({
      ...prevMyInfo,
      userName: e.target.value,
    }));
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMyInfo((prevMyInfo) => ({
      ...prevMyInfo,
      phoneNumber: e.target.value,
    }));
  };

  const handleNameBlur = () => {
    setNameEditing(false);
  };

  const handlePhoneBlur = () => {
    setPhoneEditing(false);
  };

  const handlerAddressBlur = () => {
    setAddressEditing(false);
  };
  return (
    <div>
      <header className=" mt-[-54px] bg-[#fff] w-full border-b-[1px] border-[#F4F4F4] pt-[6px] pb-[18px] h-[79px] px-[24px] flex justify-between items-center">
        <LongArrowLeft
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={onClickSettingPage}
        />
        <p className="text-[14px] font-medium">내 정보 관리</p>
        <CartIcon className=" w-[20px] h-[20px]"></CartIcon>
      </header>
      <div className="bg-[#f4f4f4] mt-[20px] grid gap-[12px] w-full h-screen">
        <section className=" bg-[#787878] w-full">
          <div className="py-[36px] px-[24px] bg-[#fff] h-full grid gap-[24px]">
            <div className="">
              <div className="flex text-[14px] font-normal pb-[6px]">
                <p>이름</p>
                <p className="text-[#7ecee9]">*</p>
              </div>
              <div className="flex w-full h-[36px] justify-between items-center">
                {nameEditing ? (
                  <input
                    type="text"
                    value={myInfo.userName}
                    onChange={handleNameInputChange}
                    onBlur={handleNameBlur}
                    className="rounded  w-full h-[36px] py-[8.5px] mr-[4px]"
                  />
                ) : (
                  <div className="text-[#C1C1C1] font-medium py-[8.5px] text-[16px]">
                    {myInfo.userName}
                  </div>
                )}
                <button
                  className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                  onClick={handleNameEdit}
                >
                  변경
                </button>
              </div>
            </div>
            <div className="my-[16px]">
              <div className="flex text-[14px] font-normal pb-[6px]">
                <p>주소</p>
                <p className="text-[#7ecee9]">*</p>
              </div>
              <div className="flex w-full h-[36px] justify-between items-center">
                {addressEditing ? (
                  "가나다"
                ) : (
                  <div className="text-[#C1C1C1] font-medium  py-[8.5px] text-[16px]">
                    [{myInfo.zoneCode}]{myInfo.streetAddress}
                    {myInfo.detailAddress}
                  </div>
                )}
                <button
                  className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                  onClick={handleAddressEdit}
                >
                  변경
                </button>
              </div>
            </div>
            <div className="my-[16px]">
              <div className="flex text-[14px] font-normal pb-[6px]">
                <p>휴대폰번호</p>
                <p className="text-[#7ecee9]">*</p>
              </div>
              <div className="flex w-full h-[36px] justify-between items-center">
                {phoneEditing ? (
                  <input
                    type="text"
                    value={myInfo.phoneNumber}
                    onChange={handlePhoneInputChange}
                    onBlur={handlePhoneBlur}
                    className="rounded  w-full h-[36px] py-[8.5px] mr-[4px]"
                  />
                ) : (
                  <div className="text-[#C1C1C1] font-medium  py-[8.5px] text-[16px] ">
                    {myInfo.phoneNumber}
                  </div>
                )}
                <button
                  className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]"
                  onClick={handlePhoneEdit}
                >
                  변경
                </button>
              </div>
            </div>
            <div className="my-[16px]">
              <div className="flex text-[14px] font-normal">
                <p>본인인증</p>
              </div>
              <div className="flex w-full h-[36px] justify-between items-center text-[16px] font-medium text-[#7ecee9]">
                인증완료
                <button className="rounded h-full w-[72px] border-[1px] border-[#7ecee9] font-bold text-[14px] text-[#7ecee9] bg-[#fff]">
                  재인증
                </button>
              </div>
            </div>
            {/* <AddressSearch /> */}
          </div>
        </section>
        <section>
          <div className="text-left px-[24px] w-full h-[370px] bg-[#fff]">
            <div className="border-b-[1px] border-[#F4F4F4] flex items-center pt-[34px] pb-[13px] h-[71px] bg-[#fff] w-full">
              <input className="mr-[6px]" type="checkbox"></input>
              <p className="text-[16px] font-medium text-left">
                개인정보 수집 및 이용 동의
              </p>
            </div>
            <div className="grid gap-[8px] text-[12px] text-[#767676] font-medium pt-[16px] h-[88px] bg-[#fff] w-full">
              <li>
                개인정보 수집 목적 : 원활한 서닻 서비스 이용을 위해 수집합니다.
              </li>
              <li>개인정보 수집항목 : [필수] 이름, 주소, 휴대폰번호</li>
              <li>
                개인정보 이용기간 : 회원 탈퇴 시 또는 개인정보처리방침에 따라
                보유 및 파기 됩니다.
              </li>
            </div>
            <div className="pt-[36px]">
              <p className="pt-[36px] underline text-[14px] font-bold text-[#959595] cursor-pointer">
                회원탈퇴
              </p>
            </div>
          </div>
          <button className="fixed left-0 bottom-[0px] bg-[#3E3E3E] w-full h-[72px] text-[#fff] text-[16px] font-medium">
            확인
          </button>
        </section>
      </div>

      {/* <BottomNav /> */}
    </div>
  );
};

export default MyInfoPage;
