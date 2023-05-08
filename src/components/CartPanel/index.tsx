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
import { useContext, useState } from "react";
import { CartItem } from "../CartItem";
import axios from "axios";

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

  async function handleBuyButton() {
    try {
  

      const cartToCheckout = cart.map((element) => {
        return { price: element.id, quantity: element.count };
      });

      const response = await axios.post("/api/checkout", {cartToCheckout});

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {

      alert("Falha ao redirecionar ao checkout!");
    }
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

        <SidePanelContentButton onClick={handleBuyButton}>
          Finalizar compra
        </SidePanelContentButton>
      </SidePanelContentWrapper>
    </SidePanelWrapper>
  );
}
