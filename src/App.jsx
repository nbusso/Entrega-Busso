import "./App.css";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { NavBar2 } from "./components/NavBar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
        <Route path="*" element={404} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
