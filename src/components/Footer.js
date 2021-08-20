import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Foot>
      <div className="links">
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/">Store</StyledLink>
      </div>
      <h3>© Tee Hive 2021</h3>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 35px;
  background: #3a6622;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #f3fff3;
  border-top: solid 2px #1b3010;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  margin-right: 10px;
  font-weight: 700;
  color: #82e54c;
  text-shadow: 1px 1px 3px black;
  &:hover {
    color: #ccf200;
    text-decoration: none;
  }
`;
