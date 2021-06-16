import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { MediaWrapper } from "./NavBar";
import { Media, NavbarText } from "reactstrap";

const SideDrawer = ({
  closeDrawer,
  imgStyle,
  logoutWithRedirect,
  customLogin,
  history,
}) => {
  return (
    <RootWrapper>
      <CloseHamburger onClick={closeDrawer}>X</CloseHamburger>

      <LinkDiv
        onClick={() => {
          history.push("/designshirt");
        }}>
        Design Merch
      </LinkDiv>

      <LinkDiv
        onClick={() => {
          history.push("/products");
        }}>
        Buy Merch
      </LinkDiv>
    </RootWrapper>
  );
};

export default withRouter(SideDrawer);

const RootWrapper = styled.div`
  height: 70%;
  width: 60%;
  background: #fead1c;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  //border: 1px solid black;
`;

const CloseHamburger = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  margin-top: 0.75rem;
  margin-right: 0.75rem;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 3rem;
  color: #007bff;
  box-sizing: border-box;
  //border: 1px solid black;
  &:focus {
    outline: none;
  }
`;
const LinkDiv = styled.div`
  text-align: right;
  margin: 0.5rem 0;
  padding: 0.15rem;
  padding-right: 1rem;
  border-bottom: 1px solid black;
  cursor: pointer;
`;
