import React, { useState, useEffect } from "react";
import { ReactComponent as AnchorIcon } from "../../../assets/images/myPage/anchor.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/myPage/heart.svg";
import { ReactComponent as ChatIcon } from "../../../assets/images/myPage/chat-alt.svg";
import { instance } from "../../../api/api";
import BookImg from "../../../assets/images/myPage/Review_IMG.png";

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
      //console.log("response.data", response.data.data);
      return response.data;
    } catch (error) {
      console.error("mypage 조회 오류", error);
    }
  };

  useEffect(() => {
    getUserInfoReview();
  }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회

  useEffect(() => {
    if (reviewData.length > 0) {
      const selectedReviewLog = reviewData[0];

      // // 첫 번째 책 정보 가져오기
      // const firstBook =
      //   selectedReviewLog.book.length > 0
      //     ? selectedReviewLog.book[0]
      //     : {
      //         bookTitle: "",
      //         bookImage: "",
      //         author: "",
      //         publisher: "",
      //       };
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
      className="px-[24px] pt-[20px] w-full h-screen bg-[#ff3e3e]"
      style={{ maxHeight: "100vh", overflowY: "scroll" }}
    >
      {reviewData.length > 0 ? (
        reviewData.map((review) => {
          return (
            <div
              key={review.reviewId}
              className="flex p-[16px] rounded-[20px] w-full h-[200px] bg-[#F2F3F4]
      shadow-[8px_8px_8px_0_rgba(0,0,0,0.08)] mb-[12px]
      "
            >
              <img
                className="flex-initial mr-[15px] w-[120px] h-full"
                src={review.book.bookImage} // 이미지 파일 경로를 지정
                alt="reviewBook"
              />
              <div className=" flex-cul flex-1 font-medium text-justify h-full overflow-hidden">
                <p className="items-center h-[19px] whitespace-nowrap mb-[8px] text-[16px]  text-black">
                  {review.book.bookTitle}
                </p>
                <div
                  className="mb-[8px] h-[14px] flex text-[12px] text-[#767676] items-center"
                  style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  <p>{review.book.author}</p>
                  <p>{review.book.publisher}</p>
                </div>
                <p className="whitespace-nowrap h-[14px] mb-[8px] text-[12px] text-[#767676]">
                  {review.nickname}
                </p>
                <p className="text-[12px] text-[#000] h-[64px] overflow-hidden">
                  {review.contents}
                </p>
                <div className="mt-[8px] flex items-center justify-between first-letter:mt-[8px] w-[160px] h-[16px]">
                  <div className="flex items-center">
                    <AnchorIcon className="w-[16px] h-[16px]" />
                    <p className="text-[12px] text-[#767676]">{review.score}</p>
                  </div>
                  <div className="flex items-center">
                    <HeartIcon className="w-[12px] h-[10px]" />
                    <p className="text-[12px] text-[#767676]">{review.likes}</p>
                  </div>
                  <div className="flex items-center">
                    <ChatIcon className="w-[16px] h-[16px]" />
                    <p className="text-[12px] text-[#767676]">
                      {review.commentCount}
                    </p>
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
      {/* <div
        className="flex p-[16px] rounded-[20px] w-full h-[200px] bg-[#F2F3F4]
      shadow-[8px_8px_8px_0_rgba(0,0,0,0.08)]
      "
      >
        <img
          className="flex-initial mr-[15px] w-[120px] h-full"
          src={BookImg} // 이미지 파일 경로를 지정
          alt="reviewBook"
        />
        <div className=" flex-cul flex-1 font-medium text-justify h-full overflow-hidden">
          <p className="items-center h-[19px] whitespace-nowrap mb-[8px] text-[16px]  text-black">
            책제목이 들어갑니다eeeegeee
          </p>
          <div
            className="mb-[8px] h-[14px] flex text-[12px] text-[#767676] items-center"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <p>작가입니다...</p>
            <p>출판사가 들어갑...</p>
          </div>
          <p className="whitespace-nowrap h-[14px] mb-[8px] text-[12px] text-[#767676]">
            닉네임(아이디)
          </p>
          <p className="text-[12px] text-[#000] h-[64px] overflow-hidden">
            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
          </p>
          <div className="mt-[8px] flex items-center justify-between first-letter:mt-[8px] w-[160px] h-[16px]">
            <div className="flex items-center">
              <AnchorIcon className="w-[16px] h-[16px]" />
              <p className="text-[12px] text-[#767676]">5.0</p>
            </div>
            <div className="flex items-center">
              <HeartIcon className="w-[12px] h-[10px]" />
              <p className="text-[12px] text-[#767676]">100</p>
            </div>
            <div className="flex items-center">
              <ChatIcon className="w-[16px] h-[16px]" />
              <p className="text-[12px] text-[#767676]">100</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Review;
