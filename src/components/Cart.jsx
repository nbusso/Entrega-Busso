import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { cart, clearCart, restCart } = useContext(CartContext);

  return cart.map((item) => {
    <>
      <h5>{item.id}</h5>
      <h5>{item.title}</h5>
    </>;
  });
};
