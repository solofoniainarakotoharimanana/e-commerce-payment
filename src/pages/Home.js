import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const dataProducts = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dataProducts.data);
  }, [dataProducts]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
