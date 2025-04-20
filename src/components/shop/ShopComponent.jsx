import React from "react";
import MenuComponent from "../menu/MenuComponent";

const ShopComponent = () => {
  return (
    <>
      <MenuComponent />
      <div className=" w-5 bg-[url('https://orteil.dashnet.org/cookieclicker/img/panelVertical.png?v=2')]"></div>
      <div className="bg-amber-600 h-full w-1/3 flex-col items-center justify-center hidden md:flex md:items-center md:justify-center z-10"></div>
    </>
  );
};

export default ShopComponent;
