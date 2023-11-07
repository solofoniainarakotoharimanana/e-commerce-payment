import React from "react";
import Card from "../assets/shopping-cart.svg";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <h4 className="text-green-700 font-extrabold text-4xl">Bazar</h4>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base
            text-black font-bold 
            hover:text-orange-900 
            hover:underline underline-offset-2 
            decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </li>
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
            <img className="w-7" src={Card} alt="" />
            <span
              className=" absolute bg-blue-700
              text-white
               text-sm font-bold 
               mr-2 px-2.5 py-0.5 
               rounded-full dark:bg-blue-900 dark:text-blue-300 bottom-3 left-3"
            >
              0
            </span>
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
