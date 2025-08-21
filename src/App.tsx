import React from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
import Layout from "./components/Layout";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
//import Dashboard from "./components/Host/Dashboard";
import HostLayout from "./components/HostLayout";
import Dashboard from "./components/Host/Dashboard";

function App() {
  return (
    <div className=" place-self-center">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="HomePage" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="Vans" element={<Vans />} />
            <Route path="Vans/:id" element={<VanDetails />} />

            <Route path="Host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="Income" element={<Income />} />
              <Route path="Reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
