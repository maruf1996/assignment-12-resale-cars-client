import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://resale-cars-server.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="category_section">
        <div className='category_container'>
        <h1 className='fw-bold text-danger fs-1 my-2'><span className='text-dark'>Ads</span> By Category</h1>
        <Row xs={1} md={3} className="g-4 m-0">
        {
            categories?.map(category=><Category
            key={category._id}
            category={category}
            ></Category>)
        }
        </Row>
        </div>
        </div>
    );
};

export default Categories;