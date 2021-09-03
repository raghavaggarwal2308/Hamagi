import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartRow from "./components/CartRow";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import ItemDetails from "./components/ItemDetails";
import { commerce } from "./lib/commerce";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Thanks from "./components/Thanks";

function App() {
  const [cart, setCart] = useState();
  // const [detail, setDetail] = useState();

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  // const handleEmptyCart = async () => {
  //   const response = await commerce.cart.empty();
  //   setCart(response.cart);
  // };

  return (
    <Router>
      <div className="App">
        <Route path="/(||cart||item_details||buy)">
          <Navbar totalItems={cart && cart.total_unique_items} />
        </Route>
        <Route exact path="/">
          <Home handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/cart">
          <CartRow
            cart={cart && cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Route>
        <Route path="/item_details/:id">
          <ItemDetails handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/buy">
          <Address />
        </Route>
        <Route path="/pay">
          <Payment />
        </Route>
        <Route path="/thankyou">
          <Thanks />
        </Route>
        <Route path="/(||cart||item_details||buy||thankyou)">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
