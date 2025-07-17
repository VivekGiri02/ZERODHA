import React from 'react';

function Brokerage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 ">
                    <h6 className='text-muted'>Securities/Commodities transaction tax</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.7" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                        <br/><br/>
                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <h6 className='text-muted'>Transaction/Turnover Charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                    <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                    <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                    <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

                    <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                </p>
                    <h6 className='text-muted'>Call & trade</h6>
                    <p  className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                    <h6 className='text-muted'>Stamp charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h6 className='text-muted'>NRI brokerage charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ ₹100 per order for futures and options.</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ ₹500 + GST as yearly account maintenance charges (AMC) charges.                     
                    </p>

                    <h6 className='text-muted'>Account with debit balance</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.                     
                    </p>

                    <h6 className='text-muted'>Stamp charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h6 className='text-muted'>Margin Trading Facility (MTF)</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ➼ MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p>
                </div>
                
                {/* Right-Hand Side */}

                <div className="col-6 p-5 ">
                    <h6 className='text-muted'>GST</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                    <h6 className='text-muted'>SEBI Charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                    <h6 className='text-muted'>DP (Depository participant) charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                    <h6 className='text-muted'>Pledging charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>₹30 + GST per pledge request per ISIN.</p>

                    <h6 className='text-muted'>AMC (Account maintenance charges)</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href='' style={{ textDecoration: "none"}}> Click here </a></p>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='' style={{ textDecoration: "none"}}> Click here </a></p>

                    <h6 className='text-muted'>Corporate action order charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <h6 className='text-muted'>Off-market transfer charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>₹25 per transaction.</p>

                    <h6 className='text-muted'>Physical CMR request</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                    <h6 className='text-muted'>Payment gateway charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>₹9 + GST (Not levied on transfers done via UPI)</p>

                    <h6 className='text-muted'>Delayed Payment Charges</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.<a href='' style={{ textDecoration: "none"}}>Learn more.</a></p>

                    <h6 className='text-muted'>Trading using 3-in-1 account with block functionality</h6>
                    <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>➼ Delivery & MTF Brokerage: 0.5% per executed order.</p>
                    <p className=' text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>➼ Intraday Brokerage: 0.05% per executed order.</p>
                </div>
            </div>
            <h6 className='text-muted'>Disclaimer</h6>
            <p className='mt-3 text-muted' style={{ fontSize: "14px", lineHeight: "1.5" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        
        {/* 1st BOX  */}

        <div className="text-muted mt-5" style={{ width: "80%", marginLeft: "auto", marginRight: "10%" }}>
        <h4 className="mb-4 fw-semibold">Charges for account opening</h4>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Type of account</th>
            <th className="text-end">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td className="text-end">
              <span className="badge bg-success px-3 py-2">FREE</span>
            </td>
          </tr>
          <tr className="bg-light">
            <td>Offline account</td>
            <td className="text-end">
              <span className="badge bg-success px-3 py-2">FREE</span>
            </td>
          </tr>
          <tr>
            <td>NRI account <span className="text-muted">(offline only)</span></td>
            <td className="text-end">₹ 500</td>
          </tr>
          <tr className="bg-light">
            <td>Partnership, LLP, HUF, or Corporate accounts <span className="text-muted">(offline only)</span></td>
            <td className="text-end">₹ 500</td>
          </tr>
        </tbody>
      </table>
      </div>

      {/* 2nd BOX */}
      <div className="text-muted mt-5" style={{ width: "80%", marginLeft: "auto", marginRight: "10%" }}>
        <h4 className="mb-4 fw-semibold">Charges for optional value added services</h4>
        <table className="table table-bordered">
       <thead className="table-light">
         <tr>
           <th>Service</th>
           <th>Billing Frequency</th>
           <th>Charges</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td colSpan="3" style={{ height: '10px', backgroundColor: '#fff' }}></td>
         </tr>

         <tr>
           <td>Tickertape</td>
           <td>Monthly / Annual</td>
           <td>Free: 0 | Pro: 249/2399</td>
         </tr>
         <tr className="bg-light">
           <td>Smallcase</td>
           <td>Per transaction</td>
           <td>Buy & Invest More: 100 | SIP: 10</td>
         </tr>
         <tr>
           <td>Kite Connect</td>
           <td>Monthly</td>
           <td>Connect: 500 | Historical: 500</td>
         </tr>
       </tbody>
     </table>
     </div>
    </div>
    );
}

export default Brokerage;
