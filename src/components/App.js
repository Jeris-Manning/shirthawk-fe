import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import CheckoutPage from "./components/Cart/Checkout";
import Home from "./components/Home.js";
import ShoppingCart from "./components/Cart/ShoppingCart";
import DesignShirt from "./components/Shirt/DesignShirt";

function App() {
  return (
    <AppDiv>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/products"
        render={(props) => <ProductDisplay {...props} />}
      />
      <Route exact path="/designshirt" component={DesignShirt} />
      <Footer />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background: rgba(151, 193, 50, 0.75);
`;
