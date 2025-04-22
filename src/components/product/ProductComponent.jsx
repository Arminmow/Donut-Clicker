import React from "react";

const ProductComponent = ({ upgrade }) => {
  return (
    <div
      className={`relative bg-[url('https://i.ibb.co/7JbfM4hw/store-Tile-1.jpg')] bg-cover bg-no-repeat h-23 w-full flex items-center p-2 cursor-pointer group ${
        upgrade.locked ? "opacity-60" : "opacity-100"
      }`}
    >
      <div
        className="h-16 w-16"
        style={{
          backgroundImage:
            "url('https://cdn.dashnet.org/cookieclicker/img/buildings.png?v=2.052')",
          backgroundPosition: `${upgrade.locked ? "-64" : "0"}px -${
            upgrade.id * 64
          }px`,
        }}
      ></div>
      <div className="flex flex-col justify-center ml-4 flex-grow">
        <span className="font-bold text-lg text-white">
          {upgrade.locked ? "???" : upgrade.label}
        </span>
        <div className="flex items-center">
          <span className="text-sm text-[#6f6] font-bold mr-1">
            {upgrade.currentPrice}
          </span>
          <img
            src="https://orteil.dashnet.org/cookieclicker/img/money.png"
            alt="Price Icon"
            className="h-4 w-4"
          />
        </div>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-black opacity-20 text-5xl">
          <span className="font-mono">{upgrade.count}</span>
        </span>
      </div>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default ProductComponent;
