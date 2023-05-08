import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

type ItemType = {
  id: string;
  amount: number;
  price: number;
  image: string;
  name: string;
};

interface ContextInterface {
  cart: ItemType[];
  totalPrice: number;
  cartCount: number;
  isSideCartPanelOpen: boolean;
  addToCart: (item: ItemType) => void;
  changeSideCartPanelOpen: (value: boolean) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext({} as ContextInterface);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isSideCartPanelOpen, setIsSideCartPanelOpen] = useState(false);

  function addToCart(item: ItemType) {
    setCart([...cart, item]);
  }

  function changeSideCartPanelOpen(value: boolean) {
    setIsSideCartPanelOpen(value);
  }

  function removeFromCart(id: string) {
    const cartsFiltered = cart.filter((element) => {
      return element.id !== id
    })
    setCart(cartsFiltered);
  }


  useEffect(() => {
    setCartCount(cart.length)
    setTotalPrice(cart.reduce((acc, act) => {
      return Number(act.price) + acc
    }, 0))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        cartCount,
        isSideCartPanelOpen,
        changeSideCartPanelOpen,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
