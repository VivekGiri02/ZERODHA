import React from 'react';
import Team from './Team';
import Hero from './Hero';
import NavBar from '../Navbar';
import Footer from '../Footer';

function AboutPages() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavBar />
            <Hero />
            <Team />
            <div className="container p-5">
                <div 
                    className="d-flex justify-content-center align-items-start gap-5 flex-wrap"
                    style={{ lineHeight: "1.8", fontSize: "1.2em" }}
                >
                    <div className="text-center">
                        <img src="media/images/Nikhil.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">Nikhil Kamath</h5>
                        <h6 className="text-muted">Co-founder & CFO</h6>
                    </div><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="text-center">
                        <img src="media/images/kailash.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">Dr. Kailash Nadh</h5>
                        <h6 className="text-muted">CTO</h6>
                    </div><br/><br/><br/><br/>
                    <div className="text-center">
                        <img src="media/images/Venu.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">Venu Madhav</h5>
                        <h6 className="text-muted">COO</h6>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <div 
                    className="d-flex justify-content-center align-items-start gap-5 flex-wrap"
                    style={{ lineHeight: "1.8", fontSize: "1.2em" }}
                >
                    <div className="text-center">
                        <img src="media/images/Hanan.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">Hanan Delvi</h5>
                        <h6 className="text-muted">COO</h6>
                    </div><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="text-center">
                        <img src="media/images/Seema.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">DSeema Patil</h5>
                        <h6 className="text-muted">Director</h6>
                    </div><br/><br/><br/><br/>
                    <div className="text-center">
                        <img src="media/images/karthik.jpg" style={{ borderRadius: "100%", width: "250px" }} />
                        <h5 className="mt-3">Karthik Rangappa</h5>
                        <h6 className="text-muted">Chief of Education</h6>
                    </div>
                </div>
            </div>
            <div className='text-center , mb-5'>
                <img src='media/images/Austin.jpg' style={{ borderRadius: "100%" , width: "250px"}} />
                <h5 className="mt-5">Austin Prakesh</h5>
                <h6 className='text-muted'>Director Strategy</h6>
            </div>
            <Footer />
        </div>
    );
}

export default AboutPages;
