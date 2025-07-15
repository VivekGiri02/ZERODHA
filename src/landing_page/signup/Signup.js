import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';

function Signup() {
    return ( 
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar />
        <h1>Signup</h1>
        <Footer />
        </div>
     );
}

export default Signup;