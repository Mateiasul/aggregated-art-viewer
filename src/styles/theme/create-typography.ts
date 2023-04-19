import { Lora } from "next/font/google";
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const createTypography = () => {
  return {
    fontFamily: lora.style.fontFamily,
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 400,
      fontSize: "7rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
  };
};
