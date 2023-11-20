import React from "react";
import github_logo from "../assets/github_logo.png";
import google_logo from "../assets/google_logo.png";
import { useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { addUser, removeUser, resetCart } from "../redux/bazarSlice";

import { useDispatch } from "react-redux";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispacth(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //console.log("Sign out successfully");
        //console.log(auth);
        dispacth(removeUser());
        dispacth(resetCart());
        toast.success("Signout proceded successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex items-center flex-col gap-10 py-10 justify-center ">
      <div className="w-full flex  items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base flex mt-10
        flex-row w-60 h-12 tracking-wide border-[1px] 
        items-center gap-5 justify-center rounded-md
        hover:border-blue-600 text-black font-extrabold 
        cursor-pointer duration-300"
        >
          <img className="w-14" src={google_logo} alt="googleLogo" />
          <span className="text-xs text-gray-900">Sign in with google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="w-30 py-2 rounded-md text-xs font-extrabold
         px-3 mt-6 justify-center hover:bg-gray-900 duration-200
         items-center text-white bg-black"
        >
          Sign out
        </button>
      </div>
      <div className="w-full flex  items-center justify-center gap-10">
        <div
          className="text-base flex
        flex-row w-60 h-12 tracking-wide border-[1px] 
        items-center gap-5 justify-center rounded-md
        hover:border-blue-600 text-black font-extrabold 
        cursor-pointer duration-300"
        >
          <img className="w-10" src={github_logo} alt="googleLogo" />
          <span className="text-xs text-gray-900">Sign in with github</span>
        </div>
        <button
          style={{ marginTop: "-10px" }}
          className="w-30 py-2 rounded-md text-xs font-extrabold
         px-3 mt-6 justify-center hover:bg-gray-900 duration-200
         items-center text-white bg-black "
        >
          Sign out
        </button>
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

export default Login;
