import PropTypes from "prop-types";
import Want from "../Want/Want";
import Currently from "../Currently/Currently";
const Sidebar = ({ wantToCook, handlePreparing, cooking, time, calories }) => {
  return (
    <div className="border-2 rounded-3xl py-[32px]">
      <h2 className="text-center font-bold text-2xl">
        Want to cook: 0{wantToCook.length}
      </h2>
      <hr className="my-4  mx-[60px]" />

      <div className="flex ml-12 mb-3">
        <h2 className="text-[#878787] font-medium">Name</h2>
        <h2 className="ml-16 text-[#878787] font-medium">Time</h2>
        <h2 className="ml-12 text-[#878787] font-medium">Calories</h2>
      </div>
      <div className="bg-[#f9f9f9]">
        {wantToCook.map((recipe, idx) => (
          <Want
            key={idx}
            idx={idx}
            handlePreparing={handlePreparing}
            recipe={recipe}
          ></Want>
        ))}
      </div>
      <h2 className="text-center font-bold text-2xl mt-8">
        Currently cooking: 0{cooking.length}
      </h2>
      <hr className="my-4  mx-[60px]" />

      <div className="flex ml-12 mb-3">
        <h2 className="text-[#878787] font-medium">Name</h2>
        <h2 className="ml-28 mr-3 text-[#878787] font-medium">Time</h2>
        <h2 className="ml-16 text-[#878787] font-medium">Calories</h2>
      </div>
      <div className="bg-[#f9f9f9]">
        {cooking.map((recipe, idx) => (
          <Currently key={idx} idx={idx} recipe={recipe}></Currently>
        ))}
      </div>
      <div className="flex gap-2 justify-end mt-4">
        <h2 className="w-24 text-[#525252] font-medium">
          Total Time = {time} minutes
        </h2>
        <h2 className="w-[120px] text-[#525252] font-medium">
          Total Calories = {calories} calories
        </h2>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  cooking: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};
export default Sidebar;
