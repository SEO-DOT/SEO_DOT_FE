import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./detail.css";

// import required modules
import { Pagination } from "swiper/modules";

const Recommand = () => {
    return (
        <div className="p-24 text-left bg-[#dcdcdc] pb-[32px] text-[12px] pt-[32px]">
            <h3 className="text-[24px] font-[600] mt-[32px] mb-[20px]">추천도서</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={12}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
                <div>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="bookImage"
                            />
                            <p className="w-[100px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                책제목책제목책제목책제목책제목책제목책제목책제목책제목책제목
                            </p>
                            <p>저자</p>
                            <p>가격</p>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Recommand;
