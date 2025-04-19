import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameComponent from "./components/game/GameComponent";
import ShopComponent from "./components/shop/ShopComponent";

function App() {
  return (
    <div
      className="flex flex-col md:flex-row h-screen w-full"
      style={{
        backgroundImage: `url('https://cookieclicker.wiki.gg/images/9/94/BgPink.jpg?8f1a88=&format=original')`,
      }}
    >
      <div
        className="absolute top-[500px] md:top-[550px] w-full bg-[url('https://orteil.dashnet.org/cookieclicker/img/blackGradient.png')]"
        style={{ height: "-webkit-fill-available" }}
      ></div>

      <GameComponent />
      <ShopComponent />
    </div>
  );
}

export default App;
