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
            <Leftimage imageURL="media/images/kite.png"  productName="" productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />

            <Rightimage 
            imageURL="media/images/console.png"
            productName="Console"
            productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore=""
            />

            <Leftimage imageURL="media/images/coin.png"  productName="Coin" productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." learnMore="" googlePlay="" appStore="" />

            <Rightimage 
            imageURL="media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore=""
            />

            <Leftimage imageURL="media/images/varsity.png"  productName="Varsity mobile" productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." googlePlay="" appStore="" />
            <h4 className='text-center mt-5' ><a style={{ textDecoration: "none" }}>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>Zerodha.tech </a>blog.</a></h4>
            <Universe />
        <Footer/>
        </>
    );
}

export default ProductPage;
