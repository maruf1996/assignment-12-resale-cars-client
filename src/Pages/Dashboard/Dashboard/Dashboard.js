import React, { useContext } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import useTitle from '../../../hooks/useTitle';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import './Dashboard.css';

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    useTitle('Dashboard')

    return (
        <div>
            <Header></Header>
            <Row className='m-0'>
            <Col lg={2} >
            <ListGroup className='dashboard_link_container' variant="flush">
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard">My orders</Link></ListGroup.Item>
                {isSeller &&
                <>
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard/addProduct">Add a Product</Link></ListGroup.Item>
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard/myProducts">My Products</Link></ListGroup.Item>
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard/myBuyers">My buyers</Link></ListGroup.Item>
                </>}
              {isAdmin &&
              <>
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard/allSellers">All Sellers</Link></ListGroup.Item>
                <ListGroup.Item className='dashboard_list'><Link to="/dashboard/allUsers">All Users</Link></ListGroup.Item>
              </>}
            </ListGroup>
            </Col>
            <Col lg={10}>
                <Outlet></Outlet>
            </Col>
        </Row>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;