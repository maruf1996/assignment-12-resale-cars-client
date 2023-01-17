import React, { useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllSeller = () => {
    const [sellers,setSellers]=useState([]);

    useEffect(()=>{
        fetch('https://resale-cars-server.vercel.app/allSellers')
        .then(res=>res.json())
        .then(data=>setSellers(data))
    },[])

    return (
        <div className='my-3'>
        <h3 className='mb-2 fw-bold text-secondary'>All Seller Details</h3>
        <Table>
       <Thead>
           <Tr>
           <Th>#</Th>
           <Th>Name</Th>
           <Th>Email</Th>
           <Th>type of Account</Th>
           </Tr>
       </Thead>
       <Tbody>
       { sellers.length>0 && 
           sellers?.map((seller,i)=><Tr
           key={i}
           >
           <Td>{i+1}</Td>
           <Td>{seller?.name}</Td>
           <Td>{seller?.email}</Td>
           <Td>{seller?.accountType}</Td>
           </Tr>)
        }
       </Tbody>
       </Table>
   </div>
    );
};

export default AllSeller;