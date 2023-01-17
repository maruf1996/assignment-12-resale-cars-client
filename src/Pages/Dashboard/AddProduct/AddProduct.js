import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import './AddProduct.css';

const AddProduct = () => {
    const [isUser]=useUser();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const today = new Date();
    const date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct=data=>{
        const image = data.productImage[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    productName:data.productName,
                    productImage: imgData.data.url,
                    productCategory:data.productCategory,
                    productCondition:data.productCondition,
                    yearOfPurchase:data.yearOfPurchase,
                    productDescription:data.productDescription,
                    location:data.location,
                    originalPrice:data.originalPrice,
                    resalePrice:data.resalePrice,
                    sellerName:isUser?.name,
                    sellerEmail:isUser?.email,
                    phoneNumber:data.phoneNumber,
                    productAddingDate:date
                }

                // save doctor information to the database
                fetch('https://resale-cars-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.productName} is added successfully`);
                    navigate('/products')
                })
            }
        })
    }

    return (
        <div className="add_product">
        <h1 className='mb-2 fw-bold fs-1 text-secondary'>Add a Product</h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>

        <label className="form-label">Product Name</label>
        <input className='form-control form-control-lg mb-2' defaultValue="" {...register("productName", {required: "Product Name is required"})} />
        {errors.productName && <p className='text-danger'>{errors.productName?.message}</p>}

        <label className="form-label">Product Image</label>
        <input type="file" {...register("productImage", {
        required: "Product Image is Required"
        })} className="form-control form-control-lg mb-2" />
        {errors.productImage && <p className='text-danger'>{errors.productImage.message}</p>}

        <label className="form-label mt-2">Product Category</label>
        <select className='p-2 mb-3 w-100' {...register("productCategory", {required: "Product Category is required"})}>
        <option value="Hyundai">Hyundai</option>
        <option value="Tata">Tata</option>
        <option value="Toyota">Toyota</option>
        </select>
        {errors.productCategory && <p className='text-danger'>{errors.productCategory.message}</p>}

        <label className="form-label mt-3">Product Condition</label>
        <select className='p-2 mb-3 w-100' {...register("productCondition", {required: "Product Condition is required"})}>
        <option value="excellent">Excellent</option>
        <option value="good">Food</option>
        <option value="fair">Fair</option>
        </select>
        {errors.productCondition && <p className='text-danger'>{errors.productCondition.message}</p>}

        <label className="form-label">Year of Purchase</label>
        <input className='form-control form-control-lg mb-3' defaultValue="" {...register("yearOfPurchase", {required: "Year of Purchase is required"})} />
        {errors.yearOfPurchase && <p className='text-danger'>{errors.yearOfPurchase?.message}</p>}

        <div className="form-floating">
        <textarea className="form-control py-5" id="floatingTextarea" {...register("productDescription", {required: "Product Description is required"})}></textarea>
        <label htmlFor="floatingTextarea">Description</label>
        {errors.productDescription && <p className='text-danger'>{errors.productDescription?.message}</p>}
        </div>

        <label className="form-label mt-3">Location</label>
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

        <label className="form-label mt-2">Original Price</label>
        <input className='form-control form-control-lg mb-2' defaultValue="" {...register("originalPrice", {required: "Original Price is required"})} />
        {errors.originalPrice && <p className='text-danger'>{errors.originalPrice?.message}</p>}

        <label className="form-label mt-2">Resale Price</label>
        <input className='form-control form-control-lg mb-2' defaultValue="" {...register("resalePrice", {required: "Resale Price is required"})} />
        {errors.resalePrice && <p className='text-danger'>{errors.resalePrice?.message}</p>}

        <label className="form-label mt-2">Seller Name</label>
        <input className='form-control form-control-lg mb-2' readOnly defaultValue={isUser?.name} {...register("sellerName")} />
        
        <label className="form-label mt-2">Seller Email</label>
        <input className='form-control form-control-lg mb-2' readOnly defaultValue={isUser?.email} {...register("sellerEmail")} />

        <label className="form-label mt-2">Phone Number</label>
        <input className='form-control form-control-lg mb-2' {...register("phoneNumber", {required: "Phone Number is required"})} />
        {errors.phoneNumber && <p className='text-danger'>{errors.phoneNumber?.message}</p>}
        
        <input className='btn btn-secondary text-light d-block w-100 btn-lg my-3' type="submit" value='Add Product'/>
        </form>
       </div>
    );
};

export default AddProduct;