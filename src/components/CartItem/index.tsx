import { CartContext } from "@/src/context/CartContext";
import {
  SidePanelContentItem,
  SidePanelContentItemCounterButton,
  SidePanelContentItemCounterSpan,
  SidePanelContentItemCounterWrapper,
  SidePanelContentItemPrice,
  SidePanelContentItemTextWrapper,
  SidePanelContentItemTitle,
} from "@/src/styles/component/cartItem";
import Image from "next/image";
import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

type ItemType = {
  id: string;
  price: number;
  image: string;
  name: string;
  count: number;
};
interface CartItemProps {
  item: ItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateCartItemCount, removeFromCart } = useContext(CartContext);
  const [counter, setCounter] = useState(item.count);

  function HandleRemoveCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function HandleAddCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    updateCartItemCount(item.id, counter);
    if (counter < 1) {
      removeFromCart(item.id);
    }
  }, [counter]);

  return (
    <SidePanelContentItem>
      <Image width={80} height={80} src={item.image} alt={item.name} />
      <SidePanelContentItemTextWrapper>
        <SidePanelContentItemTitle>{item.name}</SidePanelContentItemTitle>
        <SidePanelContentItemPrice>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.price / 100)}
        </SidePanelContentItemPrice>
        <SidePanelContentItemCounterWrapper>
          <SidePanelContentItemCounterButton onClick={HandleRemoveCounter}>
            <Minus />
          </SidePanelContentItemCounterButton>
          <SidePanelContentItemCounterSpan>
            {item.count}
          </SidePanelContentItemCounterSpan>
          <SidePanelContentItemCounterButton onClick={HandleAddCounter}>
            <Plus />
          </SidePanelContentItemCounterButton>
        </SidePanelContentItemCounterWrapper>
      </SidePanelContentItemTextWrapper>
    </SidePanelContentItem>
  );
}
