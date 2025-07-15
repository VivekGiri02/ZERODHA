import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import NavBar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function HomePages() {
    return ( 
        <>
        <NavBar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default HomePages;