import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">COMPANY</h3>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sexuality</a></li>
            <li><a href="#">Driver Cortex</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">INFORMATION</h3>
          <ul className="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">INFORMATION</h3>
          <ul className="footer-links">
            <li><a href="#">Customer service</a></li>
            <li><a href="#">Recommend and support</a></li>
            <li><a href="#">Signup a restaurant</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Terms of use</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe-section">
          <h3 className="footer-heading">SUBSCRIBE NOW</h3>
          <div className="subscribe-form">
            <input 
              type="email" 
              placeholder="You email" 
              className="subscribe-input"
            />
            <button className="subscribe-button">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2019 Macs Impressions. Designed by Tran Mau Tri Tan for Macs Impressions. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;