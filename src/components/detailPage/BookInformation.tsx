import React, { useState } from "react";
import bookData from "../../data.json";
import "./detail.css";

interface Book {
    bookId: number;
    image: string;
    title: string;
    status: string;
    stock: number;
    views: number;
    isbn: string;
    author: string;
    price: number;
    discountRate: number;
    discountPrice: number;
    score: number;
    bookmark: boolean;
    description: string;
    publicationDate: string;
    publisher: string;
    keywordList: string[];
    categoryList: string[];
}

const BookInformation = () => {
    const [parsedBookData, setParsedBookData] = useState<Book>(bookData);
    const [showDetail, setShowDetail] = useState(false);
    const [moreView, setMoreView] = useState(false);

    const showMoreView = () => {
        setMoreView(!moreView);
    };

    const toggleShowFull = () => {
        setShowDetail(!showDetail);
    };

    return (
        <div>
            <div className="p-24 text-left pb-[28px]">
                <img
                    src="https://contents.kyobobook.co.kr/sih/fit-in/814x0/dtl/illustrate/983/i9791167763983.jpg"
                    alt="book-information"
                    className="w-full h-full mt-[28px] mb-[28px] rounded-custom"
                />
                <h3 className="text-[20px] font-[600] pt-[28px] pb-[16px]">책정보</h3>
                <h5 className="text-[16px] font-[600] ">이 책이 속한 분야</h5>
                {parsedBookData.categoryList.map((category, index) => (
                    <span
                        key={index}
                        className="text-[12px] text-[#797979]"
                    >
                        {category} {index < 3 && <span> &gt; </span>}
                    </span>
                ))}
                <div className="mt-[28px] pt-[28px] pb-[28px] border-t-[1px] text-[12px] ">
                    <div className="flex">
                        <p className="w-40 text-[#797979]">ISBN</p>
                        <p>{parsedBookData.isbn}</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40 text-[#797979]">발행(출시)일자</p>
                        <p>{parsedBookData.publicationDate}</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40 text-[#797979]">쪽수</p>
                        <p>00쪽</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40 text-[#797979]">크기</p>
                        <p>160*225mm/270g</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40 text-[#797979]">총권수</p>
                        <p>1권</p>
                    </div>
                </div>
                <div className="border-t-[1px]">
                    <h5 className="font-[600] pt-[28px] pb-[12px] text-[16px]">책 소개</h5>
                    {showDetail ? (
                        <div>
                            <p>
                                책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.
                            </p>
                            <p
                                className="text-right mt-[12px] text-[#2CBDE4] font-[500] cursor-pointer"
                                onClick={toggleShowFull}
                            >
                                접기
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="line-clamp-5 overflow-hidden overflow-ellipsis">
                                책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책
                                소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                                들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                                들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                                타이틀이 들어갑니다.
                            </p>
                            <p
                                className="text-right mt-[12px] text-[#2CBDE4] font-[500] cursor-pointer"
                                onClick={toggleShowFull}
                            >
                                펼치기
                            </p>
                        </div>
                    )}
                    <h5 className="font-[600] pt-[28px] pb-[12px] text-[16px]">이 책이 속한 분야</h5>
                    {moreView ? (
                        <div>
                            <p>
                                근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?
                            </p>
                            <p
                                className="text-right mt-[12px] text-[#2CBDE4] font-[500] cursor-pointer"
                                onClick={showMoreView}
                            >
                                접기
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="line-clamp-5 overflow-hidden overflow-ellipsis">
                                근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데
                                이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거 있었나요?근데 이거
                                있었나요?근데 이거 있었나요?
                            </p>
                            <p
                                className="text-right mt-[12px] text-[#2CBDE4] font-[500] cursor-pointer"
                                onClick={showMoreView}
                            >
                                펼치기
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookInformation;