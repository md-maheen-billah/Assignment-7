import clock from "../../assets/images/clock.svg";
import flame from "../../assets/images/Frame.svg";
import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  const { image, name, description, ingredients, time, calories } = recipe;
  return (
    <div className="p-6 rounded-3xl border-2">
      <img className="w-full rounded-3xl" src={image} alt="" />
      <h2 className="text-xl font-bold mt-6">{name}</h2>
      <p className="text-[#878787] leading-[30px] mt-2">{description}</p>
      <hr className="my-4" />
      <h3 className="font-semibold text-lg mb-2">
        Ingredients: {ingredients.length}
      </h3>
      <ul className="list-disc list-inside text-[#878787]">
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
      <hr className="my-4" />
      <div className="flex gap-8 text-[#606060}">
        <div className="flex gap-2">
          <img src={clock} alt="" />
          <p>{time} minutes</p>
        </div>
        <div className="flex gap-2">
          <img src={flame} alt="" />
          <p>{calories} calories</p>
        </div>
      </div>
      <button className="btn rounded-[50px] bg-[#0BE58A] font-bold text-[18px] border-2 border-[#0BE58A] px-6 py-3 mt-6">
        Want to Cook
      </button>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
