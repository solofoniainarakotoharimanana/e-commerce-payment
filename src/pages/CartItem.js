import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const products = useSelector((store) => store.bazar.productData);
  const dispacth = useDispatch();

  return (
    <div className="w-2/3 pr-10 border">
      <div className="w-full">
        <h2 className="text-center mt-8 text-4xl font-extrabold text-green-700">
          Shopping cart
        </h2>
      </div>
      <div className="p-3">
        {products.map((product) => {
          return (
            <div
              className="flex items-center justify-between gap-6 mt-9"
              key={product._id}
            >
              <div className="flex flex-row gap-5 items-center">
                <MdOutlineClose
                  onClick={() =>
                    dispacth(deleteFromCart(product)) &
                    toast.error(`${product.title} removed in the cart`)
                  }
                  className="text-3xl font-extrabold bg-black rounded-full p-1
                   hover:bg-gray-600 duration-500 
                   cursor-pointer text-white"
                />
                <img
                  className="w-32 h-32 object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <p className="text-black font-extrabold">{product.title}</p>
              <p className="text-black font-extrabold">${product.price}</p>
              <div className="flex w-52 items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm text-black font-extrabold">Quantity</p>
                <div className="flex items-center gap-4 font-semibold">
                  <button
                    onClick={() => dispacth(decrementQuantity(product))}
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => dispacth(incrementQuantity(product))}
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +{" "}
                  </button>
                </div>
              </div>

              <p className="text-black font-extrabold">
                ${product.price * product.quantity}
              </p>
            </div>
          );
        })}
      </div>
      {products.length > 0 && (
        <button
          onClick={() => dispacth(resetCart())}
          className="bg-red-700 text-white w-32 text-xs font-extrabold m-3 p-2"
        >
          Reset your cart
        </button>
      )}
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

export default CartItem;
