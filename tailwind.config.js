const tailwindcss = require("tailwindcss");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: { min: "375px", max: "767px" },
            // => @media (min-width: 375px and max-width: 767px) { ... }
        },
        fontFamily: {
            pretendard: ["pretendard", "sans"],
            serif: ["Georgia", "serif", "sans"],
            mono: ["Courier New", "monospace"],
        },
        extend: {
            fontFamily: {
                //pretendard 기본글꼴 설정
                sans: ["pretendard", "sans"],
            },
            width: {
              cartItemWidth: "60px",
            },
            hieght: {
              cartItemHeight: "84px",
            },
            colors: {
                signatureColor: "#5EBAD9",
            },
            padding: {
                24: "0 24px",
                20: "20px 0",
            },
        },
  },
  plugins: [],
};
