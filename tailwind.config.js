/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // azure: "#ebf5f3",
        // azhure: "#a7c4be",
        // slategray: "#657694",
        // "heading-text": "#081f32",
        // white: "#fff",
        // whitesmoke: { 100: "#f5f3ee", 200: "#eee", 300: "#ebebeb" },
        // black: "#000",
        // mediumspringgreen: "#08cf65",
        // darkslategray: "#333",
        // gainsboro: "#e2e2e2",
        // gray: "#908c82",
        // red: "#fd0606",
        // "body-text": "#374a59",
        "primary-black": "#2f2e41",
        "primary-white": "#ebf5f3",
        "primary-brown": "#F5F2EB",
        "primary-green": "#08cf65",
        // "primary-green-400": "#10B981",
        "primary-yellow": "#F7C94A",
      },
      grayscale: {
        50: "50%",
      },
    },
    // fontFamily: {
    //   inter: "Inter",
    //   "dm-serif-display-40-sp-h3": "'DM Serif Display'",
    //   "tt-norms-pro": "'TT Norms Pro'",
    //   inherit: "inherit",
    //   "open-sans-18-sp-body-1": "'Open Sans'",
    // },
    // borderRadius: { "3xs": "10px", "89xl": "108px" },
  },
  // fontSize: {
  //   xs: "12px",
  //   "21xl": "40px",
  //   smi: "13px",
  //   "5xl": "24px",
  //   xl: "20px",
  //   "2xs": "11px",
  //   sm: "14px",
  //   "6xl": "25px",
  //   "8xl": "27px",
  //   lg: "18px",
  // },

  plugins: [require("flowbite/plugin"), require("preline/plugin")],
  corePlugins: { preflight: false },
};

