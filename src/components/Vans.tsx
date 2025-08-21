import React from "react";
import FirstWhiteCar from "../assets/FirstWhiteCar.png";
import secondCar from "../assets/secondCar.png";
import thirdCar from "../assets/thirdCar.jpg";
import fourthCar from "../assets/fourthCar.png";
import fifthCar from "../assets/fifthCar.png";
import sixthCar from "../assets/sixthCar.png";
import { Link } from "react-router-dom";

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
      <div className="flex gap-3  ">
        <div>
          <Link to={`/Vans/1`}>
            <div id="1">
              <img className="size-96" id="1" src={FirstWhiteCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $60 <br />
                    /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>

          <Link to={`/Vans/2`}>
            <div id="2" className="mt-8">
              <img className="size-96" id="2" src={secondCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $60 <br />
                    /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>
          <Link to={`/Vans/3`}>
            <div id="3" className="mt-8">
              <img className="size-96" id="3" src={thirdCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $60 <br />
                    /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link to={`/Vans/4`}>
            <div id="4">
              <img className="size-96 " id="4" src={fourthCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $60 <br />
                    /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>
          <Link to={`/Vans/5`}>
            <div id="5" className="mt-8">
              {" "}
              <img className="size-96" id="5" src={fifthCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $$60 <br /> /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>

          <Link to={`/Vans/6`}>
            <div id="6" className="mt-8">
              {" "}
              <img className="size-96" id="6" src={sixthCar} alt="van" />
              <div>
                <div className="flex justify-between p-4">
                  <h1>Most explorer</h1>
                  <h1>
                    $60 <br />
                    /day
                  </h1>
                </div>
                <button className="pl-4 pr-4 pt-1 pb-1 bg-[#FFEAD0]">
                  Simple
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Vans;
