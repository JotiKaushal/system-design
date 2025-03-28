import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    let skip = currentPage * LIMIT;
    const result = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}&select=title,price,description,thumbnail,discountPercentage`
    ).then((res) => res.json());
    setNumberOfPages(Math.ceil(result.total/LIMIT));
    setProducts(result.products);
  };
  return <div>
    <div className="flex flex-wrap px-20">
        {products.map(product => <ProductCard key={product.id} {...product}/>)}
    </div>
    <div className="px-20 cursor-pointer">{currentPage >0 &&<span onClick={()=>{setCurrentPage((currentPage)=>currentPage - 1)}}>Prev</span>}{[...Array(numberOfPages).keys()].map(pN=><span className={"p-4 text-lg" +(pN===currentPage&& "font-bold underline")} key={pN+1} onClick={()=>{setCurrentPage(pN)}}>{pN+1}</span>)}{currentPage< numberOfPages-1 &&<span onClick={()=>{setCurrentPage((currentPage)=>currentPage + 1)}}>Next</span>}</div>
  </div>
};

export default Pagination;
