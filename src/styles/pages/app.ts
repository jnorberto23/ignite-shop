import { ShoppingCart } from "phosphor-react";
import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CartIconButton = styled("button", {
  border: 'none',
  borderRadius: '5px',
  background: "$gray800",
  padding: '0.5rem',
  cursor: 'pointer',

  svg: {
    color: "$gray100",
    fontSize: "$xl",
  }
});
