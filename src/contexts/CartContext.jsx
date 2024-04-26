import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  return (
    <CartContext.Provider value={{ addItem, clear, items }}>
      {children}
    </CartContext.Provider>
  );
};
