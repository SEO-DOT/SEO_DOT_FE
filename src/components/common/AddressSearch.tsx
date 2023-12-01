import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";

interface DaumAddressData {
  userSelectedType: string;
  roadAddress: string;
  jibunAddress: string;
  bname: string;
  buildingName: string;
  apartment: string;
  zonecode: string;
}

const AddressSearch: React.FC = () => {
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [zoneCode, setZoneCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const handleDetailAddressChange = (e: any) => {
    setDetailAddress(e.target.value);
  };
  const handleAddressSearch = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
      if (openPostcode) {
        setOpenPostcode(false);
      }
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
      setStreetAddress(data.address);
      setZoneCode(data.zonecode);
    },
  };

  return (
    <div className="bg-[#f34545] w-full h-[206px]">
      <div className="text-[14px] font-normal text-left">주소</div>
      <div className="grid gap-[12px]">
        <input
          type="text"
          placeholder="우편번호"
          value={zoneCode}
          className="w-full h-[51px] p-[16px] bg-[#fafafa]"
        />
        <input
          type="text"
          placeholder="기본주소"
          value={streetAddress}
          className="w-full h-[51px] p-[16px] bg-[#fafafa]"
        />
        <input
          type="text"
          placeholder="나머지주소"
          onChange={handleDetailAddressChange}
          value={detailAddress}
          className="w-full h-[51px] p-[16px] bg-[#fafafa]"
        />
      </div>
      <button onClick={handleAddressSearch.clickButton}>toggle</button>

      {openPostcode && (
        <DaumPostcode
          onComplete={handleAddressSearch.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
        />
      )}
    </div>
  );
};

export default AddressSearch;
