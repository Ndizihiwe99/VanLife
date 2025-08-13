import React from "react";
import FirstWhiteCar from "../assets/FirstWhiteCar.png";
import secondCar from "../assets/secondCar.png";
import thirdCar from "../assets/thirdCar.jpg";
import fourthCar from "../assets/fourthCar.png";
import fifthCar from "../assets/fifthCar.png";
import sixthCar from "../assets/sixthCar.png";

function Vans() {
  return (
    <div className="place-self-center">
      <header>
        <p className="text-2xl"> Explore our van options</p>

        <div className="flex justify-between p-4 gap-8">
          <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">Simple</button>
          <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]"> Luxury</button>
          <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">Rugged</button>
          <h1 className=" underline">Clear filters</h1>
        </div>
      </header>
      <div className="flex gap-3">
        <div>
          <img src={FirstWhiteCar} alt="van" />
          <img src={secondCar} alt="van" />
          <img src={thirdCar} alt="van" />
        </div>
        <div>
          <img src={fourthCar} alt="van" />
          <img src={fifthCar} alt="van" />
          <img src={sixthCar} alt="van" />
        </div>
      </div>
      <div className="bg-gray-900 w-full h-32 place-self-center">
        <footer className="p-14 mt-24 text-center text-gray-500">
          &copy; 2022#VANLIFE
        </footer>
      </div>
    </div>
  );
}

export default Vans;
