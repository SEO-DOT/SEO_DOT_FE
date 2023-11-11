import React, { useState } from "react";
import { ReactComponent as ScoreButton } from "../../assets/images/detailPage/anchor.svg";
import { ReactComponent as FillScoreButton } from "../../assets/images/detailPage/anchor-fill.svg";
import { ReactComponent as CheckButton } from "../../assets/images/cartPage/check-circle.svg";
import { ReactComponent as FillCheckButton } from "../../assets/images/cartPage/check-circle-fill.svg";
import { ReactComponent as UpButton } from "../../assets/images/detailPage/chevron-up.svg";
import { ReactComponent as DownButton } from "../../assets/images/detailPage/chevron-down.svg";
import { ReactComponent as LikeButton } from "../../assets/images/detailPage/like.svg";
import { ReactComponent as UnLikeButton } from "../../assets/images/detailPage/unlike.svg";
import { ReactComponent as ChatButton } from "../../assets/images/detailPage/chat-alt.svg";
import { ReactComponent as CommentButton } from "../../assets/images/detailPage/return-down-forward-outline.svg";
import { ReactComponent as NextButton } from "../../assets/images/detailPage/chevron-right-small-circle.svg";
interface ReviewProps {
    score: number;
    onRatingChange: (score: number) => void;
}

