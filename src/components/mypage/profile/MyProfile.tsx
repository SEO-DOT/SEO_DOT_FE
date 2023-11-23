import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GearIcon } from "../../../assets/images/myPage/gear.svg";
import { ReactComponent as PencilIcon } from "../../../assets/images/myPage/pencil.svg";
import { instance } from "../../../api/api";

export interface UserData {
  userId: string;
  nickname: string;
  address: string;
  point: number;
  reviewCount: number;
  profileImage: string;
}

const MyProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData[]>([]);
  const [userInfo, setUserInfo] = useState<UserData>({
    userId: "",
    nickname: "",
    address: "",
    point: 0,
    reviewCount: 0,
    profileImage: "",
  });

  const getUserInfo = async () => {
    try {
      const response = await instance.get(`/api/mypage/user`);
      const userData = response.data;
      setUserData(userData);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error("mypage 조회 오류", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      const currentUserData = userData[0];

      setUserInfo({
        userId: currentUserData.userId,
        nickname: currentUserData.nickname,
        address: currentUserData.address,
        point: currentUserData.point,
        reviewCount: currentUserData.reviewCount,
        profileImage: currentUserData.profileImage,
      });
      console.log("큐렌트", currentUserData);
    }
  }, [userData]);

  console.log("유저정보", userInfo);

  const onClickSettingPage = () => {
    navigate("/setting");
  };
  const onClcikEditProfile = () => {
    navigate("/mypage/edit");
  };

  return (
    <section className="px-[24px] py-[20px] flex ">
      <div className="flex justify-between w-full h-[80px]">
        <div className="flex">
          <div className="relative  w-[80px] h-[80px] ">
            <div className="absolute top-0 rounded-full w-[80px] h-[80px] bg-[#E1E6EF]"></div>
            <div
              className="cursor-pointer absolute top-[56px] left-[56px] shadow-[0_4px_4px_-0px_rgba(0,0,0,25)] rounded-full w-[24px] h-[24px] bg-[#fff] flex justify-center items-center"
              onClick={onClcikEditProfile}
            >
              <PencilIcon />
            </div>
          </div>
          <div className="pl-[8px]">
            <p className="flex text-[20px] text-[#000] font-semibold">닉네임</p>
          </div>
        </div>
        <div className=" w-[172px] h-6 flex-cul">
          <div
            className="flex justify-end pb-[26px] cursor-pointer"
            onClick={onClickSettingPage}
          >
            <GearIcon />
          </div>
          <div className="rounded flex justify-between items-center px-[12px] py-[8px] bg-[#E1E6EF] w-[172px] h-[30px]">
            <div className="flex text-[12px] font-normal">
              <p>리뷰&nbsp;</p>
              <p className="font-semibold">4</p>
            </div>
            <div className="w-[0.5px] h-[10px] bg-black"></div>
            <div className="flex text-[12px]">
              <p>적립금&nbsp;</p>
              <p className="font-semibold">100,0000P</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
