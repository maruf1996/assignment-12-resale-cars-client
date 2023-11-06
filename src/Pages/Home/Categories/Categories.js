import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Category from "../Category/Category";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://resale-cars-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="category_section">
      <div className="category_container">
        <h1
          style={{ color: " #214167" }}
          className="fw-bold fs-1 text-center mt-5 mb-2"
        >
          Ads By Category
        </h1>
        <Row xs={1} md={3} className="g-4 m-0">
          {categories?.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Categories;
