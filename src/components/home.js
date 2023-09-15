import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import Homeproduct from "./homeproduct";

import "./home.css";
const Home = ({ detail, view, close, setClose, addtocart }) => {
  const [homeProducts, setHomeProducts] = useState(Homeproduct);
  return (
    <>
      {close ? (
        <div className="product-detail">
          <div className="container">
            <button className="closebtn" onClick={() => setClose(false)}>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((e) => {
              return (
                <div className="product-box">
                  <div className="img-box">
                    <img src={e.Img} alt={e.Title} />
                  </div>
                  <div className="detail">
                    <h4>{e.Cat}</h4>
                    <h2>{e.Title}</h2>
                    <p>A screen</p>
                    <h3>
                      <FaRupeeSign />
                      {e.Price}
                    </h3>
                    <button> Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="top-banner">
        <div className="container">
          <div className="detail">
            <h2> The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img-box">
            <img src="./assests/slider.jpeg" alt="slider-image" />
          </div>
        </div>
      </div>
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="./assests/mobile1.jpg" alt="mobile" />
            </div>
            <div className="details">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./assests/headphone.jpg" alt="headphone" />
            </div>
            <div className="details">
              <p>48 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./assests/smartwatch.jpg" alt="headphone" />
            </div>
            <div className="details">
              <p>37 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./assests/chips.jpg" alt="chips" />
            </div>
            <div className="details">
              <p>85 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3>FREE Shipping!</h3>
              <p>order above Rs.600</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaRupeeSign />
            </div>
            <div className="details">
              <h3>Return And Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineReceiptPercent />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProducts.map((e) => {
            return (
              <div className="box" key={e.id}>
                <div className="img-box">
                  <img src={e.Img} alt={e.Title} />
                  <div className="icon">
                    <li onClick={() => addtocart(e)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(e)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="details">
                  <p>{e.Cat}</p>
                  <h3>{e.Title}</h3>
                  <h4>{e.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3> Apple iPad 10.2 9th Gen-2023</h3>
            <p>
              <FaRupeeSign />
              98600.00
            </p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img-box">
            <img src="./assests/slider.jpeg" alt="slider-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
