import { styled } from "..";

export const SidePanelContentItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  gap: "1rem",

  img: {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
  },
});

export const SidePanelContentItemTextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "0.5rem",
});

export const SidePanelContentItemTitle = styled("p", {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontSize: "$md",

  "@media screen and (max-width: 720px)": {
    fontSize: "$xxs",
  },
});

export const SidePanelContentItemPrice = styled("p", {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "$md",

  "@media screen and (max-width: 720px)": {
    fontSize: "$xxs",
  },
});

export const SidePanelContentItemRemoveButton = styled("button", {
  background: "none",
  color: "$green500",
  border: "none",
  fontWeight: "600",
  "&:hover": {
    color: "$green300",
  },
});

export const SidePanelContentItemCounterWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: '0.5rem',
});

export const SidePanelContentItemCounterButton = styled("div", {
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Baloo 2",
  fontWeight: 900,
  color: "$green300",
  height: "auto",
  border: "none",
  borderRadius: "1px",
  backgroundColor: "none",
  cursor: "pointer",

  svg: {
    padding: "auto",
    margin: "auto",
    fontSize: "1rem",
    fontWeight: 900
  },
});

export const SidePanelContentItemCounterSpan = styled("span", {
  padding: "auto",
  margin: "auto",
  fontFamily: "Baloo 2",
  fontWeight: 900,
  border: "none",
  borderRadius: "1px",
  backgroundColor: "none",
});
