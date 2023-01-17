import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../img/banner/banner-1.avif';
import './Banner.css';

const Banner = () => {
   
    return (
      <div className="banner_container">
        <Row className='banner m-0'>
            <Col lg={7}>
            <div className="banner_text">
            <h1>Buy The Best Quality Car's</h1>
            <p className='text-justify'>We're always trying to make many vehicles post ads and useful for you. We hope to enjoy your favorites. Various kind of vehicles product here, start your own search for vehicles online market in World.
            All type of vehicles buy & sale here. We're giving to you vehicles post your ads to reach more people near your business location. Grow your business easily.</p>
            <Link to='/products'><button className='btn btn-danger py-2'>See All Product</button></Link>
            </div>
            </Col>
            <Col lg={5}>
             <img className='banner_img' src={banner} alt="" />
            </Col>
        </Row>
      </div>
    );
};

export default Banner;