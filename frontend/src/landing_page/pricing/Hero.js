import React, { useState } from 'react';

function Hero() {
    const [activeTab, setActiveTab] = useState('equity');

    return (
        <div className="container mt-5">
            {/* Tabs */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'equity' ? 'active' : ''}`}
                        onClick={() => setActiveTab('equity')}
                    >
                        Equity
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'currency' ? 'active' : ''}`}
                        onClick={() => setActiveTab('currency')}
                    >
                        Currency
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'commodity' ? 'active' : ''}`}
                        onClick={() => setActiveTab('commodity')}
                    >
                        Commodity
                    </button>
                </li>
            </ul>

            {/* Table Section */}
            <div className="mt-4 ps-4">
                {/* Equity Table */}
                {activeTab === 'equity' && (
                    <table className="table table-bordered text-center fs-6">
                        <thead className="table-light">
                            <tr>
                                <th></th>
                                <th>Equity Delivery</th>
                                <th>Equity Intraday</th>
                                <th>F&O - Futures</th>
                                <th>F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted">
                            <tr>
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>Flat ₹20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.02% on the sell side</td>
                                <td>
                                    ➼ 0.125% of intrinsic value (if exercised)<br />
                                    ➼ 0.1% on sell side (on premium)
                                </td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                <td>NSE: 0.00173% <br /> BSE: 0</td>
                                <td>NSE: 0.03503% <br /> BSE: 0.0325%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td colSpan="4">₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {/* Currency Table */}
                {activeTab === 'currency' && (
                    <table className="table table-bordered text-center fs-6">
                        <thead className="table-light">
                            <tr>
                                <th></th>
                                <th>Currency Futures</th>
                                <th>Currency Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted">
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                                <td>NSE: 0.00237% <br /> BSE: 0.00975%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td >18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td >18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td >₹10 / crore</td>
                                <td >₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {/* Commodity Table */}
                {activeTab === 'commodity' && (
                    <table className="table table-bordered text-center fs-6">
                        <thead className="table-light ps-5">
                            <tr>
                                <th></th>
                                <th>Commodity Futures</th>
                                <th>Commodity Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted">
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021%<br/>
                                NSE: 0.0001%</td>
                                <td>MCX: 0.0418%<br/>
                                NSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>Agri:
                                ₹1 / crore
                                Non-agri:
                                ₹10 / crore                                
                                </td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td >0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                <h4 className='text-center mt-5 text-muted' ><a href='' style={{ textDecoration: "none"}}>Calculate your costs upfront </a>using our brokerage calculator</h4>
            </div>
        </div>
    );
}

export default Hero;
