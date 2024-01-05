import React, { useState } from "react";
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';
import { logout } from "../Admin/Auth/auth";
 

function Header() {
  const [isSignedIn, setIsSignedIn] = useState( // Corrected variable name
    localStorage.getItem("access_token") || false
  );

  const signout = () => {
    setIsSignedIn(false);
    logout();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="./" className="logo d-flex align-items-center">
            <h1>UpConstruction<span>.</span></h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar navbar-toggle">
            <ul>
              <li><a href="./" className="">Home</a></li>
              <li><a href="./about">About</a></li>
              <li><a href="./service">Services</a></li>
              <li><a href="./project">Projects</a></li>
              <li><a href="./team">Team</a></li>
              <li><a href="./blog">Blog</a></li>
              <li><a href="./shop">Shop</a></li>
             
              <li className="dropdown">
                <span className=" text-white">BRANCH<i className="bi bi-chevron-down dropdown-indicator" ></i></span>
                <ul>
                  <li><a href="#"></a></li>
                  <li className="dropdown"><a href="#"><span>Dhaka</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="/mirpur">Mirpur</a></li>
                      <li><a href="/bonani">Banani</a></li>
                      <li><a href="/motijil">Motijheel</a></li>
                      <li><a href="/dhanmondi">Dhanmondi</a></li>
                      <li><a href="/kotwali">Kotwali</a></li>
                    </ul>
                  </li>
                  <li><a href="/chattogram">Chattogram</a></li>
                  <li><a href="/rajshahi">Rajshahi</a></li>
                  <li><a href="/sylhet">Sylhet</a></li>
                </ul>
              </li>
              <li><a href="./contact">Contact</a></li>
              <br />
              <ul className="button">
                {isSignedIn ? (
                  <li className="btn btn-secondary"><a href="/" onClick={signout}>sign Out</a>
                  <li className=""> <a href="/dashboard"> Dashboard</a></li>
                  </li>
                ) : (
                  <>
                    <li className="btn btn-info"><a href="./signin">Sign in</a></li>
                    <li  className="btn btn-primary"><a href="./register">Sign Up</a></li>
                    
                  </>
                )}
              </ul>
            </ul>
          </nav>
         
        </div>
      </header>
    </div>
  );
}

 
export default Header;
