import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "items");
    else {
      refCollection = query(
        collection(db, "items"),
        where("category", "==", id)
      );
    }

    console.log(refCollection);

    getDocs(refCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <div className="bg-synthwave-midnightDreams grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 place-items-center mx-auto max-w-7xl pt-5 pb-14 px-2 sm:px-6 lg:px-8 relative">
      <ItemList items={items} />
    </div>
  );
};
