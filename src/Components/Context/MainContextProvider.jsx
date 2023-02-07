import { createContext, useState } from "react";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(false);
  return (
    <MainContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </MainContext.Provider>
  );
}
