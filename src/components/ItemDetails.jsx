import ItemCount from "./ItemCount";
import { Typography } from "@material-tailwind/react";

export const ItemDetails = ({ item }) => {
  return (
    <div className="bg-black rounded-xl border-2 border-vaporwave-gustoGold p-10 mx-auto flex flex-col min-w-[390px] sm:flex-col md:flex-row">
      <img
        className="h-96 w-96 rounded-lg object-cover object-center mx-auto sm:mb-5"
        src={`/src/assets/products/${item.pictureUrl}`}
        alt={item.title}
      />
      <div className="flex flex-col ml-5">
        <Typography variant="h2" className="">
          {item.title}
        </Typography>
        <hr className="my-5" />
        <Typography variant="h5">Categoría: {item.category}</Typography>
        <Typography variant="h5">Marca: {item.brand}</Typography>
        <hr className="my-5" />
        <div className="min-h-48 flex flex-col justify-between">
          <Typography variant="paragraph">
            {item.description} Stock: {item.stock}
          </Typography>
          <Typography
            variant="h1"
            className="text-right text-vaporwave-loveVesselPink"
          >{`$ ${item.price}`}</Typography>
          <div className="mx-auto">
            <ItemCount item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};
