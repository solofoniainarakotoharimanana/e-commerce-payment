import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import Rating from "../rating/Rating";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  const id = useParams();
  useEffect(() => {
    setProduct(location.state);
  }, []);

  return (
    <div>
      {product && (
        <div className="max-w-screen-xl mx-auto my-10 gap-10 flex">
          <div className="w-2/5 relative">
            <img
              src={product.image}
              className="w-full h-[500px] object-cover"
              alt={product.title}
            />
            <div className="absolute top-4 right-0">
              {product.isNew && (
                <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                  Sale
                </p>
              )}
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex flex-col justify-center gap-12">
              <h1 className="font-extrabold text-4xl text-black">
                {product.title}
              </h1>
              <div className="flex flex-row gap-2 mt-4 items-center">
                <p className="line-through text-xl text-gray-900">
                  ${product.oldPrice}
                </p>
                <p className="text-black text-2xl  font-extrabold">
                  ${product.price}
                </p>
              </div>
            </div>
            <div className="my-4 flex gap-3">
              <div className="flex gap-2 items-center">
                {/*<MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar /> 
              <MdOutlineStar />*/}
                {product.rating && <Rating rating={product.rating} />}
              </div>
              <p className="text-base font-bold text-gray-500">
                (1 customer review)
              </p>
            </div>
            <p className="text-base font-bold mt-3">{product.description}</p>
            <div className="my-6 flex flex-row gap-6">
              <div className="flex w-52 items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm text-black font-extrabold">Quantity</p>
                <div className="flex items-center gap-4 font-semibold">
                  <button
                    onClick={() => setBaseQty(baseQty <= 1 ? 1 : baseQty - 1)}
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{baseQty}</span>
                  <button
                    onClick={() => setBaseQty(baseQty + 1)}
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +{" "}
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addCart({
                      _id: product._id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      quantity: baseQty,
                      description: product.description,
                    })
                  ) & toast.success(`${product.title} is added to the cart`)
                }
                className="bg-black w-28 active:bg-gray-400 text-xs text-white"
              >
                Add to cart
              </button>
            </div>
            <hr />
            <p className="my-6">
              {" "}
              Category:{" "}
              <span className="text-black font-extrabold">
                {product.category}
              </span>
            </p>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
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

export default Product;
