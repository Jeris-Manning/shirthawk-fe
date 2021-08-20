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
      <div className="centerDiv">
        <DesignHandler
          design={design}
          setDesign={setDesign}
          setThumbRender={setThumbRender}
        />
      </div>
      <div className="centerDiv">
        <ThumbDisplay
          garment={garment}
          setGarment={setGarment}
          thumbRender={thumbRender}
        />
      </div>

      <div className="centerDiv">
        <Swatch garment={garment} setGarment={setGarment} />
      </div>

      <ButtonContainer>
        <button
          // className="designBtn btn btn-primary"
          onClick={handleScalableMockup}>
          Preview Design
        </button>
        <button
        // className="designBtn btn btn-primary"
        onClick={addProduct}>
          Add To Store
        </button>
      </ButtonContainer>
    </Panel>
  );
};

export default DesignInputPanel;

const ButtonContainer = styled.div`
  // padding: 10px;
  display: flex;
  width: 250px;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Panel = styled.div`
  background: #777;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-between;
  margin: 20px 0 0 15px;
  width: 285px;
  padding: 15px 5px;
  border: solid #333 2px;
  border-radius: 5px;
  height: 620px;
  max-height: 70vh;
  .centerDiv {
    align-self: center;
  }

  button {
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
  }
`;
