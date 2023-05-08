import { CartContext } from "@/src/context/CartContext";
import {
  CloseButton,
  SidePanelContentAmountWrapper,
  SidePanelContentButton,
  SidePanelContentList,
  SidePanelContentTotalValueWrapper,
  SidePanelContentWrapper,
  SidePanelHeader,
  SidePanelWrapper,
} from "@/src/styles/component/sidePanel";

import { X } from "phosphor-react";
import { useContext } from "react";
import { CartItem } from "../CartItem";

export function CartPanel() {
  const {
    isSideCartPanelOpen,
    cartCount,
    totalPrice,
    cart,
    changeSideCartPanelOpen,
  } = useContext(CartContext);

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
          {cart.map((element) => {
            return <CartItem item={element} key={element.id} />;
          })}
        </SidePanelContentList>
        <SidePanelContentAmountWrapper>
          <span>Quantidade</span>
          <span>{cartCount} itens</span>
        </SidePanelContentAmountWrapper>
        <SidePanelContentTotalValueWrapper>
          <span>Valor total</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format((totalPrice || 0) / 100)}
          </span>
        </SidePanelContentTotalValueWrapper>
        <SidePanelContentButton>Finalizar compra</SidePanelContentButton>
      </SidePanelContentWrapper>
    </SidePanelWrapper>
  );
}
