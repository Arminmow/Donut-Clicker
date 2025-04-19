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
        style={{
          backgroundImage: `url('https://orteil.dashnet.org/cookieclicker/img/blackGradient.png')`,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "400px",
        }}
      ></div>
      <GameComponent />
      <ShopComponent />
    </div>
  );
}

export default App;
