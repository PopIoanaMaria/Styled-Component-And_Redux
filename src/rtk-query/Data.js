import React from "react";
import { useGetAllProductsQuery, useGetProductQuery } from "./apiSlice";

const Data = () => {
  const { data: allProductsData } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(
    "allProductsData:",
    allProductsData,
    "singleProductData: ",
    singleProductData
  );

  return <div>Data</div>;
};

export default Data;
