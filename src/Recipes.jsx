import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Recipes() {
  var [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes([...data.recipes]);
      });
  }, []);
  return (
    <div className="border border-info border-2 m-2 p-2 rounded">
      <b>Products</b>
      <div className="d-flex">
        <ul className="w-50">
          {recipes.map((recipe) => {
            return (
              <li>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
