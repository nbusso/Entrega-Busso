import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

const CartItems = ({ cartItem }) => {
  const { deleteItem } = useContext(CartContext);

  const handleDelete = () => {
    deleteItem(cartItem.id);
  };

  return (
    <Card
      key={cartItem.id}
      className="w-full max-w-[48rem] flex-row mb-4 rounded-sm relative"
    >
      <div className="flex">
        <img
          src={`/src/assets/products/${cartItem.pictureUrl}`}
          alt={cartItem.title}
          className="w-28"
        />
        <div>
          <h1 className="font-bold pt-2 px-2">{cartItem.title}</h1>
          <h6 className="block p-2">
            ${cartItem.price} | x {cartItem.cantidad} =
            <strong> ${cartItem.price * cartItem.cantidad}</strong>
          </h6>
          <Link to={`/item/${cartItem.id}`}>
            <p className="pl-2 underline cursor-pointer">
              ir a la página del producto
            </p>
          </Link>
        </div>
      </div>

      <button onClick={handleDelete} className="absolute top-2 right-2">
        <MdDeleteForever
          key={cartItem.id}
          size={24}
          color="red"
          title="Eliminar Item"
        />
      </button>
    </Card>
  );
};

export const Cart = () => {
  const { cart, precioTotal, vaciarCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOrder = () => {
    const order = {
      buyer: buyer,
      items: cart,
      total: precioTotal(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        vaciarCart();
      }
    });
  };

  return (
    <div className="bg-synthwave-midnightDreams border-r-4 text-vaporwave-gustoGold mx-auto max-w-7xl pt-5 pb-14 px-4 items-center">
      <Typography
        variant="h2"
        className="mb-4 border-b-2 border-vaporwave-gustoGold"
      >
        Carrito
      </Typography>
      <div>
        {cart.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      {cart.length > 0 ? (
        <>
          <div>Precio total: $ {precioTotal()}</div>
          <Button className="m-4" onClick={vaciarCart}>
            Vaciar
          </Button>
          <hr className="my-6" />
          <h2 className="font-bold text-2xl underline">
            Proceder con la compra:
          </h2>
          <h3 className="font-bold text-xl">Datos Comprador</h3>
          <form>
            <div className="mt-2">
              <label>Nombre:</label>
              <input
                className="ml-2"
                type="text"
                value={buyer.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <label>Teléfono:</label>
              <input
                className="ml-2"
                type="number"
                value={buyer.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <label>Email:</label>
              <input
                className="ml-2"
                type="email"
                value={buyer.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </form>
          <Button className="m-4" type="button" onClick={handleOrder}>
            Comprar
          </Button>
        </>
      ) : (
        <Typography variant="paragraph">El carrito está vacío.</Typography>
      )}
    </div>
  );
};
