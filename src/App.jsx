import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bievenidos a la tienda" />
    </>
  );
};

export default App;
