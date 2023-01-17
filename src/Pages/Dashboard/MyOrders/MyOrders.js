import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders,setOrders]=useState([]);

    useEffect(()=>{
        fetch(`https://resale-cars-server.vercel.app/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user])

    const handleCancelOrder=id=>{
        const proceed = window.confirm('Are you sure, you want to Cancel this Order');
        if (proceed) {
            fetch(`https://resale-cars-server.vercel.app/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Your Order is Cancelled');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div className='my-3'>
        <h3 className='mb-2 fw-bold text-secondary'>My Orders Details</h3>
        <Table>
       <Thead>
           <Tr>
           <Th>#</Th>
           <Th>Image</Th>
           <Th>Title</Th>
           <Th>Price</Th>
           <Th>Order Date</Th>
           <Th>Cancel</Th>
           <Th>Pay</Th>
           </Tr>
       </Thead>
       <Tbody>
       {
           orders?.map((order,i)=><Tr
           key={order?._id}
           >
           <Td>{i+1}</Td>
           <Td><img src={order?.productImage} className="myOrder-img" alt=""/></Td>
           <Td>{order?.productName}</Td>
           <Td>${order?.price}</Td>
           <Td>{order?.bookingDate}</Td>
           <Td><button onClick={()=>handleCancelOrder(order?._id)} className='btn fw-bold text-light btn-sm btn-dark w-100'>X</button></Td>
           <Td><Link to={`/dashboard/${order?._id}`}><button className='btn fw-bold text-light btn-sm btn-primary w-100'>Pay</button></Link></Td>
           </Tr>)
           }
       </Tbody>
       </Table>
   </div>
    );
};

export default MyOrders;