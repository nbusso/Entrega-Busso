import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInicial);
  const [showCart, setShowCart] = useState(true);

  const deleteItem = (id) => {
    const lugarEnCarrito = cart.findIndex((prod) => prod.id === id);
    const carritoAlt = [...cart];
    carritoAlt.splice(lugarEnCarrito, 1);
    setCart(carritoAlt);
  };

  const cantidadEnCart = () => {
    return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const precioTotal = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.price * producto.cantidad,
      0
    );
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
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
