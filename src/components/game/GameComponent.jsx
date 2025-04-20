import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import DonutComponent from "../donut/DonutComponent";

const GameComponent = () => {
  return (
    <div className="h-11/12 md:h-full md:w-2/3 flex flex-col items-center justify-center">
      <HeaderComponent />
      <DonutComponent />
    </div>
  );
};

export default GameComponent;
