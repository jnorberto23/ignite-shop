import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

type ItemType = {
  id: string;
  price: number;
  image: string;
  name: string;
  count: number;
};

interface ContextInterface {
  cart: ItemType[];
  totalPrice: number;
  cartCount: number;
  isSideCartPanelOpen: boolean;
  addToCart: (item: ItemType) => void;
  removeFromCart: (id: string) => void;
  changeSideCartPanelOpen: (value: boolean) => void;
  updateCartItemCount: (id: string, count: number) => void;
}

export const CartContext = createContext({} as ContextInterface);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isSideCartPanelOpen, setIsSideCartPanelOpen] = useState(false);


  async function addToCart(item: ItemType) {
    const itemAlreadyHasOnCart = await cart.some(
      (element) => element.id === item.id
    );

    const cartsFiltered = cart.filter((element: ItemType) => {
      if (element.id === item.id) {
        element.count = element.count + 1;
        return element;
      }
      return element;
    });

    if (itemAlreadyHasOnCart) {
      setCart([...cartsFiltered]);
    } else {
      setCart([...cart, item]);
    }
  }

  async function removeFromCart(id: string) {
    const cartsFiltered = cart.filter((element: ItemType) => {
      if (element.id !== id) {
        return element;
      }
    });

    setCart([...cartsFiltered]);
  }


  function updateCartItemCount(id: string, count: number) {
    const cartsFiltered = cart.filter((element: ItemType) => {
      if (element.id === id) {
        element.count = count;
        return element;
      }
      return element;
    });
    setCart([...cartsFiltered]);
  }


  function changeSideCartPanelOpen(value: boolean) {
    setIsSideCartPanelOpen(value);
  }

  useEffect(() => {
    setCartCount(cart.length);
    setTotalPrice(
      cart.reduce((acc, act) => {
        return (Number(act.price) + acc) * act.count;
      }, 0)
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        cartCount,
        isSideCartPanelOpen,
        changeSideCartPanelOpen,
        updateCartItemCount,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
