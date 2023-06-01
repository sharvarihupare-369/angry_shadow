import React, { useEffect, useState } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsMen } from "../Redux/Products/action";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";

export const Men = () => {


  const dispatch = useDispatch();

  const men_products = useSelector((store) => store.productsReducer.men);
  useEffect(() => {
    dispatch(getProductsMen());
  }, []);

  // console.log(men_products)

  // const indexOfLastPage = page * limit
  // const indexOfFirstPage = indexOfLastPage - limit
  // const currentPage = men_products.slice(indexOfFirstPage, indexOfLastPage)

  return (
    <>

   
    <Box
      w="80%"
      display={"grid"}
      gap="20px"
      p="20px"
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(5,1fr)",
        "2xl": "repeat(5,1fr)",
      }}
      >
      {men_products.map((el) => {
        return <ProductCard  {...el} />;
      })}
    </Box>
    
      </>
  );
};
