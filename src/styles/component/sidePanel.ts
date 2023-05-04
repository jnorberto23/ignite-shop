import { styled } from "..";

export const SidePanelWrapper = styled("div", {
  height: "100%",
  width: "90%",
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: "75%",
  backgroundColor: "$gray800",
  overflowX: "auto",
  paddingTop: "60px",
  transition: "0.5s",

  "@media screen and (max-width: 720px) ": {
    left: "10%",
    width: "100%",
  },
});
