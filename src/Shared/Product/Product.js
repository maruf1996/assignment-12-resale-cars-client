import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./Product.css";

const Product = ({ product, setBookingProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    productName,
    productImage,
    productCategory,
    originalPrice,
    resalePrice,
    productCondition,
    yearOfPurchase,
    sellerName,
    sellerEmail,
    phoneNumber,
    location,
    productDescription,
    productAddingDate,
  } = product;
  useTitle(`Product`);
  return (
    <Col>
      <Card className="shadow-sm">
        <Card.Img className="product_img" variant="top" src={productImage} />
        <Card.Body>
          <Card.Title className="fw-bold">{productName}</Card.Title>
          <h6>
            <span className="fw-bold">Original Price:</span> ${originalPrice}
          </h6>
          <h6>
            <span className="fw-bold">Resale Price:</span> ${resalePrice}
          </h6>
          <h6>
            <span className="fw-bold">Product Condition:</span>{" "}
            {productCondition}
          </h6>
          <h6>
            <span className="fw-bold">Year Of Purchase:</span> {yearOfPurchase}
          </h6>
          <h6>
            <span className="fw-bold">Category:</span> {productCategory} Clock
          </h6>
          <h6>
            <span className="fw-bold">Product Add:</span> {productAddingDate}
          </h6>
          <h6>
            <span className="fw-bold">Seller Name:</span> {sellerName}
          </h6>
          <h6>
            <span className="fw-bold">Seller Email:</span> {sellerEmail}
          </h6>
          <h6>
            <span className="fw-bold">Phone Number:</span> {phoneNumber}
          </h6>
          <h6>
            <span className="fw-bold"> Location:</span> {location}
          </h6>
          <p>{productDescription?.slice(0, 320)}</p>
          {user?.email ? (
            <Button
              className="float-end btn-primary btn fw-bold"
              onClick={() => setBookingProduct(product)}
            >
              Buy Now
            </Button>
          ) : (
            <Link
              to="/login"
              className="float-end fw-bold text-decoration-none p-2 rounded"
              style={{ background: " teal", color: "white" }}
              onClick={() => setBookingProduct(product)}
            >
              Buy Now
            </Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
