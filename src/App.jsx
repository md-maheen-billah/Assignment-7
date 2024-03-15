import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
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
        <div className="mt-12">
          <Recipes></Recipes>
        </div>
      </main>
    </>
  );
}

export default App;
