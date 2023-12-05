import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/images/main/arrow_right.svg";
import { getNewBook } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const NewBook = () => {
  const { data: newBooks } = useQuery({
    queryKey: ["newBooks"],
    queryFn: getNewBook,
  });
  // 카테고리 선택
  const [activeCategory, setActiveCategory] = useState<string>("소설");

  // 핸들러
  const handleCategoryClick = (category: any) => {
    if (activeCategory === category) {
      // 활성화 된 카테고리를 다시 클릭시 변화 X
      console.log(category);
      return;
    }
    // 다른 카테고리를 클릭시, 활성화 상태 변경
    setActiveCategory(category);
    console.log(category);
  };

  const selectedCategoryBooks = newBooks
    ?.find((booksCategory: any) => booksCategory.category === activeCategory)
    ?.bookList[0].slice(0, 5);
  // find 뒤에 map을 사용해서 안나왔던 것.

  return (
    <div>
      {/* Header */}
      <div className=" pt-[30px] pb-[20px] border-t-[10px] border-[#F9F9F9]">
        <div className="flex justify-between mx-6">
          <div className="text-2xl font-semibold">신간도서</div>
          <div className="flex bottom-0 items-end">
            <div className="flex">
              <p className="text-xs">전체보기</p>
              <img src={Arrow} className="w-[12px]" alt="화살표" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="overflow-hidden whitespace-nowrap mx-6 mt-[20px]">
        <Swiper
          spaceBetween={10} // 사이 간격
          slidesPerView={3.3} // 한번에 보여줄 갯수
        >
          {newBooks?.map((books: any, index: number) => (
            <SwiperSlide
              className={`px-[10px] py-[7px] border-[2px] rounded-[26px] ${
                books.category === activeCategory ? "active-category" : ""
              }`}
              key={index}
              onClick={() => handleCategoryClick(books.category)}
            >
              {books.category}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* List */}
      <div>
        {selectedCategoryBooks &&
          selectedCategoryBooks.map((book: any) => (
            <div
              className="flex justify-between gap-[16px] pt-[30px] pb-[30px] border-b-[1px] mx-6"
              key={book.bookId}
            >
              {/* 이미지 */}
              <div className="w-[60px] h-[84px]">
                <img
                  className="w-full h-full"
                  src={book.image}
                  alt={book.title}
                />
              </div>
              {/* 책 내용 */}
              <div className="flex flex-1 flex-col">
                <h1 className="text-left">{book.title}</h1>
                <div className="text-left mt-[10px] mb-[10px]">
                  {book.author} | {book.publisher}
                </div>
                <div className="flex justify-end gap-[4px]">
                  <div>{book.discountRate}%</div>
                  <div>{book.discountPrice}원</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewBook;
