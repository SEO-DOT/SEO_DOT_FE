import React from "react";
import OrderTag from "./OrderTag";

const Order = () => {
  return (
    <div className="flex-cul px-[24px] w-full h-full bg-blue-300">
      <OrderTag />
      <section className="w-full h-screen bg-[#18ca95]">상세조회</section>
    </div>
  );
};

export default Order;
