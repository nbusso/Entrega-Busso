import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Typography } from "@material-tailwind/react";

export const Cart = () => {
  const { cart, precioTotal, vaciarCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="bg-synthwave-midnightDreams border-r-4 text-vaporwave-gustoGold mx-auto max-w-7xl pt-5 pb-14 px-2 items-center">
      <Typography variant="h2" className="mt-4">
        Carrito
      </Typography>
      <div>
        {cart.map((item) => (
          <Typography key={item.id}>
            <strong className="font-bold">{item.title}</strong> |{" "}
            {item.cantidad} | ${item.price} | ${item.price * item.cantidad}
          </Typography>
        ))}
      </div>
      {cart.length > 0 ? (
        <>
          <div>Precio total: $ {precioTotal()}</div>
          <button onClick={vaciarCart}>Vaciar</button>
        </>
      ) : (
        <Typography variant="paragraph">El carrito está vacío.</Typography>
      )}
    </div>
  );
};
