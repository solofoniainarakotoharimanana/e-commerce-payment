import React, { useState } from "react";
import Card from "../assets/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LoginService } from "../service/LoginService";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
const Header = () => {
  const auth = getAuth();
  const [products, setProducts] = useState([]);
  const productData = useSelector((store) => store.bazar.productData);
  const userInfo = useSelector((store) => store.bazar.userInfo);
  console.log(userInfo);

  console.log(userInfo);
  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <div>
            <Link to="/">
              <h4 className="text-green-700 font-extrabold text-4xl">Bazar</h4>
            </Link>
          </div>
          {userInfo && (
            <p className="text-sm font-bold">
              <span className="text-black">Welcome</span>{" "}
              <span className="text-blue-800">{userInfo.name}</span>
            </p>
          )}
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

            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold
             hover:text-orange-900 hover:underline 
             underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Shop
            </li>
            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>
            <li
              className="text-base text-black font-bold 
            hover:text-orange-900 hover:underline 
            underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
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
          {userInfo ? (
            <div className="flex flex-row gap-2">
              <FaSignOutAlt className="text-blue-700 cursor-pointer" />
              <span className="text-blue-700 font-bold text-xs">Log out</span>
            </div>
          ) : (
            <Link to="/login">
              <div className="flex flex-row gap-2">
                <FaSignInAlt className="text-blue-700 cursor-pointer" />
                <span className="text-blue-700 font-bold text-xs">Login</span>
              </div>
            </Link>
          )}

          {/*userInfo && (
            <p className="text-sm text-blue-700 font-semibold">
              Welcome {userInfo.name}
            </p>
          )*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
