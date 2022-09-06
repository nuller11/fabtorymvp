module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        light_green_200: "#dbc59c",
        deep_purple_600: "#4929cf",
        yellow_400: "#fbe94f",
        yellow_800: "#f0a124",
        yellow_801: "#f7941e",
        teal_900: "#006839",
        gray_402: "#c8c8c8",
        gray_400: "#bababa",
        gray_401: "#b4b4b4",
        gray_800: "#414141",
        gray_801: "#594a42",
        orange_600: "#f2890a",
        orange_201: "#ffbe71",
        orange_200: "#e9c06e",
        bluegray_800: "#2d4e67",
        deep_purple_50: "#e6e0ff",
        bluegray_401: "#898989",
        bluegray_400: "#8e8e8e",
        indigo_601: "#3d5aa3",
        indigo_602: "#375aa4",
        indigo_600: "#3759a8",
        green_200: "#9acaa1",
        gray_51: "#f8f8f8",
        red_300: "#d1665e",
        red_301: "#e28d7a",
        gray_50: "#f1f9fd",
        light_green_500: "#8dc740",
        deep_orange_402: "#ff7250",
        yellow_900: "#f18221",
        deep_orange_401: "#d47549",
        gray_903: "#232323",
        deep_orange_400: "#e3873c",
        yellow_100: "#fffbce",
        gray_501: "#9d9d9d",
        gray_500: "#a7a9ac",
        gray_901: "#201e22",
        gray_902: "#231f20",
        gray_900: "#181818",
        gray_101: "#f0f8fd",
        orange_101: "#eed8b7",
        gray_100: "#f3f3f3",
        orange_100: "#ffdabd",
        indigo_300: "#8f8fc1",
        indigo_301: "#72a6d2",
        deep_orange_A100: "#eda783",
        deep_orange_A101: "#fe9b88",
        red_600: "#cc5336",
        deep_purple_800: "#330ec9",
        light_blue_100: "#a5d9f5",
        light_green_A100: "#a3ff83",
        light_green_400: "#91d678",
        black_900_3f: "#0000003f",
        teal_700: "#009448",
        pink_700: "#cf264b",
        purple_900: "#401671",
        deep_orange_300: "#fe8770",
        pink_701: "#bf384e",
        yellow_200: "#ffed90",
        gray_600: "#757575",
        orange_A201: "#e5a443",
        orange_A200: "#e5a343",
        red_A200: "#ff5955",
        gray_602: "#6b6b6b",
        gray_603: "#7f7f7f",
        amber_300: "#e9d953",
        gray_200: "#e6e7e8",
        gray_201: "#efefef",
        bluegray_600: "#3c6485",
        bluegray_200: "#aca7c4",
        white_A700: "#ffffff",
        indigo_800: "#283b90",
        deep_purple_900: "#321c8c",
        deep_purple_500: "#5d41d4",
        red_500: "#ef4136",
        light_blue_400: "#25a9e1",
        teal_200: "#7ebad7",
        green_400: "#5a9f73",
        teal_202: "#81b0ca",
        teal_201: "#7fb1ca",
        teal_203: "#85c7be",
        black_900: "#000000",
        yellow_700: "#efbf1b",
        gray_700: "#726658",
        gray_301: "#e6e6e6",
        red_A100: "#fe8d77",
        bluegray_100: "#d1d3d4",
        orange_301: "#dea857",
        orange_300: "#e8c047",
        gray_300: "#e0e0df",
        bluegray_900: "#24004d",
        indigo_100: "#c9c4e5",
        bluegray_102: "#d9d9d9",
        bluegray_101: "#d4d4d4",
        blue_201: "#97d4f4",
        blue_200: "#90d0f2",
        indigo_500: "#455fa6",
        bluegray_901: "#310f57",
      },
      borderRadius: {
        radius5: "5px",
        radius9: "9px",
        radius10: "10px",
        radius13: "13px",
        radius15: "15px",
        radius19: "19px",
        radius27: "27px",
        radius50: "50%",
        radius335: "33.5px",
      },
      borderWidth: { bw3: "3px" },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs: "0px 10px  27px 11px #0000003f",
        bs1: "3px 31px  40px 32px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};