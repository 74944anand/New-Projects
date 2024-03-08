import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext, CartItem, MyCart } from "./context/useContext";
import Cards from "./Cards";

function App() {
  const [count, setCount] = useState(0);
  let [cartItem, setCartItem] = useState<MyCart[]>([]);

  return (
    <CartItem.Provider value={{ cartItem, setCartItem }}>
      <CartContext.Provider value={{ count, setCount }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Cards />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </CartItem.Provider>
  );
}

export default App;
