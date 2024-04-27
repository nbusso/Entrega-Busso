import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInicial);
  const [showCart, setShowCart] = useState(true);

  const cantidadEnCart = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const precioTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cantidadEnCart,
        showCart,
        setShowCart,
        precioTotal,
        vaciarCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
