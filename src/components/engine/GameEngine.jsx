import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GameEngine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
    //   dispatch(addDonutsFromDps());
    console.log('game running');
    
    }, 1000 / 30); 

    return () => clearInterval(interval); 
  }, [dispatch]);

  return null; 
};

export default GameEngine;
