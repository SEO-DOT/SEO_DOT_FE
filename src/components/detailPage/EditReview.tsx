import React from 'react'

const EditReview = () => {
  return (
    <div>EditReview</div>
  )
}

export default EditReview



// <p className="mt-[40px] font-[700]">리뷰 작성</p>

// {[1, 2, 3, 4, 5].map((value) => (
//     <div
//         key={value}
//         className="inline-block mt-[12px] mb-[12px]"
//     >
//         {ratingValue >= value ? (
//             <TiStar
//                 data-value={value}
//                 onClick={getRating}
//                 className="w-[30px] h-[30px] text-[#EDEDED]"
//             />
//         ) : (
//             <TiStar
//                 data-value={value}
//                 onClick={getRating}
//                 className="w-[30px] h-[30px] text-[#2CBDE4]"
//             />
//         )}
//     </div>
// ))}
// <div className="w-full h-auto border-[1px] border-[#767676] rounded-[4px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
//     <textarea
//         placeholder="내용을 5자 이상 입력해 주세요. 주제와 무관한 댓글, 악플, 배송문의 등의 글은 임의 삭제될 수 있습니다."
//         id="content"
//         name="content"
//         spellCheck="false"
//         className="w-full h-[120px] bg-[#f8f8f8] resize-none"
//         // value={inputForm.content}
//         // onChange={handleChange}
//     />
//     <p className="w-full text-right">50/150자</p>
//     <p>{inputForm.content.length}/500</p>
// </div>
// <div className="flex items-center ">
//     <CheckButton className="mt-[12px] mb-[12px] mr-[4px]" />
//     <p>스포일러 포함</p>
// </div>
// <button className="w-full pt-[15px] pb-[14px] bg-[#2CBDE4] rounded-[4px] text-[#ffffff] mb-[40px]">등록</button>