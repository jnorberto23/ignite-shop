import {
  CartCounterBadge,
  CartIconButton,
  Header,
} from "@/src/styles/component/header";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/src/context/CartContext";


export function HeaderComponent() {
  const { cartCount } = useContext(CartContext);
  const [isBadgeVisible, setIsBadgeVisible] = useState(
    cartCount > 0 ? true : false
  );
  const { changeSideCartPanelOpen } = useContext(CartContext);

  useEffect(() => {
    setIsBadgeVisible(cartCount > 0 ? true : false);
  }, [cartCount]);

  function handleSideCartPanelChange(){
    changeSideCartPanelOpen(true)
  }
  return (
    <Header>
      <Link href={"/"}>
        <Image src={logoImg} alt="Ignite Shop Logo" />
      </Link>
      <CartIconButton onClick={handleSideCartPanelChange}>
        <Handbag />
      </CartIconButton>
      <CartCounterBadge isBadgeVisible={isBadgeVisible}>
        {cartCount}
      </CartCounterBadge>
    </Header>
  );
}
