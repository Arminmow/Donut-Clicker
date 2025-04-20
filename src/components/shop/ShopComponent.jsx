import React, { useState, useEffect } from "react";
import MenuComponent from "../menu/MenuComponent";
import Shop from "../shop/Shop"; // ⬅️ importin' the king

const ShopComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // screen watcher
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <MenuComponent />

      {/* Divider - only on desktop */}
      <div
        name="devider"
        className="w-5 bg-[url('https://orteil.dashnet.org/cookieclicker/img/panelVertical.png?v=2')] hidden md:block"
      ></div>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed bottom-4 right-4 z-101 bg-pink-500 text-white p-3 rounded-full shadow-lg"
        >
          {isOpen ? "Close Shop" : "Open Shop"}
        </button>
      )}

      {/* THE KING IS HERE */}
      <Shop isMobile={isMobile} isOpen={isOpen} />
    </>
  );
};

export default ShopComponent;
