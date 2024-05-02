import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export const Item = ({ item }) => {
  return (
    <Card className="w-80 mt-2 bg-black border-2  border-vaporwave-gustoGold">
      <CardHeader shadow={false} floated={false} className="h-80">
        <img
          src={`/src/assets/products/${item.pictureUrl}`}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="black"
            className="font-roboto text-vaporwave-gustoGold font-bold"
          >
            {item.title}
          </Typography>
          <Typography
            color="light-blue"
            className="text-synthwave-pinkBite font-bold pl-1"
          >
            ${item.price}
          </Typography>
        </div>
        <hr className="border-synthwave-sapphireSplendour mb-2" />
        <Typography
          variant="small"
          color="gray"
          className="text-synthwave-cleanPoolBlue font-normal opacity-90 mb-2"
        >
          {`${item.category} | ${item.brand}`}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="text-synthwave-cleanPoolBlue font-normal opacity-75"
        >
          {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <ItemCount item={item} />
        {/* <Button
          ripple={false}
          fullWidth={true}
          className="bg-synthwave-shadownPlanet border border-synthwave-pinkBite text-synthwave-pinkBite shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Agregar al Carrito
        </Button> */}
        <Link to={`/item/${item.id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-vaporwave-gustoGold text-vaporwave-vanishingPurple border border-vaporwave-vanishingPurple shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-2"
          >
            + Info
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
