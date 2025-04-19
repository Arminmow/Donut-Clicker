import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameComponent from "./components/game/GameComponent";
import ShopComponent from "./components/shop/ShopComponent";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <GameComponent />
      <ShopComponent />
    </div>
  );
}

export default App;
