import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const productData = useSelector((store) => store.bazar.productData);
  const userInfo = useSelector((store) => store.bazar.userInfo);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((p) => {
      price += p.price * p.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout");
      setPayNow(false);
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token,
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] px-6 py-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="font-medium text-2xl">Cart totals</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal
            <span className="font-titleFont font-bold text-lg">
              $ {totalAmt}
            </span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping
            <span className="text-xs text-black">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </span>
          </p>
        </div>
        <p className="font-titleFont font-semibold flex justify-between mt-6">
          Total
          <span className="text-xl font-bold text-black">$ {totalAmt}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="bg-black text-white text-xs p-3 w-full hover:bg-gray-500 duration-500 hover:border-none mt-3"
        >
          Proceed to checkout
        </button>
        {payNow && (
          <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="sk_test_51OBBefGdJe0CaPtvCMUBL67jRzqewd1ybVHGIEtOzChYMJslmxzB7E8PF7sPjyEGz4983aaP4YVNecUSjVy1tQGe005vOhMDDi"
              name="Bazar online shopping"
              amount={totalAmt * 100}
              label="Pay to bazar"
              description={`Your payment amount is ${totalAmt}`}
              token={payment}
              email={userInfo.email}
            />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
