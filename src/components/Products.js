import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-xl bg-black text-white w-80 mx-auto py-2">
          Shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-center text-black text-sm font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl py-10 grid grid-cols-4 gap-6">
        {products &&
          products.map((p) => {
            return <ProductCard key={p._id} product={p} />;
          })}
      </div>
    </div>
  );
};

export default Products;
