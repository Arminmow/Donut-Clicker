import React from "react";
import { motion } from "motion/react";
import { useSelector, useDispatch } from "react-redux";
import { clickDonut } from "../../redux/slices/PlayerSlice";

const donutImage =
  "https://i.ibb.co/DPL2sNRL/Donuts-Coffee-And-Doughnuts-Clip-Art-Drawing-Cartoon-Biscuits-Dunkin-Pennant-Transparent-PNG-removeb.png";

const DonutComponent = () => {
  const donuts = useSelector((state) => state.player.stats.donuts);
  const dispatch = useDispatch();

  return (
    <div className="relative flex h-11/12 w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-5 md:h-1/6 h-1/5 w-full items-center justify-center md:pt-25">
        <div
          className="text-white text-center py-2 px-4 rounded-lg text-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          Redux Bakery
        </div>
        <div 
          className="w-full text-white text-center py-4 px-4 text-3xl font-bold"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {donuts} Donuts
        </div>
      </div>
      <div className="flex h-4/5 md:h-5/6 w-full items-center justify-center md:transform md:-translate-y-5">
        <motion.img
          onPointerDown={() => dispatch(clickDonut())}
          src={donutImage}
          alt="Donut"
          draggable={false}
          className="h-70 w-70 md:h-80 md:w-80 object-contain rounded-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.85,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        />
      </div>
    </div>
  );
};

export default DonutComponent;
