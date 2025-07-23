import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This effect runs when the component loads to check localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []); // The empty array [] means this runs only once

  return (
      <nav className="navbar navbar-expand-lg border-bottom" 
      style={{backgroundColor :"rgb(184, 207, 224)"}}
      >
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg"style={{width:"25%"}} alt="Logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
                <ul className="navbar-nav mb-lg-0">
                  
                  {/* === Conditional Rendering Logic === */}
                  {isLoggedIn ? (
                    // If user IS logged in, show Logout link
                    <li className="nav-item">
                      <Link className="nav-link active" to="/logout">
                        Logout
                      </Link>
                    </li>
                  ) : (
                    // If user is NOT logged in, show Signup link
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/signup">
                        Signup
                      </Link>
                    </li>
                  )}
                  {/* ==================================== */}

                  <li className="nav-item">
                    <Link className="nav-link active" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products">
                      Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/support">
                      Support
                    </Link>
                  </li>
                </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;