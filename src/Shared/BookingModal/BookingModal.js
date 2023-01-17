import axios from "axios";
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const BookingModal = ({bookingProduct,setBookingProduct}) => {
    const [isUser]=useUser();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const today = new Date();
    const date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    const navigate = useNavigate();

    const handleBookingProduct=data=>{
                const bookingInfo = {
                    buyerName:isUser?.name,
                    buyerEmail:isUser?.email,
                    sellerName:bookingProduct?.sellerName,
                    sellerEmail:bookingProduct?.sellerEmail,
                    sellerPhone:bookingProduct?.phoneNumber,
                    productName:bookingProduct?.productName,
                    productImage:bookingProduct?.productImage,
                    price:bookingProduct?.resalePrice,
                    location:data.location,
                    sellerAddingDate:bookingProduct?.date,
                    bookingDate:date,
                    phone:data.phone
                }

                // save doctor information to the database
                axios.post('https://resale-cars-server.vercel.app/booking',bookingInfo,
                    { headers: { 'Content-Type': 'application/json' }}
                 )
                .then(response => {
                    console.log(response.data)
                    toast.success(`${bookingProduct?.productName} is booking successfully`);
                    navigate('/products')
                    setBookingProduct(null)
                })
                .catch(error => {console.log(error.data)});

                // fetch('https://resale-cars-server.vercel.app/booking', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(bookingInfo)
                // })
                // .then(res => res.json())
                // .then(result =>{
                //     console.log(result);
                //     toast.success(`${bookingProduct?.productName} is booking successfully`);
                //     navigate('/products')
                //     setBookingProduct(null)
                // })
    }

    return (
        <Modal show={bookingProduct} onHide={()=>setBookingProduct(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{bookingProduct?.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <form onSubmit={handleSubmit(handleBookingProduct)}>
        <input className='form-control form-control-lg mb-2' readOnly defaultValue={isUser?.name} {...register("buyerName", {required: "user name is required"})}/>
        {errors.buyerName && <p className='text-danger'>{errors.buyerName?.message}</p>}
        <input className='form-control form-control-lg mb-2' readOnly defaultValue={isUser?.email} {...register("buyerEmail",{required: "user email is required"})} />
        {errors.buyerEmail && <p className='text-danger'>{errors.buyerEmail?.message}</p>}
        <label className="form-label mt-2">Price</label>
        <input className='form-control form-control-lg mb-2' readOnly defaultValue={`$${bookingProduct?.resalePrice}`} {...register("price")} />
        <label className="form-label mt-3">Meeting Location</label>
        <select className='p-2 mb-3 w-100' {...register("location", {required: "Location Condition is required"})}>
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="khulna">Khulna</option>
        <option value="barishal">Barishal</option>
        <option value="sylhet">Sylhet</option>
        <option value="mymensingh ">Mymensingh </option>
        <option value="rangpur">Rangpur </option>
        <option value="rajshahi">Rajshahi </option>
        </select>
        {errors.location && <p className='text-danger'>{errors.location?.message}</p>}
        <input placeholder='Phone' className='form-control form-control-lg mb-2' {...register("phone", {required: "Phone Number is required"})} />
        {errors.phone && <p className='text-danger'>{errors.phone?.message}</p>}
        <input className='btn btn-danger text-light d-block w-100 btn-lg my-3' type="submit" value='Buy'/>
        </form>
        </Modal.Body>
      </Modal>
    );
};

export default BookingModal;