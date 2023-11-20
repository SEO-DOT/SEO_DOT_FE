import React, { useEffect, useState } from "react";
import bookData from "../data.json";
import BookInformation from "../components/detailPage/BookInformation";
import Recommand from "../components/detailPage/Recommand";
import Review from "../components/detailPage/Review";
import Transfer from "../components/detailPage/Transfer";
import { ReactComponent as ShareButton } from "../assets/images/detailPage/share-android.svg";
import axios from "axios";
import { Book, CartBook } from "../types/data";

const DetailPage: React.FC = () => {
    const [product, setProduct] = useState<CartBook>({
        bookId: 0,
        image: "",
        title: "",
        price: 0,
        discountRate: 0,
        discountPrice: 0,
    });

    const [parsedBookData, setParsedBookData] = useState<Book>(bookData);

    const [clickedTab, setClickedTab] = useState(0); //router 사용하기
    const [challenges, setChallenges] = useState(0);

    const tabName: { [key: number]: string } = {
        0: "책정보",
        1: "추천도서",
        2: "리뷰",
        3: "교환/반품/품절",
    };

    const handleRatingChange = (score: number) => {
        console.log(`Selected score: ${score}`);
        // 여기에서 선택된 평점에 대한 처리를 수행하면 됩니다.
    };

    useEffect(() => {
        if (clickedTab === 0) {
            console.log(0);
            // <BookInformation />;
        }
        if (clickedTab === 1) {
            console.log(1);
            // <Recommand />;
        }
        if (clickedTab === 2) {
            console.log(2);
            // <Review />;
            // 빈배열을 주는 이유: 아래 내용을 빈배열로 만들고 새로운 내용 넣음
        }
        if (clickedTab === 3) {
            console.log(3);
            // <Transfer />;
            // 빈배열을 주는 이유: 아래 내용을 빈배열로 만들고 새로운 내용 넣음
        }
    }, []);

    useEffect(() => {
        setParsedBookData(bookData);
    }, []);

    useEffect(() => {
        console.log(product);
    }, [product]);

    // const getDetail = async () => {
    //     try {
    //         const response = await axios.get(`http://13.124.86.39:8080/api/books/3`);
    //         console.log(response);
    //     } catch (error) {
    //         console.log("error: ", error);
    //     }
    // };

    // useEffect(() => {
    //     getDetail();
    // }, []);

    return (
        <section>
            <div className="w-50 h-[340px] flex justify-center items-center border-[1px] border-black">
                <img
                    src={parsedBookData.image}
                    alt="bookImage"
                    className="w-full sm:w-60 h-full sm:h-80"
                />
            </div>
            <div className="p-24 mt-[20px] text-left border-b-[12px] border-[#D1D1D1]">
                <div className="flex justify-between">
                    <div>
                        {parsedBookData.keywordList.map((keyword, index) => (
                            <span
                                key={index}
                                className="pr-[8px] pl-[8px] pt-[2px] pb-[2px] mr-[4px] bg-[#E1E6EF] border rounded-[4px] text-[12px]"
                            >
                                {keyword}
                            </span>
                        ))}
                        <h3 className="text-[20px] font-[600]">{parsedBookData.title}</h3>
                    </div>
                    <ShareButton />
                </div>
                <p className="font-[600] mt-[12px]">{parsedBookData.author}</p>
                <span className="text-[#797979] text-[12px] pr-[8px] border-r-[1px] border-[#797979] ">{parsedBookData.publisher}</span>
                <span className="text-[#797979] text-[12px] pl-[8px]">{parsedBookData.publicationDate}</span>

                <div className="mt-[16px] mb-[16px] flex justify-center">
                    <div className="w-24 flex flex-col justify-center items-center border-r-[1px] text-[12px]">
                        <ShareButton />
                        <p>평점</p>
                        <p className="font-[600]">4.0</p>
                    </div>
                    <div className="w-24 flex flex-col justify-center items-center border-r-[1px] text-[12px]">
                        <ShareButton />
                        <p>북마크수</p>
                        <p className="font-[600]">11개</p>
                    </div>
                    <div className="w-24 flex flex-col justify-center items-center border-r-[1px] text-[12px]">
                        <ShareButton />
                        <p>리뷰수</p>
                        <p className="font-[600]">99+</p>
                    </div>
                    <div className="w-24 flex flex-col justify-center items-center text-[12px]">
                        <ShareButton />
                        <p>조회수</p>
                        <p className="font-[600]">22k</p>
                    </div>
                </div>
            </div>
            <div className="p-24 text-left border-b-[12px] border-[#D1D1D1] ">
                <div className="pt-[16px] pb-[16px] border-b-[1px]">
                    <span className="text-[#5EBAD9] text-[20px] font-[700]">{parsedBookData.discountRate}%</span>
                    <span className="text-[20px] font-[700]">{parsedBookData.discountPrice}원</span>
                    <span className="line-through">{parsedBookData.price}원</span>
                </div>
                <div className="flex justify-between mt-[12px]">
                    <span className="font-[700]">배송안내</span>
                    <span>무료배송</span>
                </div>
                <p className="text-right mb-[16px]">11월 3일 출고 예정</p>
            </div>
            <div className="p-24 text-left flex justify-between mt-[12px] mb-[12px]">
                {[0, 1, 2, 3].map((tab) => (
                    <div
                        key={tab}
                        className={clickedTab === tab ? "active-tabs" : "tabs"}
                        onClick={() => setClickedTab(tab)}
                    >
                        {tabName[tab]}
                    </div>
                ))}
            </div>
            <div>
                {/* {clickedTab === 0 && <BookInformation />}
                {clickedTab === 1 && <Recommand />}
                {clickedTab === 2 && (
                    <Review
                        score={parsedBookData.score}
                        onRatingChange={handleRatingChange}
                    />
                )}
                {clickedTab === 3 && <Transfer />} */}
                <BookInformation />
                <Recommand />
                <Review
                    score={parsedBookData.score}
                    onRatingChange={handleRatingChange}
                />
                <Transfer />
            </div>
        </section>
    );
};

export default DetailPage;

// const onClickCart = () => {
//     setProduct((prevProduct) => ({
//         ...prevProduct,
//         bookId: parsedBookData.bookId,
//         image: parsedBookData.image,
//         title: parsedBookData.title,
//         price: parsedBookData.price,
//         discountRate: parsedBookData.discountRate,
//         discountPrice: parsedBookData.discountPrice,
//     }));
// };

// const onClickBookMark = () => {
//     console.log("bookMark");
// };
// {/* <button
//                 className="w-40 h-12 bg-slate-400"
//                 onClick={onClickCart}
//             >
//                 cart
//             </button>
//             <button
//                 className="w-40 h-12 bg-slate-500"
//                 onClick={onClickBookMark}
//             >
//                 bookmark
//             </button> */}
