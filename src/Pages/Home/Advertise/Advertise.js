import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Advertise.css';

const Advertise = () => {
    const [advertiseItem,setAdvertiseItem]=useState([]);

    useEffect(()=>{
        fetch('https://resale-cars-server.vercel.app/advertise')
        .then(res=>res.json())
        .then(data=>setAdvertiseItem(data))
    },[])

    return (
      <div className="stay_container">
      <div className="sec_title pt-2">
        <h1 className='fw-bold text-danger'><span className='text-dark'>Advertise</span> Cars</h1>
      </div>
      <div className="row m-0 p-0">
        {
          advertiseItem?.map(item=><div className="col-lg-2 py-2">
          <Link to='/products'>
          <div className="card border p-3">
            <img className='advertiseImage' src={item?.productImage} alt="" />
          </div>
          </Link>
        </div>)
        }
      </div>
    </div>
    );
};

export default Advertise;