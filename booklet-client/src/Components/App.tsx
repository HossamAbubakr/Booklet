import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Common/Navbar";
import Overview from "./Overview";
import BookList from "./Store/BookList";
import CartList from "./Cart/CartList";
import Success from "./Cart/Success";
import Footer from "./Common/Footer";
import { CartContext } from "../Contexts/CartContext";
function App() {
  const [cartItems, setItems] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        {/* @ts-ignore */}
        <CartContext.Provider value={{ cartItems, name, address, setItems, setName, setAddress }}>
          <NavBar />
          <Route exact path="/">
            <Overview />
          </Route>
          <Route path="/shop">
            <BookList />
          </Route>
          <Route path="/cart">
            <CartList />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
