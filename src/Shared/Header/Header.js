import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);

    return (
     <div className="header">
       <Navbar className='navbar' expand="lg">
        <Link to='/' className='text-decoration-none'><h1 className='web-title-1'>Resale<span className='web-title'>Cars</span></h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar_nav">
            <Link to="/">Home</Link>
            <Link to="/products">Hot Deals</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dashboard">Dashboard</Link>
            {!user?.email? <Link to="/login">Login</Link>:
            <button onClick={logOut} className='btn logOut_btn btn-secondary fw-bold text-light'>Logout</button>}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
     </div>
    );
};

export default Header;