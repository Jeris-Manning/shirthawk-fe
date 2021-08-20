import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "reactstrap";

import { toggleCartHidden } from "../../store/actions";

const SingleCartItem = ({ item: { thumbnailURL, price, name, quantity } }) => (
  <CartItemDiv className="cart-item">
    <CartItemImage src={thumbnailURL} alt="item" />
    <CartItemDetails className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {" "}
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemDiv>
);

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownDiv className="cart-dropdown">
    <CartItemsDiv className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <SingleCartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </CartItemsDiv>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownDiv>
);

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    cartItems: state.CartReducer.cart,
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));

const CartDropdownDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0.25rem;
  border: 1px solid #0369d9;
  background-color: white;
  top: 90px;
  right: 20px;
  z-index: 5;
`;

const CartItemDiv = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const CartItemImage = styled.img`
  width: 30%;
`;

const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const CartItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const CustomButton = styled(Button)`
  margin-top: 25px;
  text-align: center;
  color: #1b2010;
  background: #82e54c;
  border: 2px solid black;
  border-radius: 0.25rem;
  font-weight: 700;
  height: 2.25rem;

  &:hover {
    background: #ccf200;
    border: 2px solid black;
    color: #1b2010;
  }
`;
