import { styled } from "..";

export const Header = styled("header", {
    padding: "2rem",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: '1rem',
    ":first-child": {
      marginRight: "auto",
    },
  });
  
  export const CartIconButton = styled("button", {
    border: "none",
    borderRadius: "5px",
    background: "$gray800",
    padding: "0.8rem",
    cursor: "pointer",
    svg: {
      color: "$gray100",
      fontSize: "$xl",
    },
  });
  
  export const CartCounterBadge = styled("div", {
    variants: {
        isBadgeVisible: {
            true: {
                visibility: 'inherit',
            }, false:{
                visibility: 'hidden',
            }
        }
    },
    width: "2rem",
    height: "2rem",
    background: "$green500",
    marginLeft: "-1rem",
    marginTop: "-2.5rem",
    borderRadius: '50%',
    border: '2px solid $gray900',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.7rem",
    lineHeight: "160%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  