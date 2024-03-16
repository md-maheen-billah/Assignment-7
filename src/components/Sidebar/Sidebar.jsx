import PropTypes from "prop-types";
import Want from "../Want/Want";
const Sidebar = ({ wantToCook }) => {
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
          <Want key={idx} idx={idx} recipe={recipe}></Want>
        ))}
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  wantToCook: PropTypes.array.isRequired,
};
export default Sidebar;
