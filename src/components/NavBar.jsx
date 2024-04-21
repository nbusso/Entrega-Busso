import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

function NavList() {
  const customFont = "font-roboto font-bold";
  const customHover =
    "hover:text-synthwave-pinkBite hover:bg-synthwave-shadownPlanet p-2";

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${customFont}`}
      >
        <Link
          to="/"
          className={`flex items-center ${customHover} transition-colors`}
        >
          Inicio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${customFont}`}
      >
        <Link
          to="/category/armas%20de%20fuego"
          className={`flex items-center ${customHover} transition-colors`}
        >
          Armas de Fuego
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${customFont}`}
      >
        <Link
          to="/category/vestimenta"
          className={`flex items-center ${customHover} transition-colors`}
        >
          Vesimenta
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${customFont}`}
      >
        <Link
          to="/category/explosivos"
          className={`flex items-center ${customHover} transition-colors`}
        >
          Explosivos
        </Link>
      </Typography>
      <CartWidget />
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      fullWidth={true}
      className="mx-auto max-w-screen-2xl bg-vaporwave-gustoGold border-none shadow-md px-6 py-3"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className="flex items-center hover:text-purple-500 transition-colors"
        >
          <Logo />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
