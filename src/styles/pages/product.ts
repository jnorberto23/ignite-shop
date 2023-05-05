import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  gap: "2rem",
  maxWidth: 1180,
  margin: "0 auto",

  "@media screen and (max-width: 720px)": {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "auto",
    margin: "0 auto",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    height: 350,
    maxWidth: 350,
  },
  "@media screen and (max-width: 720px)": {
    flexDirection: "column",
    gap: "2rem",
    height: 300,
    maxWidth: 400,
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",

  "@media screen and (max-width: 720px)": {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "0rem",
  },

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    margin: "1rem 0",
    fontSize: "$xs",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:hover": {
      backgroundColor: "$green300",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
