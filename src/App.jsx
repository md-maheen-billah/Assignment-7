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
  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find((rd) => rd.id == recipe.id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      toast.error("Item already selected");
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
            <Sidebar handleWantToCook={handleWantToCook}></Sidebar>
          </div>
        </div>
      </main>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
