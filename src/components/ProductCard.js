import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTocart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const id = product.title;
  const navigate = useNavigate();
  const idString = (id) => {
    return String(id).toLocaleLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  const handleDetail = () => {
    navigate(`/product/${rootId}`, {
      state: product,
    });
  };
  return (
    <div className="border group relative">
      <div
        onClick={handleDetail}
        className="shadow-md w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-black font-semibold text-xs">
              {product.title}
            </h3>
          </div>

          <div className=" ">
            <div className="text-sm w-28 flex justify-end gap-1">
              <p className="font-bold line-through text-gray-500">
                $ {product.oldPrice}
              </p>
              <p className="font-extrabold text-black">$ {product.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-blue-600 my-4 font-extrabold ">
            {product.category}
          </p>
        </div>
        <hr />
        <p
          onClick={() =>
            dispatch(
              addTocart({
                _id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                description: product.description,
              })
            ) & toast.success(`${product.title} is added to the cart`)
          }
          className="bg-transparent hover:bg-blue-500 
            text-blue-700 font-semibold text-center 
            hover:text-white py-2 px-2 border border-blue-500 
            hover:border-transparent rounded mt-4 text-xs cursor-pointer w-24"
        >
          Add to cart
        </p>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
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
    </div>
  );
};

export default ProductCard;
