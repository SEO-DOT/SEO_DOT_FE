import React, { useState } from "react";
import { ReactComponent as DownButton } from "../../assets/images/detailPage/chevron-down.svg";
import { ReactComponent as UpButton } from "../../assets/images/detailPage/chevron-up.svg";
import bookData from "../../data.json";

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
            <div className="p-24 text-left bg-[#F8F8F8] pb-[136px]">
                {moreView ? (
                    <div>
                        <img
                            src="https://contents.kyobobook.co.kr/sih/fit-in/814x0/dtl/illustrate/983/i9791167763983.jpg"
                            alt="book-information"
                            className="w-full h-full pt-[32px]"
                        />
                        <div
                            className="w-full h-[40px] bg-white flex justify-center items-center"
                            onClick={showMoreView}
                        >
                            <UpButton />
                        </div>
                    </div>
                ) : (
                    <div>
                        <img
                            src="https://contents.kyobobook.co.kr/sih/fit-in/814x0/dtl/illustrate/983/i9791167763983.jpg"
                            alt="book-information"
                            className="w-full h-[400px] line-clamp-5 overflow-hidden overflow-ellipsis pt-[32px]"
                        />
                        <div
                            className="w-full h-[40px] bg-white flex justify-center items-center"
                            onClick={showMoreView}
                        >
                            <DownButton />
                        </div>
                    </div>
                )}

                <h3 className="text-[24px] font-[600] pt-[32px] pb-[20px]">책정보</h3>
                <h5 className="font-[600]">이 책이 속한 분야</h5>
                {parsedBookData.categoryList.map((category, index) => (
                    <span
                        key={index}
                        className="text-[12px]"
                    >
                        {category} {index < 3 && <span>&gt;</span>}
                    </span>
                ))}
                <div className="mt-[24px] pb-[32px]">
                    <div className="flex">
                        <p className="w-40">ISBN</p>
                        <p>{parsedBookData.isbn}</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40">발행(출시)일자</p>
                        <p>{parsedBookData.publicationDate}</p>
                    </div>
                    <div className="flex mt-[16px]">
                        <p className="w-40">총권수</p>
                        <p>1권</p>
                    </div>
                </div>
                <div className="border-[1px]">
                    <h5 className="font-[600] pt-[32px] pb-[32px]">책 소개 타이틀</h5>

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
                            <div
                                className="w-full h-[40px] bg-white flex justify-center items-center"
                                onClick={toggleShowFull}
                            >
                                <UpButton />
                            </div>
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
                            <div
                                className="w-full h-[40px] bg-white flex justify-center items-center"
                                onClick={toggleShowFull}
                            >
                                <DownButton />
                            </div>
                        </div>
                    )}
                    {/* {!showFull && (
                        
                    )} */}
                    {/* <div className="w-full h-[40px] bg-white flex justify-center items-center">
                        <DownButton />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookInformation;
