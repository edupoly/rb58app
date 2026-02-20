import React, { useEffect, useState } from "react";

function Products() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div className="border border-info border-2 m-2 p-2 rounded">
      <b>Products</b>
      <ul>
        {products.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
