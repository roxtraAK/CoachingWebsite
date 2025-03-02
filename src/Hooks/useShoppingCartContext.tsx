import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);

  if (context === undefined) {
    throw new Error("ShoppingCart Context is undefined");
  }

  return context;
}
