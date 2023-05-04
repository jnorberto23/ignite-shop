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
  display: 'flex',
  flexDirection: 'column',
  height: "100%",
  width: "90%",
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: "75%",
  backgroundColor: "$gray800",

  overflowX: "auto",
  paddingTop: "10px",

  "@media screen and (max-width: 720px) ": {
    left: "10%",
    width: "100%",
  },
});

export const CloseButton = styled("button", {
    float: 'right',
    padding: 'auto',
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "$white",
    width: '4rem',
    height: '4rem',
    svg: {
      color: "$white",
      fontSize: "$xl",
    },
  });