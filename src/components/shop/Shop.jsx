// components/shop/Shop.jsx
import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../product/ProductComponent";
import { useSelector } from "react-redux";

const Shop = ({ isMobile, isOpen }) => {
  const playerState = useSelector((state) => state.player);
  const donuts = playerState.stats.donuts;
  
  return (
    <motion.div
      name="shop"
      initial={false}
      animate={{
        y: isMobile ? (isOpen ? "0%" : "100%") : "0%",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`bg-[url('https://cookieclicker.wiki.gg/images/9/94/BgPink.jpg?8f1a88=&format=original')] bg-cover bg-center z-40 flex flex-col items-center 
                    ${
                      isMobile
                        ? "fixed bottom-0 left-0 w-full h-full"
                        : "hidden md:flex md:w-1/3 md:h-full"
                    }`}
      style={{
        borderTop: "20px solid transparent",
        borderImage:
          "url('https://orteil.dashnet.org/cookieclicker/img/panelHorizontal.png?v=2') 20 repeat",
      }}
    >
      <div className="flex-1 w-full overflow-y-auto flex flex-col items-center justify-start">
        {playerState.upgrades.map((upgrade) =>
        // Handle unlock here?
         (
          <ProductComponent key={upgrade.id} upgrade={upgrade} />
        ))}
      </div>
    </motion.div>
  );
};

export default Shop;
