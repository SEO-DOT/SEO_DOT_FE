import React from "react";
import { ReactComponent as ShareButton } from "../../assets/images/detailPage/share-android.svg";

interface Props {
    parsedBookData: Book;
    setParsedBookData: React.Dispatch<React.SetStateAction<Book>>;
}

const BookDetail = ({ parsedBookData, setParsedBookData }: Props) => {
    const shareHandler = () => {
        alert("공유하시겠습니까?");
    };

    return (
        <>
            <div className="w-50 h-[375px] flex justify-center items-center">
                <img
                    src={parsedBookData.image}
                    alt="bookImage"
                    className="w-full sm:w-[220px] h-full sm:h-[308px]"
                />
            </div>
            <div className="p-24 mt-[20px] text-left ">
                <div className="flex justify-between">
                    <div>
                        {parsedBookData.keywordList.map((keyword, index) => (
                            <span
                                key={index}
                                className="pr-[8px] pl-[8px] pt-[4px] pb-[4px] mr-[4px] border border-[#EDEDED] rounded-[4px] text-[#959595] text-[12px] cursor-pointer"
                            >
                                {keyword}
                            </span>
                        ))}
                        <h3 className="text-[20px] font-[600] pt-[12px]">{parsedBookData.title}</h3>
                    </div>
                    <ShareButton
                        className="cursor-pointer"
                        onClick={shareHandler}
                    />
                </div>
                <p className="font-[500] mt-[6px] mb-[12px]">{parsedBookData.author}</p>
                <span className="text-[#797979] text-[12px] pr-[8px] border-r-[1px] border-[#797979] ">{parsedBookData.publisher}</span>
                <span className="text-[#797979] text-[12px] pl-[8px]">{parsedBookData.publicationDate}</span>
                <div className="pt-[12px] pb-[12px] border-b-[1px] flex justify-start items-center">
                    <span className="text-[#5EBAD9] text-[20px] font-[700] pr-[6px]">{parsedBookData.discountRate}%</span>
                    <span className="text-[20px] font-[500] pr-[4pxx]">{parsedBookData.discountPrice}원</span>
                    <span className="line-through pl-[4px] text-[16px] text-[#C1C1C1] font-[400]">{parsedBookData.price}원</span>
                </div>
            </div>
            <div className="p-24 flex justify-between items-center pt-[12px] pb-[28px] border-b-[12px] border-[#F4F4F4]  ">
                <span className="font-[500] text-[#3E3E3E] text-[16px]">배송안내</span>
                <div className="text-[#797979] text-right">
                    <p>무료배송</p>
                    <p>11월 3일 출고 예정</p>
                </div>
            </div>
        </>
    );
};

export default BookDetail;
