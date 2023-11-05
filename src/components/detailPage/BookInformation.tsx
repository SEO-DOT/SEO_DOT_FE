import React, { useState } from "react";
import { ReactComponent as DownButton } from "../../assets/images/detailPage/chevron-down.svg";
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

    return (
        <div>
            <div className="p-24 text-left bg-[#F8F8F8] pb-[136px]">
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
                    <p>
                        책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글
                        타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                        들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                        들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                        들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이
                        들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이
                        들어갑니다.책 소개글 타이틀이 들어갑니다.책 소개글이 들어갑니다.책 소개글 타이틀이 들어갑니다.
                    </p>
                    <div className="w-full h-[40px] bg-white flex justify-center items-center">
                        <DownButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInformation;
