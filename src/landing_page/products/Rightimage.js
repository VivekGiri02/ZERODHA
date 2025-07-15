import React from 'react';

function Rightimage({ imageURL, productName, productDesription, learnMore }) {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 ps-md-5">
                    <h2 className="mb-3">{productName}</h2>
                    <p className="mb-4">
                        {productDesription}
                    </p>
                    <div className="mb-4">
                        <a href={learnMore} className="text-decoration-none">Learn More</a>
                    </div>
                </div>
                <div className="col-md-6 ps-md-5">
                    <img src={imageURL} alt={productName} style={{ width: "80%", borderRadius: "10px" }} />
                </div>
            </div>
        </div>
    );
}

export default Rightimage;
