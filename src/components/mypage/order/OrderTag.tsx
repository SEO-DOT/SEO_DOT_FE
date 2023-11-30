import React, { useState } from "react";

const OrderTag = () => {
  const [activeCategory, setActiveCategory] = useState("#전체");
  const getCategoryClass = (text: string) => {
    switch (text) {
      case "#전체":
        return "category-all";
      case "#준비중":
        return "category-preparing";
      case "#배송중":
        return "category-shipping";
      case "#배송완료":
        return "category-delivered";
      case "#취소/교환":
        return "category-cancel-exchange";
      default:
        return "category-all";
    }
  };

  // 스타일 객체를 만들어 활성화 및 비활성화 스타일을 정의
  const getStyle = (text: string) => ({
    padding: "10px",
    margin: "4px",
    height: "30px",
    backgroundColor: "#fff",
    borderColor: activeCategory === text ? "#5EBAD9" : "#767676",
    color: activeCategory === text ? "#5EBAD9" : "#767676",
  });

  const onClickCategory = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <section className="px-[24px] w-full h-[62px] bg-[#daf019] flex items-center justify-center overflow-x-scroll">
        <div
          className="pl-[48px] flex bg-[#fff]"
          style={{ whiteSpace: "nowrap" }}
        >
          {["#전체", "#준비중", "#배송중", "#배송완료", "#취소/교환"].map(
            (text, index) => (
              <div
                className={`px-[10px] py-[7px] mr-[4px] flex inline-block h-[30px] bg-[#fff] border-solid rounded-[26px] border-[1px] border-[#5EBAD9]  items-center justify-center ${getCategoryClass(
                  text
                )}`}
                style={getStyle(text)}
                key={index}
                onClick={() => onClickCategory(text)}
              >
                <p className="text-[14px] font-nomal">{text}</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default OrderTag;
