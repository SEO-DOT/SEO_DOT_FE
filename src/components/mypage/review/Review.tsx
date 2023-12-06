import React, { useState, useEffect } from "react";
import { ReactComponent as HeartIcon } from "../../../assets/images/myPage/heart.svg";
import { ReactComponent as ChatIcon } from "../../../assets/images/myPage/chat-alt.svg";
import { ReactComponent as GrayStarIcon } from "../../../assets/images/myPage/star_gray.svg";
import { ReactComponent as FillStarIcon } from "../../../assets/images/myPage/star_blue.svg";
import instance from "../../../api/api";

//리뷰에 구매자 파악하려면 구매 여부 받아와야함.
export interface ReviewData {
  reviewId: string;
  nickname: string;
  contents: string;
  createdDate: Date;
  likes: number; // 수정: 좋아요 수는 숫자로 예상
  liked: boolean;
  score: number; // 수정: 평점은 숫자로 예상
  commentCount: number;
  book: {
    bookTitle: string;
    bookImage: string;
    author: string;
    publisher: string;
  };
  hasNextPage: boolean;
}

const Review = () => {
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [reviewInfo, setReviewInfo] = useState<ReviewData>({
    reviewId: "",
    nickname: "",
    contents: "",
    createdDate: new Date(), // 수정: 기본값으로 현재 날짜를 사용하거나 적절한 초기값 설정
    likes: 0, // 수정: 초기값을 숫자로 설정
    liked: false, // 수정: 초기값을 불리언으로 설정
    score: 0, // 수정: 초기값을 숫자로 설정
    commentCount: 0,
    book: {
      bookTitle: "",
      bookImage: "",
      author: "",
      publisher: "",
    },
    hasNextPage: false, // 수정: 초기값을 불리언으로 설정
  });

  const getUserInfoReview = async () => {
    try {
      const response = await instance.get(
        `/api/mypage/reviews?page=1&per=20&sort=new`
      );
      const reviewData = response.data.data;
      setReviewData(reviewData);
      console.log("리뷰조회data", response.data.data);
      return response.data;
    } catch (error) {
      console.error("mypage 리뷰조회 오류", error);
    }
  };

  useEffect(() => {
    getUserInfoReview();
  }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회

  useEffect(() => {
    if (reviewData.length > 0) {
      const selectedReviewLog = reviewData[0];

      setReviewInfo({
        reviewId: selectedReviewLog.reviewId,
        nickname: selectedReviewLog.nickname,
        contents: selectedReviewLog.contents,
        createdDate: selectedReviewLog.createdDate,
        likes: selectedReviewLog.likes,
        liked: selectedReviewLog.liked,
        score: selectedReviewLog.score, // 수정: 초기값을 숫자로 설정
        commentCount: selectedReviewLog.commentCount,
        book: {
          bookTitle: selectedReviewLog.book.bookTitle,
          bookImage: selectedReviewLog.book.bookImage,
          author: selectedReviewLog.book.author,
          publisher: selectedReviewLog.book.publisher,
        },
        hasNextPage: selectedReviewLog.hasNextPage, // 수정: 초기값을 불리언으로 설정
      });
    }
  }, [reviewData]);

  console.log("리뷰 목록", reviewInfo);
  //onsole.log("도서정보", reviewBookInfo);

  return (
    <section
      className="px-[24px] pt-[20px] w-full h-screen bg-[#F9F9F9]"
      style={{ maxHeight: "100vh", overflowY: "scroll" }}
    >
      {reviewData.length > 0 ? (
        reviewData.map((review) => {
          return (
            <div
              key={review.reviewId}
              className="flex p-[16px] rounded-[20px] w-full h-[200px] bg-[#fff]
      shadow-[0px_0px_20px_0_rgba(0,0,0,0.08)] mb-[12px]
      "
            >
              <img
                className="flex-initial rounded-[10px] mr-[15px] w-[120px] h-full"
                src={review.book.bookImage} // 이미지 파일 경로를 지정
                alt="reviewBook"
              />
              <div className=" flex-cul flex-1 font-medium text-justify h-full overflow-hidden">
                <p className="items-center h-[19px] whitespace-nowrap mb-[8px] text-[14px]  text-black">
                  {review.book.bookTitle}
                </p>
                <div
                  className="mb-[6px] h-[14px] flex text-[12px] text-[#767676] items-center"
                  style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  <p>{review.book.author}</p>
                  <div className="mx-[8px] w-[0.5px] h-[12px] bg-[#959595]"></div>
                  <p>{review.book.publisher}</p>
                </div>
                <p className="whitespace-nowrap h-[14px] mb-[6px] text-[12px] text-[#959595]">
                  {review.nickname}
                </p>
                <div className=" w-[90px] h-[22px] py-[6px] flex items-center">
                  {[...Array(review.score)].map((_, index) => (
                    <div
                      key={index}
                      className="mt-[-4px] flex w-[16px] h-[16px] mr-1"
                    >
                      <FillStarIcon />
                    </div>
                  ))}
                  {[...Array(5 - review.score)].map((_, index) => (
                    <div
                      key={index}
                      className="mt-[-4px] flex w-[16px] h-[16px] mr-1"
                    >
                      <GrayStarIcon />
                    </div>
                  ))}
                </div>
                <p className="w-full h-[64px]  text-[10px]  text-[#000] overflow-hidden">
                  {review.contents}
                </p>
                <div className="flex items-center justify-between first-letter:mt-[8px] w-[160px] h-[16px]">
                  <div className="flex items-center">
                    <HeartIcon className="w-[14.4px] h-[12px] mr-[4.8px]" />
                    <div className="flex items-center mt-[-1px] h-[16px]">
                      <p className="  text-[12px] font-medium text-[#767676]">
                        {review.likes}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChatIcon className="w-[15px] h-[15px] mr-[5px]" />
                    <div className="flex items-center mt-[-1px] h-[16px]">
                      <p className="text-[12px] font-medium text-[#767676]">
                        {review.commentCount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>아직 쓴 리뷰가 없어요.</p>
        </div>
      )}
    </section>
  );
};

export default Review;
