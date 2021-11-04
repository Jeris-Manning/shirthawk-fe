import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

const ThumbDisplay = ({ garment, setGarment, thumbRender }) => {
  const [designArray, setDesignArray] = useState();
  useEffect(() => {
    async function fetchDesigns() {
      let fetchedDesigns = await axios.get(
        "https://shirthawk.herokuapp.com/api/designs"
      );
      setDesignArray(fetchedDesigns.data);
    }
    fetchDesigns();
  }, [thumbRender]);

  if (!designArray) {
    return <h1>loading</h1>;
  }
  return (
    <Fragment>
      <PicDisplay>
        {designArray.map((image) => (
          <a href="#section" key={image.id}>
            <img
              src={image.thumbnail_url}
              alt={image.design_name}
              key={image.id}
              onClick={() =>
                setGarment({
                  ...garment,
                  artwork: image.design_url,
                })
              }
            />
          </a>
        ))}
      </PicDisplay>
    </Fragment>
  );
};

export default ThumbDisplay;

const PicDisplay = styled.div`
  width: 260px;
  border: solid black 1px;
  display: flex;
  flex-wrap: wrap;
  margin: 2px 0;
  justify-content: flex-start;
  background-color: #d5ffc4;
  border-radius: 3px;
  a {
    height: 40px;
    width: 40px;
    margin: 3px;
  }
  img {
    height: 40px;
    width: 40px;
    margin: 3px;
    padding: 3px;
    border: solid black 2px;
    border-radius: 4px;
    background-color: #94df69;
  }
`;
