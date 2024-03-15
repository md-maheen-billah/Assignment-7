import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="max-w-[1320px] mx-auto">
        <nav className="mt-4">
          <Navbar></Navbar>
        </nav>
      </header>
    </>
  );
}

export default App;
