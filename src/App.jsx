import "./App.css";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const db = getFirestore();

  //   const refDoc = doc(db, "items", "Ey6UAGK9u9lvgqKIgpeg");

  //   getDoc(refDoc).then((snapshot) => {
  //     console.log({ id: snapshot.id, ...snapshot.data() });
  //   });
  // }, []);
  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else {
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={404} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
