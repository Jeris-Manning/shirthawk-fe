import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import ant from "../images/madAnt.png";

const NavBar = ({ hidden, history }) => {
  return (
    <NavDiv>
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
            TEE HIVE
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
    </NavDiv>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));

const NavDiv = styled.div`
  padding-top: 55px;

  @media (max-width: 550px) {
    padding-top: 40px;
  }
`;

export const DesktopWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #3a6622;
  width: 100%;
  position: fixed;
  border-bottom: solid 2px #1b3010;
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
    background: rgb(86, 153, 50);
  }
`;
export const BrandWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
  }
`;
export const BrandLogo = styled.img`
  cursor: pointer;
  width: 50px;
  margin-right: 15px;
`;
export const BrandTitle = styled.div`
  color: #82e54c;
  font-family: "Jolly Lodger", cursive;
  font-weight: 500;
  font-size: 3.5rem;
  letter-spacing: 3px;
  cursor: pointer;
  text-shadow: 2px 2px 3px black;
  @media (max-width: 550px) {
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
  color: #1b2010;
  background: #82e54c;
  border: 2px solid black;
  border-radius: 0.25rem;
  font-weight: 700;
  height: 2.25rem;

  &:hover {
    background: #ccf200;
    border: 2px solid black;
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
