import React from "react";
import campvan from "../assets/campvan.png";

function About() {
  return (
    <div className="place-self-center">
      <img src={campvan} alt="" />
      <div className="bg-[#FFF7ED]">
        <p className="text-4xl font-bold p-7">
          {" "}
          Don't squeeze in a sadan when <br /> you could relax in a van
        </p>
        <p className="mt-6 ml-8 font-semibold">
          Our mission is to enliven your road trip with the perfect travel{" "}
          <br /> van rental. Our vans are recertified before each trip to ensure{" "}
          <br />
          your travel plans can go off without a hitch. <br />
          (Hitch costs extra 😉)
        </p>
        <p className="mt-6 ml-8 font-semibold">
          Our team is full of vanlife enthusiasts who know firsthand the <br />{" "}
          magic of touring the world on 4 wheels.
        </p>
        <div className="m-10 bg-[#FFCC8D]">
          <p className="p-10 text-4xl">
            Your destination is waiting. <br /> Your van is ready.
          </p>
          <button className="text-white bg-black rounded-2xl p-4 ml-10 mb-8">
            Explore your vans
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
