import React, { useState, useEffect } from "react";
import MenuComponent from "../menu/MenuComponent";
import Shop from "../shop/Shop"; // ⬅️ importin' the king
import { useSelector } from "react-redux";

const ShopComponent = () => {
  const isOpen = useSelector((state) => state.ui.isShopOpen); // 💥 hook into the store
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

      {/* THE KING IS HERE */}
      <Shop isMobile={isMobile} isOpen={isOpen} />
    </>
  );
};

export default ShopComponent;
