import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuComponent from "../menu/MenuComponent";

const ShopComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Screen resize handler
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <MenuComponent />

      {/* Divider for desktop only */}
      <div
        name="devider"
        className="w-5 bg-[url('https://orteil.dashnet.org/cookieclicker/img/panelVertical.png?v=2')] hidden md:block"
      ></div>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed bottom-4 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg z-101"
        >
          {isOpen ? "Close Shop" : "Open Shop"}
        </button>
      )}

      {/* ONE Shop — not two! Just different behavior */}
      <motion.div
        name="shop"
        initial={false}
        animate={{
          y: isMobile ? (isOpen ? "0%" : "100%") : "0%",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`bg-amber-600 z-40 flex flex-col items-center justify-center 
          ${isMobile ? "fixed bottom-0 left-0 w-full h-full" : "hidden md:flex md:w-1/3 md:h-full"}`}
      >
        <h2 className="text-white text-xl font-bold">🔥 The One True Shop</h2>
        {isMobile && <p className="text-white mt-2">Tap the button to close</p>}
      </motion.div>
    </>
  );
};

export default ShopComponent;
