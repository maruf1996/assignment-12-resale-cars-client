import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../../Shared/BookingModal/BookingModal";
import Product from "../../../Shared/Product/Product";

const CategoryProducts = () => {
  const products = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  console.log(products);

  return (
    <div className="my-5">
      {products.length > 0 ? (
        <>
          <h1
            style={{ color: "#214167" }}
            className="text-center fw-bold mb-3 mt-5"
          >
            Your All Favorite Cars
          </h1>
          <Row lg={3} className="g-4 mb-2 mx-0">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                setBookingProduct={setBookingProduct}
              ></Product>
            ))}
          </Row>
        </>
      ) : (
        <div className="text-center my-5 fw-bold text-danger">
          <h1>Oops!</h1>
          <h1>Product is Empty</h1>
        </div>
      )}
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoryProducts;
