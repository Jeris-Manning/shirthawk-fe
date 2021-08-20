import React, { Fragment } from "react";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
import "../App.css";

const ProductCard = ({ product, addToCart }) => {
  console.log("product", product);
  return (
    <Fragment>
      <Col xs="6" lg="4">
        <Card className="merchCard m-1">
          <CardImg
            top
            width="100%"
            height="auto"
            src={product.fullSizeURL}
            alt="T-shirt"
          />
          <CardBody className="product-card-padding">
            <CardTitle className="h5 text-center">{product.design}</CardTitle>
            <CardText>
              <small className="text-muted">{product.name}</small>
            </CardText>
            <CardText>${product.price}</CardText>
            <Button
              // className="btn-primary cardBtn"
              size="sm"
              onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ProductCard;

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
