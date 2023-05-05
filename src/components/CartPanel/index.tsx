import { CartContext } from "@/src/context/CartContext";
import {
  CloseButton,
  SidePanelContentList,
  SidePanelContentWrapper,
  SidePanelHeader,
  SidePanelWrapper,
} from "@/src/styles/component/sidePanel";

import { X } from "phosphor-react";
import { useContext } from "react";
import { CartItem } from "../CartItem";

export function CartPanel() {
  const { isSideCartPanelOpen } = useContext(CartContext);
  const { changeSideCartPanelOpen } = useContext(CartContext);

  function handleSideCartPanelChange() {
    changeSideCartPanelOpen(false);
  }
   return (
    <SidePanelWrapper isSideCartPanelOpen={isSideCartPanelOpen}>
      <CloseButton onClick={handleSideCartPanelChange}>
        <X />
      </CloseButton>
      <SidePanelContentWrapper>
        <SidePanelHeader>Sacola de compras</SidePanelHeader>
        <SidePanelContentList>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </SidePanelContentList>
      </SidePanelContentWrapper>
    </SidePanelWrapper>
  );
}
