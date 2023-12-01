import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GearIcon } from "../../../assets/images/myPage/gear.svg";
import { ReactComponent as PencilIcon } from "../../../assets/images/myPage/pencil.svg";
import instance from "../../../api/api";
import EditProfile from "./EditProfile";

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
      console.log("유저데이터", userData);
      setUserInfo({
        userId: userData.userId,
        nickname: userData.nickName,
        address: userData.address,
        point: userData.point,
        reviewCount: userData.reviewCount,
        profileImage: userData.profileImage,
      });
      return response.data;
    } catch (error) {
      console.error("mypage 조회 오류", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const onClickSettingPage = () => {
    navigate("/setting");
  };
  const onClcikEditProfile = () => {
    navigate("/mypage/edit");
  };

  return (
    <section className="w-full h-[152px]  px-[24px] py-[36px] flex ">
      <div className="flex justify-between w-full h-[80px]">
        <div className="flex bg-[#fff]">
          <div className="relative  w-[80px] h-[80px] ">
            <div className="absolute top-0 rounded-full w-[80px] h-[80px] bg-[#E1E6EF]">
              <img
                className="object-cover w-full h-full rounded-full"
                src={userInfo.profileImage} // 이미지 파일 경로를 지정
                alt="profile_image"
              />
            </div>
            <div
              className="cursor-pointer absolute top-[56px] left-[56px] border-[1px] border-[#DFDFDF] rounded-full w-[24px] h-[24px] bg-[#fff] flex justify-center items-center"
              onClick={onClcikEditProfile}
            >
              <PencilIcon />
            </div>
          </div>
          <div className="pl-[8px]">
            <p className="flex text-[20px] text-[#000] font-semibold">
              {userInfo.nickname}
            </p>
          </div>
        </div>
        <div className="flex-1 h-6 flex-cul">
          <div>
            <div
              className="flex justify-end pb-[26px] cursor-pointer"
              onClick={onClickSettingPage}
            >
              <GearIcon />
            </div>
            <div className="flex justify-around items-center h-[14px]">
              <div className="flex text-[12px] font-normal text-[#797979]">
                <p>리뷰&nbsp;</p>
                <p className="font-semibold">{userInfo.reviewCount}</p>
              </div>
              <div className="w-[0.5px] h-[10px] bg-[#797979]"></div>
              <div className="flex text-[12px] text-[#797979]">
                <p>적립금&nbsp;</p>
                <p className="font-semibold text-[#2CBDE4]">
                  {userInfo.point}P
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
