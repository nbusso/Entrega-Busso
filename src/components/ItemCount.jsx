import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mensajeError, setMensajeError] = useState(null);

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
    if (!isNaN(nuevoValor) && nuevoValor >= 0) {
      setCantidad(nuevoValor);
      setMensajeError(null);
    } else {
      setMensajeError("Por favor ingrese un número no-negativo válido!");
    }
  };

  const handleAgregar = () => {
    console.log({ ...item, cantidad: cantidad });
  };

  return (
    <div>
      {mensajeError && <p className="text-red-500">{mensajeError}</p>}
      <div className="flex">
        <Button
          ripple={true}
          className="bg-vaporwave-gustoGold rounded-r-none"
          onClick={handleRestar}
        >
          -
        </Button>
        <Input
          variant="standard"
          className="rounded-none indent-4 text-lg pb-4 min-w-3"
          value={cantidad}
          onChange={handleCambio}
        />
        <Button
          ripple={true}
          className="bg-vaporwave-gustoGold rounded-l-none"
          onClick={handleSumar}
        >
          +
        </Button>
      </div>
      <Button
        onClick={handleAgregar}
        className="flex items-center gap-3 mx-auto mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
