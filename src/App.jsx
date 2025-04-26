import "./App.css";
import GameComponent from "./components/game/GameComponent";
import ShopComponent from "./components/shop/ShopComponent";
import GameEngine from "./components/engine/GameEngine";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDonutsBasedOnElappsedTime } from "./redux/slices/PlayerSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let timestampOnTabChange = Date.now(); // Store the timestamp when the tab is changed

    // When the tab visibility changes (focus or unfocus)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Tab is hidden, save the timestamp
        timestampOnTabChange = Date.now();
        console.log(
          "Tab is now hidden, saving timestamp:",
          timestampOnTabChange
        );
      } else {
        // Tab became visible again, calculate the time difference and update the state
        const timeElapsed = Date.now() - timestampOnTabChange;
        console.log("Tab is now visible again, time elapsed:", timeElapsed / 1000);
        // Update your Redux state or local state here based on the time elapsed
        dispatch(addDonutsBasedOnElappsedTime(timeElapsed / 1000)); // Convert milliseconds to seconds
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [dispatch]);

  return (
    <div
      className="flex flex-col md:flex-row h-screen w-full"
      style={{
        backgroundImage: `url('https://cookieclicker.wiki.gg/images/9/94/BgPink.jpg?8f1a88=&format=original')`,
      }}
    >
      <div
        className=" absolute top-[400px] md:top-[550px] w-full bg-[url('https://orteil.dashnet.org/cookieclicker/img/blackGradient.png')]"
        style={{ height: "-webkit-fill-available" }}
      ></div>
      <GameEngine />
      <GameComponent />
      <ShopComponent />
    </div>
  );
}

export default App;
