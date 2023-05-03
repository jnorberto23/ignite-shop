import { ReactNode, createContext, useState } from "react";

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
  addToCart: (item: ItemType) => void;
}

export const CartContext = createContext({} as ContextInterface);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(item: ItemType) {
    setCart([...cart, item]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
