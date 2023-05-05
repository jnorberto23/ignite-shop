import {
  SidePanelContentItem,
  SidePanelContentItemPrice,
  SidePanelContentItemRemoveButton,
  SidePanelContentItemTextWrapper,
  SidePanelContentItemTitle,
} from "@/src/styles/component/cartItem";
import Image from "next/image";

type ItemType = {
  id: string;
  amount: number;
  price: number;
  image: string;
  name: string;
};
interface CartItemProps {
  item: ItemType;
}

export function CartItem({ item }: CartItemProps) {
  const link =
    "https://files.stripe.com/links/MDB8YWNjdF8xTjFyZTNKYWdBd29jNXdzfGZsX3Rlc3RfNzdHUDBtSEFPVnFiMDJXRzdkbUZhakF100I3pkFWDz";

  console.log("item", item.image);
  return (
    <SidePanelContentItem>
      <Image width={80} height={80} src={item.image} alt="teste" />
      <SidePanelContentItemTextWrapper>
        <SidePanelContentItemTitle>{item.name}</SidePanelContentItemTitle>
        <SidePanelContentItemPrice>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format((item.price) / 100)}
        </SidePanelContentItemPrice>
        <SidePanelContentItemRemoveButton>
          Remover
        </SidePanelContentItemRemoveButton>
      </SidePanelContentItemTextWrapper>
    </SidePanelContentItem>
  );
}
