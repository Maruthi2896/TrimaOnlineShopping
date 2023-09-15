import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout";
import Footer from "./components2/footer";
import Productdetail from "./components/productDetails";

function App() {
  //add to cart
  const [cart,setCart] = useState([]);
  //product detail
  const [close, setClose] = useState(false);
   const [detail,setDetail]=useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
 const searchbtn = (product) => {
    product = product.toLowerCase();
    console.log(product);
    const change = Productdetail.filter((e) => {
      let item = e.Cat.toLowerCase();
      return item === product;
    });
    setProduct(change);
  };
  // product detail
  const view=(product)=>{
    setDetail([{...product}])
    setClose(true);
  }
//add to cart

  const addtocart=(product)=>{
    const exist=cart.find((e)=>{
      return e.id===product.id
    })
    
    if(exist){
      alert("This product is already added to cart")
    }else{
      setCart([...cart,{...product,qty:1}]);
      alert("Product is added to cart!")
    }


  }

  return (
    <>
      <BrowserRouter>
        <Navbar searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view}  close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
