import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface MyState {
  count: number;
  setCount: (value: number) => void;
}

export interface MyCart {
  id: number;
  itemCount: number;
}

export interface MyCartArray {
  cartItem: MyCart[];
  setCartItem: Dispatch<SetStateAction<MyCart[]>>;
}

export const CartContext = createContext<MyState | undefined>(undefined);

export const useCartContext = () => {
  const count = useContext(CartContext);
  if (count == undefined) {
    throw new Error("Cart count not found");
  }
  return count;
};

export const CartItem = createContext<MyCartArray | undefined>(undefined);

export const useCartItem = () => {
  const cartItem = useContext(CartItem);
  if (cartItem == undefined) {
    throw new Error("CartItem Not Found");
  }
  return cartItem;
};
