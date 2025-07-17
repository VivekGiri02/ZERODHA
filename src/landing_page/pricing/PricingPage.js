import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import NavBar from '../Navbar';
import Footer from '../Footer';

function Pricing() {
    return ( 
        <>
            <NavBar />
            <div className='container '>
                <div className='row text-center p-5'>
                    <h1 className='mt-4 p-2 text-size:"100%" '>Charges</h1>
                    <p className="mb-2 fs-4 text-muted " style={{ textDecoration: "none" }}>
                        List of all charges and taxes.
                    </p>
                </div>
            </div>
            <div className="container mt-5 p-5">
                <div className="row text-center">
                    <div className="col-4 p-4">
                        <img style={{ width: "70%" }} src="/media/images/pricing0.svg" alt="Smallcase" />
                        <h1>Intraday and F&O trades</h1>
                        <p className="text-muted " style={{ textDecoration: "none" }}>
                            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                    <div className="col-4 p-4">
                        <img style={{ width: "70%" }} src="/media/images/intradayTrades.svg" alt="Smallcase" />
                        <h1>Intraday and F&O</h1>
                        <p className="text-muted" style={{ textDecoration: "none" }}>
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>

                    <div className="col-4 p-4">
                        <img style={{ width: "70%" }} src="/media/images/pricing0.svg" alt="Smallcase" />
                        <h1>Free direct MF</h1>
                        <p className="text-muted" style={{ textDecoration: "none" }}>
                            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
            <Hero />
            <Brokerage />
            <Footer />
        </>
    );
}

export default Pricing;
