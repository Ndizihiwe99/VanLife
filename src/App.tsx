import React from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./components/Vans";

function App() {
  return (
    <div className=" place-self-center">
      <BrowserRouter>
        <div className="flex justify-between pt-14 pb-14 bg-[#FFF7ED] ">
          <div className="">
            <Link to="HomePage" className=" ml-5 text-3xl font-bold">
              #Vanlife
            </Link>
          </div>
          <div className="flex gap-5 mr-5">
            <Link to="About" className="hover:underline">
              About
            </Link>
            <Link to="Vans" className="hover:underline">
              Vans
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="HomePage" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="Vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
