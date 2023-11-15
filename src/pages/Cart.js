import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const productData = useSelector((store) => store.bazar.productData);

  useEffect(() => {
    let price = 0;
    productData.map((p) => {
      price += p.price * p.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
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
        <button className="bg-black text-white text-xs p-3 w-full hover:bg-gray-500 duration-500 hover:border-none mt-3">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
