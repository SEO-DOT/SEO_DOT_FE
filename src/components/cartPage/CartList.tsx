import React, { SyntheticEvent, useRef, createRef } from "react";
import CartItem from "./CartItem";
import { ReactComponent as CheckBox } from "../../assets/images/cartPage/check-circle.svg";
// import { ReactComponent as CheckedBox } from "../../assets/images/cartPage/check-circle-fill.svg";
import { ItemsProps } from "../../types/data";

const CartList = ({ items }: { items: ItemsProps[] }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const checkboxRefs = items.map(() => createRef<HTMLInputElement>())

    const handleCheckBox = (e: SyntheticEvent) => {
        if (!formRef.current) return; // 초기 null값 일경우 대비
        const targetInput = e.target as HTMLInputElement; // 이벤트 요소를 input 타입으로 캐스팅
        const data = new FormData(formRef.current); // 객체로 Formdata를 가져온다.
        const selectedCount = data.getAll("select-item").length; // 체크된 개수

        if (targetInput.classList.contains("select-all")) {  // 전체 선택을 눌러을떼 전체가 체크되는 코드
            const allChecked = targetInput.checked;
            checkboxRefs.forEach((inputElem) => {  // 개별체크가 되어있는 상태에서 그 것까지 포함해 전체가 체크됨
                inputElem.current!.checked = allChecked;
            })
        } else {
            const allChecked = selectedCount === items.length;  
            formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked;  // 전체 체크가 되어 있는지 체크 후 전쳇선택 체크박스 또한 체크
        }

    };

    return (
        <form
            ref={formRef}
            onChange={handleCheckBox}
        >
            <div className="p-24 ">
                <div className="flex justify-between pt-[8px] pb-[8px]">
                    <div className="flex">
                        <label>
                            <input type="checkbox" className="select-all">
                                <CheckBox />
                            </input>
                            전체선택(1/4)
                        </label>
                    </div>
                    <p>상품삭제</p>
                </div>
            </div>
            <div className="border-[6px]" />
            <CartItem />
        </form>
    );
};

export default CartList;
