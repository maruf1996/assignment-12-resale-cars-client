import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [products,setProducts]=useState([]);
    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`https://resale-cars-server.vercel.app/myProducts?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[user])
    

    const handleAdvertiseItem= id => {
        fetch(`https://resale-cars-server.vercel.app/products/advertise/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('advertise add successful.')
                navigate('/')
            }
        })
    }

    const handleDeleteProduct=id=>{
        const proceed = window.confirm('Are you sure, you want to Delete this Product');
        if (proceed) {
            fetch(`https://resale-cars-server.vercel.app/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Your Product deleted successfully');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className='my-3'>
        <h3 className='mb-2 fw-bold text-secondary'>My Products Details</h3>
        <Table>
       <Thead>
           <Tr>
           <Th>#</Th>
           <Th>Image</Th>
           <Th>Title</Th>
           <Th>Category</Th>
           <Th>Price</Th>
           <Th>Product Adding</Th>
           <Th>Advertise</Th>
           <Th>Delete</Th>
           </Tr>
       </Thead>
       <Tbody>
       {
           products?.map((product,i)=><Tr
           key={product?._id}
           >
           <Td>{i+1}</Td>
           <Td><img src={product?.productImage} className="myOrder-img" alt=""/></Td>
           <Td>{product?.productName}</Td>
           <Td>{product?.productCategory} Clock</Td>
           <Td>${product?.resalePrice}</Td>
           <Td>{product?.productAddingDate}</Td>
           <Td>{ product?.advertise !== 'advertise' && <button onClick={() => handleAdvertiseItem(product?._id)} className='btn fw-bold text-light btn-sm btn-info w-100'>Advertise</button>}</Td>
           <Td><button onClick={()=>handleDeleteProduct(product?._id)} className='btn fw-bold text-light btn-sm btn-dark w-100'>Delete</button></Td>
           </Tr>)
           }
       </Tbody>
       </Table>
   </div>
    );
};

export default MyProduct;