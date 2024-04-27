import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Badge, IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cantidadEnCart } = useContext(CartContext);

  return (
    <Badge
      content={cantidadEnCart() ? cantidadEnCart() : "0"}
      withBorder
      className="font-bold"
    >
      <Link to="/cart">
        <IconButton size="sm">
          <ShoppingCartIcon className="h-4 w-4" />
        </IconButton>
      </Link>
    </Badge>
  );
};
