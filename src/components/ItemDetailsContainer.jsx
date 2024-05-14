import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetails } from "./ItemDetails";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const getItem = doc(db, "items", id);

    getDoc(getItem).then((snapshot) => {
      snapshot.exists() && setItem({ id: id, ...snapshot.data() });
    });
  }, []);

  if (!item) return null;

  return (
    <div className="bg-synthwave-midnightDreams border-r-4 text-vaporwave-gustoGold mx-auto max-w-7xl pt-5 pb-14 px-2 flex items-center">
      <ItemDetails item={item} />
    </div>
  );
};
