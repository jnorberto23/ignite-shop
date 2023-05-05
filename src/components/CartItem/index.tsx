import {
  SidePanelContentItem,
  SidePanelContentItemPrice,
  SidePanelContentItemRemoveButton,
  SidePanelContentItemTextWrapper,
  SidePanelContentItemTitle,
} from "@/src/styles/component/cartItem";
import Image from "next/image";
export function CartItem() {
  const link =
    "https://files.stripe.com/links/MDB8YWNjdF8xTjFyZTNKYWdBd29jNXdzfGZsX3Rlc3RfNzdHUDBtSEFPVnFiMDJXRzdkbUZhakF100I3pkFWDz";

  return (
    <SidePanelContentItem>
      <Image width={80} height={80} src={link} alt="teste" />
      <SidePanelContentItemTextWrapper>
        <SidePanelContentItemTitle>
          Camiseta Beyond the Limits
        </SidePanelContentItemTitle>
        <SidePanelContentItemPrice>R$ 69,99</SidePanelContentItemPrice>
        <SidePanelContentItemRemoveButton>
          Remover
        </SidePanelContentItemRemoveButton>
      </SidePanelContentItemTextWrapper>
    </SidePanelContentItem>
  );
}
