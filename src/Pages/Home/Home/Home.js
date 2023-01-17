import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ResaleAbout from '../ResaleAbout/ResaleAbout';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ResaleAbout></ResaleAbout>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;