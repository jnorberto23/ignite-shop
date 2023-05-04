import { CartContext } from "@/src/context/CartContext";
import { SidePanelWrapper } from "@/src/styles/component/sidePanel";
import { useContext } from "react";

export function CartPanel() {
  const { isSideCartPanelOpen } = useContext(CartContext);
  const { changeSideCartPanelOpen } = useContext(CartContext);

  function handleSideCartPanelChange(){
    changeSideCartPanelOpen(false)
  }
  return (
    <SidePanelWrapper isSideCartPanelOpen={isSideCartPanelOpen}>
      <div>
        <span>Carrinho</span>
        <button onClick={handleSideCartPanelChange}>X</button>
      </div>
    </SidePanelWrapper>
  );
}
