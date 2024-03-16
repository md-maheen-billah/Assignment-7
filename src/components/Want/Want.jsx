import PropTypes from "prop-types";
const Want = ({ recipe, idx, handlePreparing }) => {
  return (
    <div className="flex items-center py-3">
      <p className="w-12 text-center text-[#525252] font-bold">{idx + 1}</p>
      <p className="w-24 mr-4 text-[#676767] leading-6">{recipe.name}</p>
      <p className="w-16 mr-4 text-[#676767] leading-6">
        {recipe.time} minutes
      </p>
      <p className="w-16 mr-4 text-[#676767] leading-6">
        {recipe.calories} calories
      </p>
      <button
        onClick={() => handlePreparing(recipe)}
        className="btn font-bold rounded-3xl bg-[#0BE58A] "
      >
        Preparing
      </button>
    </div>
  );
};
Want.propTypes = {
  recipe: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};
export default Want;
