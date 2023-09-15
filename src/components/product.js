import React from "react";
import Productdetail from "./productDetails";
import { FaRupeeSign } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./product.css";
import { Link } from "react-router-dom";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const filterproduct = (product) => {
    const update = Productdetail.filter((e) => {
      return e.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };
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
                    <button onClick={() => addtocart(e)}> Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="products">
        <h2> #Products</h2>
        <p> Home , Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filterproduct("Camera")}>Camera</li>
                <li onClick={() => filterproduct("Powerbank")}>Powerbank</li>
                <li onClick={() => filterproduct("Electronics")}>
                  Electronics
                </li>
                <li onClick={() => filterproduct("Gaming")}>Gaming</li>
                <li onClick={() => filterproduct("Laptops")}>Laptops</li>
                <li onClick={() => filterproduct("SoundBox")}>SoundBox</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((e) => {
                return (
                  <>
                    <div className="box" key={e.id}>
                      <div className="img-box">
                        <img src={e.Img} alt={e.Title} />
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(e)}>
                              <AiOutlineShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}

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
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
