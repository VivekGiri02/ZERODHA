import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mt-5 mb-4 " id="supportWrapper">
                <h4 className="fw-semibold">Support Portal</h4>
                <a href="#">Track tickets</a>
            </div>

            <div className="row px-5 ms-5" id="supportContent">
                <div className="col-md-8">
                    <div className="mb-4" id="searchBoxWrapper">
                        <h4 className="fs-5 mb-3">
                            Search for an answer or browse help topics to create a ticket
                        </h4>
                        <input
                            type="text"
                            className="form-control shadow-sm small-search-box"
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."/>
                    </div>

                    <div className="d-flex flex-wrap gap-4 quick-links">
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intraday margins</a>
                        <a href="#">Kite user manual</a>
                    </div>
                </div>

                <div className="col-md-3  mr-4">
                    <h5 className="fw-semibold">Featured</h5>
                    <ol className="ps-3 mt-3">
                        <li>
                            <a href="#">Quarterly Settlement of Funds – July 2025</a>
                        </li>
                        <li>
                            <a href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
