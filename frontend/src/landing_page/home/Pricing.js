import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>We pioneered the conceot of dicount broking and price
                        transpaency in india. Flat fees and no hidden charges.</p>
                        <a href=''style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                <div className='row text-center'>
                    <div className='col p-2 border'>
                        <h1 className='mb-3'>$0</h1>
                        <p>Free ewuity delivery and direct mutal funds</p>
                    </div>
                    <div className='col p-2 border'>
                        <h1>$4</h1>
                        <p>Intraday and F&0</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;