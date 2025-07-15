import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import NavBar from '../Navbar';
import Footer from '../Footer';

function Pricing() {
    return ( 
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavBar />
            <Hero />
            <h1>Pricing</h1>
            <Brokerage />
            <Footer />
        </div>
     );
}

export default Pricing;