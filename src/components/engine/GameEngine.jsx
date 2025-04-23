import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addDonutsFromDps} from "../../redux/slices/PlayerSlice";

const GameEngine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addDonutsFromDps(1 / 30));
    
    }, 1000 / 30); 

    return () => clearInterval(interval); 
  }, [dispatch]);

  return null; 
};

export default GameEngine;
