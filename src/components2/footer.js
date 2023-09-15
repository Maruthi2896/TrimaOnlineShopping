import React from "react";
import { BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./assests/logo1.png" alt="logo"></img>
            </div>
            <div className="detail">
              <p>
                Trima is an Indian e-commerce company, headquartered in
                Davanagere, and incorporated in Bangalore as a private limited
                company.sponsored by Maari Enterprises,Maintained By Triveni
                Groups.
              </p>
              <div className="icon">
                <li>
                  <Link to="https://github.com/Maruthi2896">
                    <BiLogoGithub />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/maruthi_kj_nayaka/?igshid=OGQ5ZDc2ODk2ZA==">
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/maru.maruthi.1612">
                    <BiLogoFacebook />
                  </Link>
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
         
        </div>
        <Link to="/developer" className="link">
             Designed By
           </Link>
      </div>
   
    </>
  );
};

export default Footer;
