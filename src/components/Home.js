import React from "react";
import styled from "styled-components";
import dude2 from "../images/blueGoose.png";
import dude from "../images/oxblood.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeBase>
      <SplashTextDiv>
        <h1>
          <span className="line1">CUSTOM</span>
          <br />
          <span className="line2">T-SHIRTS</span>
          <br />
          <span className="line3">ON DEMAND</span>
        </h1>
        <div className="lineBreak" />
        <h2>Need merch? We have your back.</h2>
        <h3>
          Full service merchandising solutions from Tee Hive and Scalable Press.
        </h3>
        <h3>No matter the size.</h3>
        <Link to="/designShirt">
          <Button>Get Started!</Button>
        </Link>
      </SplashTextDiv>
    </HomeBase>
  );
};

export default Home;

const HomeBase = styled.div`
  color: rgba(20, 20, 20, 0.9);
  display: flex;
  justify-content: center;
  padding-top: 25px;
  background-color: rgba(151, 193, 50, 0.75);
  background-image: url(${dude2}), url(${dude});
  background-position: 5% bottom, 96% bottom;
  background-repeat: no-repeat;
  background-size: auto 95%;
  width: 100%;
  height: calc(100vh - 70px);
  @media (max-width: 1100px) {
    background-image: url(${dude2});
    background-position: 95% bottom;
    justify-content: flex-start;
  }
  @media (max-width: 675px) {
    background-size: auto 50%;
    background-image: url(${dude2}), url(${dude});
    background-position: 95% bottom, 5% bottom;
    justify-content: center;
  }
`;

const SplashTextDiv = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  text-align: center;
  font-weight: 700;

  a {
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    width: 50vw;
    margin-top: 10px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line1 {
      font-size: 5rem;
    }
    .line2 {
      font-size: 3.5rem;
    }
    .line3 {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    padding: 0 4rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  .lineBreak {
    margin: 5% auto;
    width: 70%;
    border: 2px solid #3a6622;
    border-radius: 10px;
  }
  @media (max-width: 675px) {
    width: 90vw;
    h1 {
      justify-content: flex-start;
      .line1 {
        font-size: 4rem;
        line-height: 2.2rem;
      }
      .line2 {
        font-size: 3rem;
        line-height: 1.8rem;
      }
      .line3 {
        font-size: 2rem;
        line-height: 1.4rem;
      }
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px black;
  color: #82e54c;
  background: rgba(50, 50, 50, 0.8);
  border: 2px solid black;
  border-radius: 0.25rem;
  font-weight: 700;
  height: 2.5rem;
  font-size: 1.7rem;
  text-decoration: none;

  &:hover {
    color: #1b2010;
    background: #ccf200;
    text-shadow: none;
    text-decoration: none;
  }
`;
