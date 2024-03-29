import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import styled from "styled-components";
import { Col } from "reactstrap";
import "../App.css";

const ProductDisplay = ({ products, addToCart }) => {
  // console.log('productdisplay/products', products)
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    axios.get("https://shirthawk.herokuapp.com/api/products").then((res) => {
      // console.log('res', res.data)
      setShirts(res.data);
    });
  }, []);

  return (
    <ProductDiv>
      {/*<NavBar />*/}
      <div className="shirtRow">
        <Col sm="7" className="flex ">
          {shirts.map((product, id) => (
            <ProductCard
              url={product.thumbnailURL}
              name={product.productName}
              design={product.design}
              price={product.price}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </Col>
      </div>
    </ProductDiv>
  );
};

const mapStateToProps = (state) => {
  // console.log("state in products", state);
  return {
    cart: state.CartReducer.cart,
    products: state.ProductReducer.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductDisplay);

const ProductDiv = styled.div`
  height: calc(100vh - 105px);
  margin-top: 30px;

  .shirtRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
  }
`;
