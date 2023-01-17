import React, { useContext, useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);
    const [buyers,setBuyers]=useState([]);

    useEffect(()=>{
        fetch(`https://resale-cars-server.vercel.app/myBuyers?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setBuyers(data))
    },[user])
    return (
        <div className='my-3'>
        <h3 className='mb-2 fw-bold text-secondary'>My Buyers Details</h3>
        <Table>
       <Thead>
           <Tr>
           <Th>#</Th>
           <Th>Product</Th>
           <Th>Price</Th>
           <Th>Buyer Name</Th>
           <Th>Buyer Email</Th>
           <Th>Buyer Phone</Th>
           <Th>Location</Th>
           </Tr>
       </Thead>
       <Tbody>
       {
           buyers?.map((buyer,i)=><Tr
           key={buyers?._id}
           >
           <Td>{i+1}</Td>
           <Td>{buyer?.productName}</Td>
           <Td>${buyer?.price}</Td>
           <Td>{buyer?.buyerName}</Td>
           <Td>{buyer?.buyerEmail}</Td>
           <Td>{buyer?.phone}</Td>
           <Td>{buyer?.location}</Td>
           </Tr>)
           }
       </Tbody>
       </Table>
   </div>
    );
};

export default MyBuyers;