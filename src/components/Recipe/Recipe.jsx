import clock from "../../assets/images/clock.svg";
import flame from "../../assets/images/Frame.svg";
import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  const { image, name, description, ingredients, time, calories } = recipe;
  return (
    <div className="p-6 rounded-3xl border-2">
      <img className="w-full rounded-3xl" src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <hr />
      <h3>Ingredients: {ingredients.length}</h3>
      <ul className="list-disc list-inside">
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
      <hr />
      <div className="flex gap-8">
        <div className="flex gap-2">
          <img src={clock} alt="" />
          <p>{time} minutes</p>
        </div>
        <div className="flex gap-2">
          <img src={flame} alt="" />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
