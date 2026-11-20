import localFont from "next/font/local";

export const fontPoppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/FZ Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/FZ Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/FZ Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/FZ Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/FZ Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const allFontVariables = [fontPoppins.variable].join(" ");
