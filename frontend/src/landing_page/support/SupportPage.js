import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import NavBar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar />
        <Hero />
        <CreateTicket />
        <Footer />
        </div>
     );
}

export default SupportPage;