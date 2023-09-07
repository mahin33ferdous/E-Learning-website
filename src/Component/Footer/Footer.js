import React from 'react';

import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

            
        <div className="footer-left">
            <h3>E<span>Learning</span></h3>

            <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p>

            <p className="footer-company-name">Copyright © 2021 <strong>E-Learning</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Banani</span>
                    Dhaka</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+880168*****</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                <strong>E-Learning</strong> is a oranization where you can find more creative knowladge CSS on coumputer technology
                and
                Arificall intelligence along with
                Meachine learning, Blockchain and Projects using C/C++.
            </p>
            <div className="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
        </footer>
        </div>
    );
};

export default Footer;