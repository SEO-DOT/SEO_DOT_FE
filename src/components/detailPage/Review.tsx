import React, { useState } from "react";

import { ReactComponent as NextButton } from "../../assets/images/detailPage/chevron-right-small-circle.svg";
import { ReactComponent as FillStarButton } from "../../assets/images/detailPage/Active.svg";
import { ReactComponent as StarButton } from "../../assets/images/detailPage/Inactive.svg";

import { ReactComponent as LikeButton } from "../../assets/images/detailPage/like.svg";
import { ReactComponent as UnLikeButton } from "../../assets/images/detailPage/unlike.svg";
import { ReactComponent as ChatButton } from "../../assets/images/detailPage/chat-alt.svg";
// import { ReactComponent as ScoreButton } from "../../assets/images/detailPage/anchor.svg";
// import { ReactComponent as FillScoreButton } from "../../assets/images/detailPage/anchor-fill.svg";
// import { ReactComponent as CheckButton } from "../../assets/images/cartPage/check-circle.svg";
// import { ReactComponent as FillCheckButton } from "../../assets/images/cartPage/check-circle-fill.svg";
// import { ReactComponent as UpButton } from "../../assets/images/detailPage/chevron-up.svg";
import Comments from "./Comments";

const Review = () => {
    // const [ratingValue, setRatingValue] = useState(0);
    const [review, setReview] = useState(false);
    const [comments, setComments] = useState(false);
    const [like, setLike] = useState(false);
    // const [comment, setComment] = useState(0);

    const showReview = () => {
        setReview(!review);
    };

    const showAllComment = () => {
        setComments(!comments);
    };
    console.log(comments);

    // const chatHandler = () => {
    //     console.log("asdd");
    // };

    const likeHandler = () => {
        setLike(!like);
    };

    return (
        <section>
            <div className="p-24 text-left border-t-[1px] pt-[12px]">
                <span className="border-[1px] border-[#EDEDED] text-[#959595] text-[12px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] rounded-[4px]">
                    구매자
                </span>
                <div className="flex justify-between items-center mt-[6px]">
                    <div className="text-[#959595]">
                        <span className=" mr-[8px] pr-[8px] text-[14px]">닉네임</span>
                        <span className="mr-[8px] pr-[8px] text-[12px]">날짜</span>
                    </div>
                    <p className="text-[#C1C1C1] text-[10px] cursor-pointer">신고/차단</p>
                </div>
                <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div
                            key={value}
                            className="inline-block mt-[8px] mb-[6px]"
                        >
                            {/* {reviewScore >= value ? ( */}
                            {5 >= value ? (
                                <FillStarButton className="w-[16px] h-[18.2px] text-[#2CBDE4]" />
                            ) : (
                                <StarButton className="w-[18.2px] h-[18.2px] text-[#EDEDED]" />
                            )}
                        </div>
                    ))}
                    <div className="relative w-full">
                        <p className={`text-[14px] ${review ? "" : "line-clamp-5 blur-sm"} overflow-hidden overflow-ellipsis `}>
                            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                        </p>
                        {!review ? (
                            <div className=" flex w-full h-[105px] absolute top-0 justify-center items-center cursor-pointer">
                                {/* absolute top-[30%] left-[10%] */}
                                <p
                                    className="text-[14px]"
                                    onClick={showReview}
                                >
                                    이 리뷰에는 스포일러가 포함되어있습니다.
                                </p>
                                <NextButton />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div
                        className="text-right text-[#2CBDE4] text-[14px] mt-[8px] cursor-pointer "
                        onClick={showReview}
                    >
                        {review ? <p className="text-right">접기</p> : <p>펼치기</p>}
                    </div>
                </div>
            </div>
            <div className="p-24 flex justify-end pt-[12px] pb-[12px] text-left">
                {!like ? (
                    <div
                        className="flex items-center"
                        onClick={likeHandler}
                    >
                        <LikeButton className="cursor-pointer" />
                        <p className="w-[60px] ml-[8px] text-[14px] text-[#959595]">1</p>
                    </div>
                ) : (
                    <div
                        className="flex items-center"
                        onClick={likeHandler}
                    >
                        <UnLikeButton className="cursor-pointer" />
                        <p className="w-[60px] ml-[8px] text-[14px] text-[#959595]">1</p>
                    </div>
                )}

                <div
                    className="flex items-center "
                    onClick={showAllComment}
                >
                    <ChatButton className="cursor-pointer" />
                    <p className="w-[60px] ml-[8px] text-[14px] text-[#959595]">1</p>
                </div>
            </div>
            {!comments ? <Comments /> : ""}
        </section>
    );
};

export default Review;

//       {!comments ? (
// ) : (
//     <div>
//         <div className="p-24 flex justify-end  pt-[12px] pb-[12px] b">
//             <div
//                 className="flex items-center"
//                 onClick={likeHandler}
//             >
//                 <LikeButton className="cursor-pointer" />
//                 <p className="w-[60px] ml-[8px] text-[14px] text-[#959595]">1</p>
//             </div>
//             <div
//                 className="flex items-center "
//                 onClick={showAllComment}
//             >
//                 <ChatButton className="cursor-pointer" />
//                 <p className="w-[60px] ml-[8px] text-[14px] text-[#959595]">1</p>
//             </div>
//         </div>
//     </div>
// )}
