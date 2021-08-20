import React from "react";
import styled from "styled-components";

const ShoppingCartItem = (props) => {
  console.log("props from cart item", props);
  return (
    <div>
      <div className="product-container">
        <h3>{props.product.design}</h3>
        <img src={props.product.url} alt="" />
        <h3>${props.product.price}</h3>
        <Button onClick={() => props.removeFromCart(props.product)}>
          Remove Item
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

const Button = styled.button`
  text-align: center;
  color: #1b2010;
  background: #82e54c;
  border: 2px solid black;
  border-radius: 0.25rem;
  font-weight: 700;
  height: 2.25rem;
  margin-bottom: 8px;

  &:hover {
    background: #ccf200;
    border: 2px solid black;
    color: black;
  }
`;
