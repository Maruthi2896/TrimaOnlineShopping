import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./cart.css";
import { FaRupeeSign } from "react-icons/fa";
const Cart = ({ cart, setCart }) => {
  //increase quantity:
  const incqty = (product) => {
    const exist = cart.find((e) => {
      return e.id === product.id;
    });
    setCart(
      cart.map((e) => {
        return e.id === product.id ? { ...exist, qty: exist.qty + 1 } : e;
      })
    );
  };
  // dec quantity:
  const decqty = (product) => {
    const exist = cart.find((e) => {
      return e.id === product.id;
    });
    setCart(
      cart.map((e) => {
        return e.id === product.id ? { ...exist, qty: exist.qty - 1 } : e;
      })
    );
  };
  //remove cart product:
  const removeproduct = (product) => {
    const exist = cart.find((e) => {
      return e.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((e) => {
          return e.id !== product.id;
        })
      );
    }
  };
  //total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty"> Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((e) => {
            return (
              <div className="cart-item" key={e.id}>
                <div className="img-box">
                  <img src={e.Img} alt={e.Title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{e.Cat}</h4>
                    <h3>{e.Title}</h3>
                    <p>
                      <FaRupeeSign />
                      {e.Price}
                    </p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(e)}>
                        +
                      </button>
                      <input type="text" value={e.qty} />
                      <button className="decqty" onClick={() => decqty(e)}>
                        -
                      </button>
                    </div>

                    <h4 className="subtotal">
                      sub total:
                      <FaRupeeSign />
                      {e.Price * e.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeproduct(e)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">
              Total: <FaRupeeSign />
              {Totalprice}
            </h2>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
