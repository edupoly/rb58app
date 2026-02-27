import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          return (
            <li>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
