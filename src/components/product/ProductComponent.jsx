import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseClickPower,
  spendDonuts,
  buyUpgrade,
} from "../../redux/slices/PlayerSlice";
import { formatNumber } from "../../utilities/FormatNums";

const ProductComponent = ({ upgrade }) => {
  const dispatch = useDispatch();
  return (
    <div
      onPointerDown={
        !upgrade.locked && upgrade.canAfford
          ? () => {
              if (upgrade.id === 0) {
                dispatch(increaseClickPower());
                dispatch(spendDonuts(upgrade.currentPrice));
              } else {
                dispatch(buyUpgrade(upgrade.id));
                dispatch(spendDonuts(upgrade.currentPrice));
              }
            }
          : null
      }
      className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg h-24 w-full flex items-center p-4 cursor-pointer group transition-transform transform hover:scale-105 ${
        upgrade.locked || !upgrade.canAfford ? "opacity-50 cursor-not-allowed" : "opacity-100"
      }`}
    >
      <div
        className="h-16 w-16 rounded-md border border-gray-700"
        style={{
          backgroundImage:
            "url('https://cdn.dashnet.org/cookieclicker/img/buildings.png?v=2.052')",
          backgroundPosition: `${upgrade.locked ? "-64" : "0"}px -${
            upgrade.id * 64
          }px`,
        }}
      ></div>
      <div className="flex flex-col justify-center ml-4 flex-grow">
        <span className="font-bold text-lg text-white truncate">
          {upgrade.locked ? "???" : upgrade.label}
        </span>
        <div className="flex items-center mt-1">
          <span className="text-sm text-[#6f6] font-bold mr-1">
            {formatNumber(upgrade.currentPrice)}
          </span>
          <img
            src="https://orteil.dashnet.org/cookieclicker/img/money.png"
            alt="Price Icon"
            className="h-4 w-4"
          />
          <span className="text-sm text-gray-400 ml-2">
            {upgrade.id === 0 ? `Click Power : ${upgrade.clickPower}` : `DPS: ${upgrade.dps * upgrade.count || 0}`}
            
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-white text-3xl">
          <span className="font-mono">{upgrade.count}</span>
        </span>
      </div>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 pointer-events-none rounded-lg"></div>
    </div>
  );
};

export default ProductComponent;
