import React, { useState } from "react";
import Review from "./Review";

import { TiStar } from "react-icons/ti";
import { ReactComponent as DownButton } from "../../assets/images/detailPage/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import EditReview from "./EditReview";

interface ReviewProps {
    score: number;
    onRatingChange: (score: number) => void;
}

const Reviews: React.FC<ReviewProps> = ({ score, onRatingChange }) => {
    // const [filter, setFilter] = useState("like");
    const [clickedTab, setClickedTab] = useState(0);
    const [editReview, setEditReview] = useState(false);

    const filterTab: { [key: number]: string } = {
        0: "최신순",
        1: "공감순",
    };

    const navigate = useNavigate();

    const onClickReview = () => {
        if (editReview === true) {
            return <EditReview />;
        }
    };

    return (
        <div>
            <div className="p-24 text-left pb-[12px] pt-[28px]">
                <h3 className="text-[20px] font-[600] mb-[20px]">리뷰</h3>
                <div className="flex justify-center items-center">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div
                            key={value}
                            className="inline-block"
                        >
                            {score >= value ? (
                                <TiStar className="w-[30px] h-[30px] text-[#2CBDE4]" />
                            ) : (
                                <TiStar className="w-[30px] h-[30px] text-[#EDEDED]" />
                            )}
                        </div>
                    ))}
                    <p className="ml-[8px] text-[32px] font-500">{score}</p>
                </div>
                <button
                    className="w-full pt-[15px] pb-[14px] bg-[#2CBDE4] rounded-[4px] text-[#ffffff] mt-[28px] mb-[28px]"
                    onClick={onClickReview}
                >
                    리뷰작성
                </button>
                <div>
                    {[0, 1].map((tab) => (
                        <button
                            className={`pt-[8px] pr-[12px] pb-[8px] pl-[12px] border-[1px] rounded-[26px] text-[14px] mr-[8px] ${
                                clickedTab === tab ? "text-[#5EBAD9] border-[#5EBAD9]" : "tab"
                            }`}
                            onClick={() => setClickedTab(tab)}
                        >
                            {filterTab[tab]}
                        </button>
                    ))}
                </div>
            </div>
            <Review />
            <div className="p-24">
                <div className="mt-[28px] mb-[28px] pt-[16px] pb-[16px] bg-[#F4F4F4] flex justify-center rounded-[5px] cursor-pointer">
                    <button>더보기</button>
                    <DownButton />
                </div>
            </div>
        </div>
    );
};

export default Reviews;

// const isFilter = (selectedFilter: any) => {
//     setFilter(selectedFilter);
// };

// const getRating = (e: any) => {
//     const dataValue = Number(e.target.dataset.value);
//     // const targetList = e.target.parentNode.childNodes;

//     // for (let i = 0; i < targetList.length; i++) {
//     //     if (i < dataValue) {
//     //         targetList[i].style.color = "red";
//     //     } else {
//     //         targetList[i].style.color = "";
//     //     }
//     // }
//     setRatingValue(dataValue);
// };
// console.log(ratingValue);