const Review: React.FC<ReviewProps> = ({ score, onRatingChange }) => {
    const [ratingValue, setRatingValue] = useState(0);
    const [review, setReview] = useState(false);
    const [comment, setComment] = useState(false);

    const showReview = () => {
        setReview(!review);
    };

    const showAllComment = () => {
        setComment(!comment);
    };

    const getRating = (e: any) => {
        const dataValue = Number(e.target.dataset.value);
        // const targetList = e.target.parentNode.childNodes;

        // for (let i = 0; i < targetList.length; i++) {
        //     if (i < dataValue) {
        //         targetList[i].style.color = "red";
        //     } else {
        //         targetList[i].style.color = "";
        //     }
        // }
        setRatingValue(dataValue);
    };
    console.log(ratingValue);

    const chatHandler = () => {
        console.log("asdd");
    };

    const likeHandler = () => {
        console.log("1234");
    };

    return (
        <div className="p-24 text-left bg-[#F8F8F8] pb-[136px] pt-[32px]">
            <h3 className="text-[24px] font-[600] mt-[32px] mb-[20px]">리뷰</h3>
            <div className="flex justify-center items-center">
                {[1, 2, 3, 4, 5].map((value) => (
                    <div
                        key={value}
                        className="inline-block mr-[4px]"
                    >
                        {score >= value ? <FillScoreButton className="w-[28px] h-[28px]" /> : <ScoreButton className="w-[28px] h-[28px]" />}
                    </div>
                ))}
                <p className="ml-[12px] text-[24px] font-600">{score}</p>
                <span>/5.0</span>
            </div>
            <p className="mt-[40px] font-[700]">리뷰 작성</p>

            {[1, 2, 3, 4, 5].map((value) => (
                <div
                    key={value}
                    className="inline-block mt-[12px] mb-[12px]"
                >
                    {ratingValue >= value ? (
                        <FillScoreButton
                            data-value={value}
                            onClick={getRating}
                            className="w-[28px] h-[28px]"
                        />
                    ) : (
                        <ScoreButton
                            data-value={value}
                            onClick={getRating}
                            className="w-[28px] h-[28px]"
                        />
                    )}
                </div>
            ))}
            <div className="w-full h-auto border-[1px] border-[#767676] rounded-[4px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
                <textarea
                    placeholder="내용을 5자 이상 입력해 주세요. 주제와 무관한 댓글, 악플, 배송문의 등의 글은 임의 삭제될 수 있습니다."
                    id="content"
                    name="content"
                    spellCheck="false"
                    className="w-full h-[120px] bg-[#f8f8f8] resize-none"
                    // value={inputForm.content}
                    // onChange={handleChange}
                />
                <p className="w-full text-right">50/150자</p>
                {/* <p>{inputForm.content.length}/500</p> */}
            </div>
            <div className="flex items-center ">
                <CheckButton className="mt-[12px] mb-[12px] mr-[4px]" />
                <p>스포일러 포함</p>
            </div>
            <button className="w-full pt-[15px] pb-[14px] bg-[#7ECEE9] rounded-[4px] text-[#ffffff] mb-[40px]">등록</button>
            <div>
                <button className="pt-[7px] pr-[10px] pb-[7px] pl-[10px] border-[1px] border-[#5EBAD9] rounded-[26px] text-[14px] text-[#5EBAD9] mr-[8px] ">
                    최신순
                </button>
                <button className="pt-[7px] pr-[10px] pb-[7px] pl-[10px] border-[1px] border-[#767676] rounded-[26px] text-[14px] text-[#767676]">
                    공감순
                </button>
            </div>
            <section className="mt-[12px]">
                <div className="text-[12px]">
                    <span className="mr-[8px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] bg-[#E1E6EF] rounded-[4px]">구매자</span>
                    <span className="border-r-[1px] mr-[8px] pr-[8px] border-[#767676]">닉네임</span>
                    <span className="border-r-[1px] mr-[8px] pr-[8px] border-[#767676]">날짜</span>
                    <span className="text-[#969696]">신고/차단</span>
                </div>
                <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div
                            key={value}
                            className="inline-block mt-[8px]"
                        >
                            {/* {reviewScore >= value ? ( */}
                            {5 >= value ? (
                                <FillScoreButton className="w-[18.2px] h-[18.2px]" />
                            ) : (
                                <ScoreButton className="w-[18.2px] h-[18.2px]" />
                            )}
                        </div>
                    ))}
                    <div className="relative w-full">
                        <p className={`text-[14px] ${review ? "" : "line-clamp-3 blur-sm"} overflow-hidden overflow-ellipsis `}>
                            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                        </p>
                        {!review ? (
                            <div className=" flex w-full h-[63px] absolute top-0 justify-center items-center">
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
                    <p
                        className="text-[#767676] flex mt-[8px] text-[12px]"
                        onClick={showReview}
                    >
                        {review ? (
                            <>
                                <p>접기</p>
                                <UpButton />
                            </>
                        ) : (
                            <>
                                <p>펼치기</p>
                                <DownButton className="w-[16px]" />
                            </>
                        )}
                    </p>
                    {!comment ? (
                        <div className="flex justify-end border-b-[1px] pb-[12px] border-[#767676]">
                            <div
                                className="flex items-center"
                                onClick={likeHandler}
                            >
                                <LikeButton />
                                <p className="mr-[30px] ml-[8px] text-[12px]">1</p>
                            </div>
                            <div
                                className="flex items-center "
                                onClick={showAllComment}
                            >
                                <ChatButton />
                                <p className="mr-[30px] ml-[8px] text-[12px]">1</p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-end border-b-[8px] pb-[12px] border-[#E8E8E8]">
                                <div
                                    className="flex items-center"
                                    onClick={likeHandler}
                                >
                                    <LikeButton />
                                    <p className="mr-[30px] ml-[8px] text-[12px]">ㅏ우낲ㅊㅁ우ㅑㅊ</p>
                                </div>
                                <div
                                    className="flex items-center "
                                    onClick={showAllComment}
                                >
                                    <ChatButton />
                                    <p className="mr-[30px] ml-[8px] text-[12px]">마ㅜㅍㅁ닢너ㅝ</p>
                                </div>
                            </div>
                            <div className="w-full h-auto border-[1px] border-[#767676] rounded-[4px] mt-[12px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
                                <textarea
                                    placeholder="150자 이내로 입력해주세요."
                                    id="content"
                                    name="content"
                                    spellCheck="false"
                                    className="w-full h-[100px] bg-[#f8f8f8] resize-none"
                                    // value={inputForm.content}
                                    // onChange={handleChange}
                                />
                                <div className="flex justify-end items-center">
                                    <p className="mr-[4px] text-[12px]">50/150자</p>

                                    <button className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] bg-[#767676] rounded-[4px] text-[12px] text-[#ffffff] mr-[4px]">
                                        취소
                                    </button>
                                    <button className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] bg-[#7ECEE9] rounded-[4px] text-[12px] text-[#ffffff]">
                                        등록
                                    </button>
                                    {/* <p>{inputForm.content.length}/500</p> */}
                                </div>
                            </div>
                            <div className="m-[12px] pb-[12px] border-b-[1px]">
                                <div className="flex text-[12px]">
                                    <CommentButton className="mr-[8px]" />
                                    <p className="border-r-[1px] mr-[8px] pr-[8px] border-[#767676]">닉네임</p>
                                    <p className="border-r-[1px] mr-[8px] pr-[8px] border-[#767676]">날짜</p>
                                    <p className="text-[#969696]">신고/차단</p>
                                </div>
                                <p className="text-[14px] mt-[8px]">
                                    내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                                    들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                                </p>
                            </div>
                            <p className="w-full flex justify-center pt-[9px] pb-[9px] border-[1px] border-[#000000]">
                                더보기 1/23
                                <DownButton />
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Review;
