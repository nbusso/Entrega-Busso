import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cantidadEnCart = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, cantidadEnCart }}>
      {children}
    </CartContext.Provider>
  );
};
