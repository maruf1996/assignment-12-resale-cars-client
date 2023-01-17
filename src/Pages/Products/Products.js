import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Product from '../../Shared/Product/Product';
import './Products.css';

const Products = () => {
    const products=useLoaderData();
    const [bookingProduct,setBookingProduct] = useState(null);

    return (
        <div>
        { products.length>0 ?<>
        <h1 className='text-center fw-bold mt-2'>Your All Favorite <span className='text-danger'>Cars</span></h1>
        <Row lg={3} className="g-4 mb-2 mx-0">
            {
                products.map(product=><Product
                key={product._id}
                product={product}
                setBookingProduct={setBookingProduct}
                ></Product>)
            }
        </Row>
        </>:
        <div className='text-center fw-bold text-danger'>
        <h1 >Oops!</h1>
        <h1>Product is Empty</h1>
        </div>
        }
        {
            bookingProduct && <BookingModal
            bookingProduct={bookingProduct}
            setBookingProduct={setBookingProduct}
            ></BookingModal>
        }
        </div>
    );
};

export default Products;