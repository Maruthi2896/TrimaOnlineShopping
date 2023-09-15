import React from "react";
import "./developer.css";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const developer = () => {
  return (
    <>
      <div className="profile">
        <div className="propimage">
          <img src="./assests/maruthiTripPic.jpg" alt="maruthi K j" />
          <h2>Maruthi K J</h2>
          <h4>Fullstack web developer</h4>
          <p>Guvi-Zen Certified</p>
          <div className="propicon">
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
    </>
  );
};

export default developer;
