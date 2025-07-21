import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png'alt='Hero Image' className='mb-5'/>
                <h1 className='mt-4'>Open a Zerodha Account</h1>
                <p className='mb-4'>Modern platform and app, 0$ investments, and flat $20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;