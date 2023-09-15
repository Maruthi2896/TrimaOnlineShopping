import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";

import "./navbar.css";
export const Navbar = ({ searchbtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>
          {" "}
          FREE! shipping when shopping more than Rs.600. Each product you buy
          will contributes Rs.20 to Triveni Childern Education Trust
        </p>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="./assests/logo1.png" alt="logo" />
          </div>
          <div className="search-box">
            <input
              type="text"
              value={search}
              placeholder="Search product categories..."
              autoComplete="off"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user-icon">
                  <AiOutlineUser />
                </div>
                <p>Hello,{user.name} </p>
              </div>
            )}

            <div className="second-icon">
              <Link to="/" className="link">
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                Login
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
// {}
