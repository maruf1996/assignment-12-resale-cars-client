import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category }) => {
  const { categoryName, categoryImg, Details } = category;
  return (
    <Col className="">
      <Card className="text-dark">
        <Card.Img className="category_img" variant="top" src={categoryImg} />
        <Card.Body>
          <Card.Title>{categoryName} Clocks</Card.Title>
          <Card.Text>{Details.slice(0, 250)}</Card.Text>
          <Link to={`/category/${categoryName}`}>
            <button
              style={{ background: "#F8F9FA", color: "black" }}
              className="btn py-3 w-100"
            >
              All {categoryName} Cars
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
