import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import DonutComponent from "../donut/DonutComponent";

const GameComponent = () => {
  return (
    <div className="h-10/12 md:h-full md:w-2/3 flex flex-col items-center justify-center border-2 border-gray-500 box-border">
      <HeaderComponent />
      <DonutComponent />
    </div>
  );
};

export default GameComponent;
