import React from "react";

const donutImage =
  "https://i.ibb.co/DPL2sNRL/Donuts-Coffee-And-Doughnuts-Clip-Art-Drawing-Cartoon-Biscuits-Dunkin-Pennant-Transparent-PNG-removeb.png";

const DonutComponent = () => {
  return (
    <div className="relative flex h-10/12 w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-5 md:h-1/6 h-1/5 w-full items-center justify-center pt-30">
        <div
          className="text-white text-center py-2 px-4 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          Redux Bakery
        </div>
        <div
          className="w-full text-white text-center py-4 px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          0 Donuts
        </div>
      </div>
      <div className="flex h-4/5 md:h-5/6 w-full items-center justify-center ">
        <img
          src={donutImage}
          alt="Donut"
          className="h-65 w-65 md:h-80 md:w-80 object-contain rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DonutComponent;
