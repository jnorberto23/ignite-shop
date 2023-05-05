import { styled } from "..";

export const SidePanelWrapper = styled("div", {
  variants: {
    isSideCartPanelOpen: {
      true: {
        visibility: "visible",
      },
      false: {
        visibility: "collapse",
      },
    },
  },
  transition: 'all 0.2s ease-in-out',
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "25%",
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: "75%",
  backgroundColor: "$gray800",

  overflowX: "auto",
  paddingTop: "10px",

  "@media screen and (max-width: 720px) ": {
    left: "10%",
    width: "90%",
    overflowX: "hidden",
    padding: "0",
  },
});

export const CloseButton = styled("button", {
  marginLeft: "auto",
  padding: "1rem 1rem 1rem 0",
  border: "none",
  background: "none",
  cursor: "pointer",
  color: "$white",
  width: "4rem",
  height: "4rem",
  svg: {
    color: "$gray300",
    fontSize: "$xl",
  },
});

export const SidePanelContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0 3rem 3rem 3rem",
  justifyContent: "flex-start",

  "@media screen and (max-width: 720px)": {
    padding: "0 1rem 1rem 1rem",
  },
});

export const SidePanelHeader = styled("h1", {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "$lg",
  lineHeight: "160%",
});

export const SidePanelContentList = styled("ul", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "55vh",
  width: "100%",
  justifyContent: "flex-start",
  gap: "1.5rem",
  overflowY: "scroll" /* Add the ability to scroll */,

  /* Hide scrollbar for Chrome, Safari and Opera */
  "&::-webkit-scrollbar": {
    display: "none",
  },
  /* IE, Firefox and Edge */
  "&:-ms-overflow-style": "none",
  scrollbarWidth: "none",
});

