import React from 'react';

function Leftimage({ imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-md-6 ps-md-5">
                    <img src={imageURL} alt={productName} style={{ width: "80%", borderRadius: "10px" }} />
                </div>
                <div className="col-md-6 ps-md-5">
                    <h2 className="mb-3">{productName}</h2>
                    <p className="mb-4" style={{ width: "100%", borderRadius: "10px" }}>
                        {productDesription}
                    </p>

                    <div className="mb-4">
                        <a href={tryDemo} className="me-4 text-decoration-none">Try Demo</a>
                        <a href={learnMore} className="text-decoration-none">Learn More</a>
                    </div>

                    <div>
                        <a href={googlePlay} className="me-4">
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftimage;