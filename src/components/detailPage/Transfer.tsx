import React from "react";

const Transfer = () => {
    return (
        <div className="p-24 text-left bg-[rgb(248,248,248)] pb-[168px] text-[12px] pt-[32px]">
            <h3 className="text-[24px] font-[600] mt-[32px] mb-[20px]">교환/반품/품절</h3>
            <h5 className="text-[14px] font-[600]">반품/교환방법</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px] border-b-[1px]">마이페이지 &gt; 주문배송 &gt; 주문상세 &gt; 환불/반품</p>
            <h5 className="text-[14px] font-[600]">반품/교환가능 기간</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px] border-b-[1px]">
                변심반품의 경우 수령 후 7일 이내,
                <br /> 상품의 결함 및 계약내용과 다를 경우 문제점 발견 후 30일 이내
            </p>
            <h5 className="text-[14px] font-[600]">반품/교환비용</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px] border-b-[1px]">변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담</p>
            <h5 className="text-[14px] font-[600]">반품/교환 불가 사유</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px] border-b-[1px]">
                1) 소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우
                <br /> (단지 확인을 위한 포장 훼손은 제외) <br /> 2) 소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한 경우
                <br /> 예) 화장품, 식품, 가전제품(악세서리 포함) 등 <br />
                3) 복제가 가능한 상품 등의 포장을 훼손한 경우 <br /> 예) 음반/DVD/비디오, 소프트웨어, 만화책, 잡지, 영상 화보집 <br /> 4)
                소비자의 요청에 따라 개별적으로 주문 제작되는 상품의 경우 <br /> ((1)해외주문도서) <br /> 5) 디지털 컨텐츠인 eBook, 오디오북
                등을 1회 이상 다운로드를 받았을 경우 <br /> 6) 시간의 경과에 의해 재판매가 곤란한 정도로 가치가 현저히 감소한 경우 <br /> 7)
                전자상거래 등에서의 소비자보호에 관한 법률이 정하는 소비자 청약철회 제한 내용에 해당되는 경우 <br /> 8) 세트상품 일부만 반품
                불가 (필요시 세트상품 반품 후 낱권 재구매)
            </p>
            <h5 className="text-[14px] font-[600]">상품 품절</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px] border-b-[1px]">
                공급사(출판사) 재고 사정에 의해 품절/지연될 수 있으며, 품절 시 관련 사항에 대해서는 이메일과 문자로 안내드리겠습니다.
            </p>
            <h5 className="text-[14px] font-[600]">소비자 피해보상 환불 지연에 따른 배상</h5>
            <p className="mt-[12px] mb-[12px] pb-[12px]">
                1) 상품의 불량에 의한 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁 해결 기준 (공정거래위원회 고시)에
                준하여 처리됨 2) 대금 환불 및 환불지연에 따른 배상금 지급 조건, 절차 등은 전자상거래 등에서의 소비자 보호에 관한 법률에 따라
                처리함
            </p>

            <p className="p-[20px] bg-[#bbbbbb] rounded-[4px] text-[#ffffff] ">
                상품 설명에 반품/교환 관련한 안내가 있는 경우 그 내용을 우선으로 합니다. (업체 사정에 따라 달라질 수 있습니다.)
            </p>
        </div>
    );
};

export default Transfer;
