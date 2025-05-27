import { createContext, useContext } from "react";

export const BurgerLayersContext = createContext();
export const useBurgerLayers = () => useContext(BurgerLayersContext);