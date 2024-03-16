import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 lg:mx-0">
      {recipes.map((recipe, idx) => (
        <Recipe
          key={idx}
          handleWantToCook={handleWantToCook}
          recipe={recipe}
        ></Recipe>
      ))}
    </div>
  );
};
Recipes.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};
export default Recipes;
