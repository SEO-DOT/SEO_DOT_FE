import React from "react";

interface ButtonProps {
    word: string;
    color: string;
    textColor: string;
}

const Button: React.FC<ButtonProps> = ({ word, color, textColor }) => {
    return (
        <button className={`bg-${color} text-${textColor} w-[100px] h-[51px] border-[1px]  border-[#000000] rounded-[50px]`}>{word}</button>
    );
};

export default Button;
