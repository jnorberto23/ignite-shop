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
  
