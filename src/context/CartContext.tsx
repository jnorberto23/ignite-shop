import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

type ItemType = {
  id: string;
  amount: number;
  price: string;

};

interface ContextInterface {
  cart: ItemType[];
  totalPrice: number;
  cartCount: number;
  addToCart: (item: ItemType) => void;

}

export const CartContext = createContext({} as ContextInterface);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  function addToCart(item: ItemType) {
    setCart([...cart, item]);
  }

  useEffect(() => {
    setCartCount(cart.length)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
