import React, { useContext, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { CartContext } from "../contexts/CartContext";

const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mensajeError, setMensajeError] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setMensajeError(null);
    }
  };

  const handleSumar = () => {
    if (cantidad < item.stock) {
      setCantidad(cantidad + 1);
      setMensajeError(null);
    }
  };

  const handleCambio = () => {
    const nuevoValor = parseInt(event.target.value);
    if (!isNaN(nuevoValor) && nuevoValor >= 0 && nuevoValor <= item.stock) {
      setCantidad(nuevoValor);
      setMensajeError(null);
    } else {
      setMensajeError("Por favor ingrese un número no-negativo válido!");
    }
  };

  const onAdd = () => {
    const itemAgregado = { ...item, cantidad };
    const newCart = [...cart];
    const existeEnCart = newCart.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (existeEnCart) {
      existeEnCart.cantidad += cantidad;
    } else {
      newCart.push(itemAgregado);
    }
    setCart(newCart);
  };

  return (
    <div>
      {mensajeError && <p className="text-red-500">{mensajeError}</p>}
      <div className="flex">
        <Button
          ripple={true}
          className="bg-vaporwave-gustoGold rounded-r-none z-10"
          onClick={handleRestar}
          disabled={!item.stock || cantidad <= 1}
        >
          -
        </Button>
        <div className="min-w-8">
          <Input
            variant="static"
            className=" rounded-none indent-4 text-lg pb-4"
            value={item.stock ? cantidad : "Sin Stock"}
            onChange={handleCambio}
          />
        </div>
        <Button
          ripple={true}
          className="bg-vaporwave-gustoGold rounded-l-none z-10"
          onClick={handleSumar}
          disabled={!item.stock}
        >
          +
        </Button>
      </div>
      <Button
        onClick={onAdd}
        ripple={false}
        fullWidth={true}
        disabled={!item.stock}
        className="mt-2 bg-synthwave-shadownPlanet border border-synthwave-pinkBite text-synthwave-pinkBite shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
