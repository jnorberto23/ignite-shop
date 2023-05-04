import { styled } from "..";

export const SidePanelWrapper = styled("div", {
  variants: {
    isSideCartPanelOpen: {
      true: {
        visibility: "visible",
        transition: "1s",
      },
      false: {
        visibility: "collapse",
        transition: "1s",
      },
    },
  },
  height: "100%",
  width: "90%",
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: "75%",
  backgroundColor: "$gray800",

  overflowX: "auto",
  paddingTop: "60px",

  "@media screen and (max-width: 720px) ": {
    left: "10%",
    width: "100%",
  },
});
