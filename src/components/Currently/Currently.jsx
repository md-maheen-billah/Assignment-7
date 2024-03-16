import PropTypes from "prop-types";
const Currently = ({ recipe, idx }) => {
  return (
    <div className="flex items-center py-3">
      <p className="w-12 text-center text-[#525252] font-bold">{idx + 1}</p>
      <p className="w-24 mr-16 text-[#676767] leading-6">{recipe.name}</p>
      <p className="w-16 mr-12 text-[#676767] leading-6">
        {recipe.time} minutes
      </p>
      <p className="w-16 mr-4 text-[#676767] leading-6">
        {recipe.calories} calories
      </p>
    </div>
  );
};
Currently.propTypes = {
  recipe: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};
export default Currently;
