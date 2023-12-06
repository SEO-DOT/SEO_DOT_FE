import React from "react";

import { ReactComponent as LineButton } from "../../assets/images/detailPage/Line 1.svg";
import { ReactComponent as CommentButton } from "../../assets/images/detailPage/return-down-forward-outline.svg";

const Comments = () => {
    return (
        <div className="border-t-[1px]">
            <div className="p-24 text-left ">
                <div className="w-full h-auto border-[1px] border-[#C1C1C1] rounded-[4px] mt-[12px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
                    <textarea
                        placeholder="150자 이내로 입력해주세요."
                        id="content"
                        name="content"
                        spellCheck="false"
                        className="w-full h-[100px] resize-none"
                        // value={inputForm.content}
                        // onChange={handleChange}
                    />
                    <div className="flex justify-end items-center">
                        <p className="mr-[4px] text-[12px]">
                            50
                            <span className="text-[#C1C1C1]">/150자</span>
                        </p>

                        <button className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] bg-[#DFDFDF] rounded-[4px] text-[12px] text-[#959595] mr-[4px]">
                            취소
                        </button>
                        <button className="pt-[9px] pr-[17px] pb-[9px] pl-[17px] bg-[#2CBDE4] rounded-[4px] text-[12px] text-[#ffffff]">
                            등록
                        </button>
                        {/* <p>{inputForm.content.length}/500</p> */}
                    </div>
                </div>
                <section className="mt-[12px] bg-[#F9F9F9] rounded-[12px] p-[12px]">
                    <div className="h-[12px] flex text-[12px] items-center ">
                        <CommentButton className="mr-[8px]" />
                        <p className="pr-[8px]">닉네임</p>
                        <LineButton />
                        <p className="pl-[8px] pr-[8px] text-[#959595]">날짜</p>
                        <LineButton />
                        <p className="pl-[8px] text-[#C1C1C1] text-[10px]">신고/차단</p>
                    </div>
                    <p className="text-[14px] mt-[8px]">
                        내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
                        들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
                    </p>
                </section>

                {/* <p className="w-full flex justify-center pt-[9px] pb-[9px] border-[1px] border-[#000000]">
                    더보기 1/23
                    <DownButton />
                </p> */}
            </div>
        </div>
    );
};

export default Comments;
