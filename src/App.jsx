import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find((rd) => rd.id == recipe.id);
    const isExist2 = cooking.find((rd) => rd.id == recipe.id);
    if (!isExist && !isExist2) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      toast.error("Item already Selected or Cooking");
    }
  };
  const handlePreparing = (recipe) => {
    const newWantToCook = wantToCook.filter((item) => item.id != recipe.id);
    setWantToCook(newWantToCook);
    setCooking([...cooking, recipe]);
    const newTime = time + recipe.time;
    setTime(newTime);
    const newCalories = calories + recipe.calories;
    setCalories(newCalories);
  };
  return (
    <>
      <header className="max-w-[1320px] mx-auto">
        <nav className="mt-4">
          <Navbar></Navbar>
        </nav>
        {/* banner */}
        <section className="mt-4 mx-2 lg:mt-12">
          <Banner></Banner>
        </section>
      </header>
      <main className="max-w-[1320px] mx-auto">
        <div className="mt-4 lg:mt-20 text-center">
          <h2 className="text-3xl lg:text-[40px] font-semibold">Our Recipes</h2>
          <p className="text-[16px] leading-[26px] text-[#736d80] lg:px-56 mt-4">
            Savor the exquisite flavors of our culinary creations, meticulously
            prepared with fresh ingredients and seasoned to perfection,
            promising an unforgettable dining experience for every palate.
          </p>
        </div>
        <div className="mt-4 lg:mt-12 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-8/12">
            <Recipes handleWantToCook={handleWantToCook}></Recipes>
          </div>
          <div className="lg:w-4/12">
            <Sidebar
              handleWantToCook={handleWantToCook}
              wantToCook={wantToCook}
              handlePreparing={handlePreparing}
              cooking={cooking}
              time={time}
              calories={calories}
            ></Sidebar>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
