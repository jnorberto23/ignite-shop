import { CartContext } from "@/src/context/CartContext";
import {
  CloseButton,
  SidePanelWrapper,
} from "@/src/styles/component/sidePanel";
import { X } from "phosphor-react";
import { useContext } from "react";

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
      <span>Carrinho</span>
    </SidePanelWrapper>
  );
}
