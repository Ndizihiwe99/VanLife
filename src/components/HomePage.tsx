import React from "react";

function HomePage() {
  return (
    <>
      <div className="place-self-center">
        <div className="bg-[url(./assets/homeImage.png)] backdrop-brightness-50 bg-no-repeat">
          <div>
            <p className="text-6xl font-bold p-24 place-self-center text-white">
              You got travel plans, we <br /> got the travel vans
            </p>
            <p className="place-self-center text-white font-bold">
              Add adventure to your life by joining the #Vanlife movement.{" "}
              <br /> Rent the perfect van to make your perfect road trip
            </p>
            <div className="bg-orange-500 place-self-center mt-10 h-8 w-96 text-center ">
              Find your van
            </div>
          </div>
          <div className="bg-gray-900 w-full h-32 place-self-center">
            <footer className="p-14 mt-24 text-center text-gray-500">
              &copy; 2022#VANLIFE
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
