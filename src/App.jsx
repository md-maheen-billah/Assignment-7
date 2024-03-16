import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find((rd) => rd.id == recipe.id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      alert("Item already selected");
    }
  };
  const handlePreparing = (recipe) => {
    const newWantToCook = wantToCook.filter((item) => item.id != recipe.id);
    setWantToCook(newWantToCook);
    const isExist = cooking.find((rd) => rd.id == recipe.id);
    if (!isExist) {
      setCooking([...cooking, recipe]);
      const newTime = time + recipe.time;
      setTime(newTime);
      const newCalories = calories + recipe.calories;
      setCalories(newCalories);
    } else {
      alert("Item already cooking");
    }
  };
  return (
    <>
      <header className="max-w-[1320px] mx-auto">
        <nav className="mt-4">
          <Navbar></Navbar>
        </nav>
        {/* banner */}
        <section className="mt-12">
          <Banner></Banner>
        </section>
      </header>
      <main className="max-w-[1320px] mx-auto">
        <div className="mt-20 text-center">
          <h2 className="text-[40px] font-semibold">Our Recipes</h2>
          <p className="text-[16px] leading-[26px] text-[#736d80] px-56 mt-4">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div>
        <div className="mt-12 flex gap-6">
          <div className="w-8/12">
            <Recipes handleWantToCook={handleWantToCook}></Recipes>
          </div>
          <div className="w-4/12">
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
    </>
  );
}

export default App;
