import React from "react";
import "../../App.css";
import styled from "styled-components";
import DesignHandler from "./DesignHandler";
import ThumbDisplay from "./ThumbDisplay";
import Swatch from "./Swatch";

const DesignInputPanel = ({
  design,
  setDesign,
  thumbRender,
  setThumbRender,
  garment,
  setGarment,
  handleScalableMockup,
  addProduct,
}) => {
  return (
    <Panel>
      <div>
        <h2 className="chooseDesign">Choose a Design</h2>
        <div className="centerDiv thumbs">
          <ThumbDisplay
            garment={garment}
            setGarment={setGarment}
            thumbRender={thumbRender}
          />
        </div>
      </div>
      <div>
        <div className="centerDiv artUpload">
          <DesignHandler
            design={design}
            setDesign={setDesign}
            setThumbRender={setThumbRender}
          />
        </div>
        <div className="centerDiv">
          <Swatch garment={garment} setGarment={setGarment} />
        </div>

        <ButtonContainer>
          <button onClick={handleScalableMockup}>
            See Your Shirt On A Model
          </button>
          <button onClick={addProduct}>Put It Up For Sale!</button>
        </ButtonContainer>
      </div>
    </Panel>
  );
};

export default DesignInputPanel;

const Panel = styled.div`
  background: #777;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 15px;
  width: 285px;
  padding: 0;
  border: solid #333 2px;
  border-radius: 5px;
  height: 620px;
  max-height: 70vh;

  .chooseDesign {
    font-family: robot, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    width: 281px;
    text-align: center;
    padding: 8px 0;
    border-bottom: solid black 2px;
    background-color: #82e54c;
    border-radius: 3px 3px 0 0;
  }

  .centerDiv {
    display: flex;
    justify-content: center;
  }
  .artUpload {
    margin-bottom: 5px;
  }
  .thumbs {
    min-height: 120px;
    margin: 5px 0;
  }

  button {
    text-align: center;
    color: #1b2010;
    background: #82e54c;
    border: 2px solid black;
    border-radius: 0.25rem;
    font-weight: 700;
    height: 2.25rem;
    margin-bottom: 5px;
    width: 88%;

    &:hover {
      background: #ccf200;
      border: 2px solid black;
      color: black;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
