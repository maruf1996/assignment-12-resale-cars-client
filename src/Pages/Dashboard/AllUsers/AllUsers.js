import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllUsers = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://resale-cars-server.vercel.app/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const handleAdminUser= id => {
        fetch(`https://resale-cars-server.vercel.app/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('User add Admin successful.')
                window.location.reload()
            }
        })
    }

    const handleDeleteUser=id=>{
        const proceed = window.confirm('Are you sure, you want to Delete this User');
        if (proceed) {
            fetch(`https://resale-cars-server.vercel.app/users/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('This User deleted successfully');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <div className='my-3'>
        <h3 className='mb-2 fw-bold text-secondary'>All Users Details</h3>
             <Table>
            <Thead>
                <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>type of Account</Th>
                <Th>Role</Th>
                <Th>Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
            {
                users?.map((user,i)=><Tr
                key={user?._id}
                >
                <Td>{i+1}</Td>
                <Td>{user?.name}</Td>
                <Td>{user?.email}</Td>
                <Td>{user?.accountType}</Td>
                <Td>{ user?.role !== 'admin' ? <button onClick={() => handleAdminUser(user?._id)} className='btn fw-bold text-light btn-sm btn-primary w-100'>Make Admin</button>:
                <button className='btn fw-bold text-light btn-sm btn-secondary w-100' disabled>Admin</button>
                }</Td>
                <Td><button onClick={()=>handleDeleteUser(user?._id)} className='btn fw-bold text-light btn-sm btn-dark w-100'>Delete</button></Td>
                </Tr>)
                }
            </Tbody>
            </Table>
        </div>
    );
};

export default AllUsers;