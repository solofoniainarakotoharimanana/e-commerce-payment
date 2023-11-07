import React from "react";
import CartVisa from "../assets/carte_visa.png";
import CartPaypal from "../assets/paypal.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaYoutube,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/** ====Logo start here ==== */}
        <div className="flex flex-col gap-4">
          <h4 className="text-green-700 text-3xl w-32">Bazar</h4>
          <p className="text-white text-xs tracking-wide">@reactdb.com</p>
          <div className="flex flex-row gap-3">
            <img className="w-14 h-8" src={CartVisa} alt="Carte visa" />
            <img className="w-14 h-8" src={CartPaypal} alt="Carte paypal" />
          </div>
          <div className="flex flex-row gap-3">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
            <FaHome size={20} />
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Locate Us</h2>
          <div className="text-xs flex flex-col gap-2">
            <p>Adresse</p>
            <p>Mobile: +261 34 25 147 89</p>
            <p>e-mail: test@gmail.com</p>
          </div>
        </div>
        <div className="text-xs flex flex-col gap-2">
          <h2 className="text-white font-semibold mb-4">Profile</h2>
          <div>
            <p className="flex items-center duration-300 cursor-pointer hover:text-white gap-3">
              <span>
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex items-center duration-300 cursor-pointer hover:text-white gap-3">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center duration-300 cursor-pointer hover:text-white gap-3">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center duration-300 cursor-pointer hover:text-white gap-3">
              <span>
                <MdLocationOn />
              </span>
              Help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2"
            placeholder="e-mail"
            type="text"
          />
          <button
            className="text-sm border text-white border-t-0  hover:bg-gray-900 active:bg-white active:text-black"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
