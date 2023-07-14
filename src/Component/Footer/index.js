import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="card-container">
        <div className="footer-card">
          <h3>About Company</h3>
          <p>
            Shopify is here at your quick and easy service for
            <br /> shopping <br />
            Contact Information
            <br />
            Email: contact@Shopify.com
            <br />
            Phone: +91 9884318888
            <br />
            Mumbai, India
          </p>
        </div>
        <div className="footer-card">
          <h3>Information</h3>
          <p>
            Terms and Conditions
            <br />
            Guarantee and Return Policy <br />
            Contact Us <br />
            Privacy Policy <br />
            Locate Us
          </p>
        </div>
        <div className="footer-card">
          <h3>News Letter</h3>
          <p>
            News Letter
            <br />
            Signup to get exclusive offers from our favorite brands <br />
            and to be updated with the latest news <br />
            <input className="email-input" type="email" placeholder="Your Email" />
            <br /><br/>
            <button className="subscribe-button">Subscribe</button>
          </p>
        </div>
      </div>
      <hr />
      <p className="para">
        @2023 Shopify | All rights reserved | Terms Of Service | Privacy
      </p>
    </div>
  );
}

export default Footer;
