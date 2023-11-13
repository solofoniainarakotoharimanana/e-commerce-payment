import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [productInCart, setProductInCart] = useState([]);
  const productData = useSelector((store) => store.bazar.productData);
  useEffect(() => {
    setProductInCart(productData);
  }, []);

  console.log(productInCart);
  return <div>Cart</div>;
};

export default Cart;
