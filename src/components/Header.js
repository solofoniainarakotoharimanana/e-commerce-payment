import React, { useState } from "react";
import Card from "../assets/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const [products, setProducts] = useState([]);
  const productData = useSelector((store) => store.bazar.productData);
  useEffect(() => {
    setProducts(productData);
  }, [productData]);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h4 className="text-green-700 font-extrabold text-4xl">Bazar</h4>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li
                className="text-base
            text-black font-bold 
            hover:text-orange-900 
            hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300"
              >
                Home
              </li>
            </Link>

            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <Link to="/cart">
              <img className="w-7" src={Card} alt="" />
              <span
                className=" absolute bg-blue-700
              text-white
               text-sm font-bold 
               mr-2 px-2.5 py-0.5 
               rounded-full dark:bg-blue-900 dark:text-blue-300 bottom-3 left-3"
              >
                {products ? products.length : 0}
              </span>
            </Link>
          </div>
          <div className="">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="userLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
