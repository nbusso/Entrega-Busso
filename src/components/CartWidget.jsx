import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const CartWidget = () => {
  return (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      <span className="absolute bottom-0 left-5 text-xs font-medium bg-red-600 text-white h-4 pb-3 px-1">
        0
      </span>
    </button>
  );
};
