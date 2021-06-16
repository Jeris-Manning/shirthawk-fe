import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import ant from "../assets/MerchDropperLogo.jpg";

const NavBar = ({ hidden, history }) => {
  return (
    <div>
      <DesktopWrapper>
        <BrandWrapper>
          <BrandLogo
            src={ant}
            onClick={() => {
              history.push("/");
            }}
          />

          <BrandTitle
            onClick={() => {
              history.push("/");
            }}>
            Merch Dropper
          </BrandTitle>
        </BrandWrapper>

        <ButtonWrapper>
          <Button
            onClick={() => {
              history.push("/designshirt");
            }}>
            Design Merch
          </Button>

          <Button
            className="buyButton"
            onClick={() => {
              history.push("/products");
            }}>
            Buy Merch
          </Button>
          <CartIcon />
        </ButtonWrapper>
        <MobileButtonWrapper>
          <Button
            onClick={() => {
              history.push("/designshirt");
            }}>
            Design
          </Button>

          <Button
            onClick={() => {
              history.push("/products");
            }}>
            Shop
          </Button>
          <CartIcon />
        </MobileButtonWrapper>

        {hidden ? null : <CartDropDown />}
      </DesktopWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));

export const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: white;
  width: 100%;
  @media (max-width: 550px) {
    padding: 2px;
  }
`;
export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background: white;
    // border: 1px solid black;
  }
`;
export const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    /* width: 30%; */
  }
  /* @media (max-width: 411px) {
    width: 49%;
    justify-content: space-between;
  } */
`;
export const BrandLogo = styled.img`
  cursor: pointer;
  width: 2rem;
  margin-right: 8px;
`;
export const BrandTitle = styled.div`
  color: #007bff;
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 550px) {
    /* font-weight: 500; */
    font-size: 1.8rem;
  }
`;
export const ButtonWrapper = styled.div`
  /* width: 33%; */
  width: 80%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .buyButton {
    margin-left: 5px;
  }
  @media (max-width: 649px) {
    display: none;
  }
`;

export const MobileButtonWrapper = styled.div`
  width: 40%;
  max-width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .buyButton {
    margin-left: 8px;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;

export const Button = styled.button`
  text-align: center;
  color: white;
  background: #037bff;
  border: 1px solid #037bff;
  border-radius: 0.25rem;
  /* width: 7rem; */
  /* width: 20%; */
  height: 2.25rem;

  &:hover {
    background: #0369d9;
    border: 1px solid #0369d9;
  }
`;
export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.1rem 1rem;
    border-bottom: 1px solid black;
  }
`;
