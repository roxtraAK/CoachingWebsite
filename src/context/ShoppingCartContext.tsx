import { createContext } from "react";

export interface ShoppingCartContextType {
  productCount: number;
  setProductCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);
