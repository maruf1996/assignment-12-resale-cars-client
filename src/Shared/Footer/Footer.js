import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footerArea">
          <div className="container">
            <div className="topFooter">
              <div className="row">
                <div className="col-lg-4 col-md-10 leftSide">
                  <p>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                    Bangladesh
                  </p>
                </div>
                <div className="col-lg-2  col-md-10 footerLink">
                  <h5>Company</h5>
                  <ul>
                    <li>about</li>
                    <li>project</li>
                    <li>our team</li>
                    <li>team condition</li>
                    <li>submit listing</li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-10 footerLink">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>Quick Links</li>
                    <li>Rentals</li>
                    <li>Sales</li>
                    <li>Contact</li>
                    <li>Our blog</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-10">
                  <h5>About us</h5>
                  <p>
                    consectetur adipiscing elit. Purus commodo ipsum duis
                    laoreet maecenas.
                  </p>
                  <div className="socialIcon">
                    <FaFacebookF className='icon'></FaFacebookF>
                    <FaInstagram className='icon'></FaInstagram>
                    <FaLinkedin className='icon'></FaLinkedin>
                    <FaYoutube className='icon'></FaYoutube>
                  </div>
                </div>
              </div>
              <div className="botomFooter   text-start ">
                <p>Copyright &copy; by || maruf billah 2023</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;