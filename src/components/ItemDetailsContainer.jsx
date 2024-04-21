import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import { Typography } from "@material-tailwind/react";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filteredData = data.find((data) => data.id === Number(id));
      setItem(filteredData);
    });
  }, [id]);

  if (!item) return null;

  const SingleItemCard = () => {
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
            <Typography variant="paragraph">{item.description}</Typography>
            <Typography
              variant="h1"
              className="text-right text-vaporwave-loveVesselPink"
            >{`$ ${item.price}`}</Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-synthwave-midnightDreams border-r-4 text-vaporwave-gustoGold mx-auto max-w-7xl pt-5 pb-14 px-2 flex items-center">
      <SingleItemCard />
    </div>
  );
};
