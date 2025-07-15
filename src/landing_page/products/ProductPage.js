import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage'; 
import Rightimage from './Rightimage';
import Universe from './Universe';
import NavBar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
        <NavBar />
            <Hero />
            <Leftimage />
            <Rightimage />
            <Universe />
            <h1>ProductPage</h1>
        <Footer/>
        </>
    );
}

export default ProductPage;
