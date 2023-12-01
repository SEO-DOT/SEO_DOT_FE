import React, { useEffect, useState } from "react";
import bookData from "../data.json";
import BookInformation from "../components/detailPage/BookInformation";
import Recommand from "../components/detailPage/Recommand";
import Review from "../components/detailPage/Review";
import Transfer from "../components/detailPage/Transfer";
import axios from "axios";
import BookDetail from "../components/detailPage/BookDetail";
import Reviews from "../components/detailPage/Reviews";
import EditReview from "../components/detailPage/EditReview";
import { ReactComponent as UpButton } from "../assets/images/cartPage/chevron-up.svg";
import OrderStatus from "../components/detailPage/OrderStatus";
import PurchaseWindow from "../components/detailPage/PurchaseWindow";

const DetailPage = () => {
    const [parsedBookData, setParsedBookData] = useState<Book>(bookData);
    const [clickedTab, setClickedTab] = useState(0); //router 사용하기
    const [challenges, setChallenges] = useState(0);
    const [editReview, setEditReview] = useState(false);
    const [orderButton, setOrderButton] = useState(false);
    const [status, setStatus] = useState("");

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

    // const getDetail = async () => {
    //     try {
    //         const response = await axios.get(`http://13.124.86.39:8080/api/books/3`, {
    //             headers: {
    //                 Authorization:
    //                     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqa2prOTUyMkBuYXZlci5jb20iLCJhdXRoIjoiVVNFUiIsIk9hdXRoSWQiOnsib2F1dGhTZXJ2ZXJJZCI6IjMxNzIzMjI3ODQiLCJwbGF0Zm9ybSI6IktBS0FPIn0sImV4cCI6MjAwMDgxODYyMywiaWF0IjoxNzAwODE4NjIzfQ.dThL4B7Itis-jscylr7j15Xz6usvYZypEsUbWoURY9A",
    //             },
    //         });
    //         console.log(response);
    //     } catch (error) {
    //         console.log("error: ", error);
    //     }
    // };

    // useEffect(() => {
    //     getDetail();
    // }, []);

    // const orderButtonHandler = () => {
    //     setOrderButton(true);
    // };

    // const handleEditReview = () => {
    //     <EditReview />;
    // };

    // useEffect(() => {
    //     if (clickedTab === 0) {
    //         console.log(0);
    //         // <BookInformation />;
    //     }
    //     if (clickedTab === 1) {
    //         console.log(1);
    //         // <Recommand />;
    //     }
    //     if (clickedTab === 2) {
    //         console.log(2);
    //         // <Review />;
    //         // 빈배열을 주는 이유: 아래 내용을 빈배열로 만들고 새로운 내용 넣음
    //     }
    //     if (clickedTab === 3) {
    //         console.log(3);
    //         // <Transfer />;
    //         // 빈배열을 주는 이유: 아래 내용을 빈배열로 만들고 새로운 내용 넣음
    //     }
    // }, []);

    useEffect(() => {
        setParsedBookData(bookData);
    }, []);

    return (
        <>
            {/* {editReview ? (
                <EditReview />
            ) : ( */}
            <section>
                <BookDetail
                    parsedBookData={parsedBookData}
                    setParsedBookData={setParsedBookData}
                />
                <div className=" text-left flex justify-between ">
                    {[0, 1, 2, 3].map((tab) => (
                        <div
                            key={tab}
                            className={`flex justify-center items-center pt-[28px] pb-[12px] font-[700] text-[#959595] border-b-[1px] cursor-pointer ${
                                clickedTab === tab ? "border-b-[3px] border-[#000000] text-[#000000]" : "tabs"
                            }`}
                            style={{ flex: 1 }} // 이 부분을 추가
                            onClick={() => setClickedTab(tab)}
                        >
                            {tabName[tab]}
                        </div>
                    ))}
                </div>

                <div>
                    <BookInformation />
                    <Recommand />
                    <Reviews
                        score={parsedBookData.score}
                        onRatingChange={handleRatingChange}
                    />
                    <Transfer />
                </div>
                {!orderButton ? (
                    <OrderStatus
                        orderButton={orderButton}
                        setOrderButton={setOrderButton}
                        status={"구매하기"}
                    />
                ) : (
                    <PurchaseWindow
                        orderButton={orderButton}
                        setOrderButton={setOrderButton}
                    />
                )}
            </section>
            {/* )} */}
        </>
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