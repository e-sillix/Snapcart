import React, { createContext } from "react";
import all_product from "../Components/Assets/AllProducts";

export const productContext = createContext();

export default function Context({ children }) {
  const value = { all_product };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}
