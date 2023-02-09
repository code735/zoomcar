import { createContext, useState } from "react";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(false);
  let [sort, setSort] = useState("?_sort");
  let [filter, setFilter] = useState("");

  return (
    <MainContext.Provider
      value={{ isAuth, setIsAuth, sort, setSort, filter, setFilter }}
    >
      {children}
    </MainContext.Provider>
  );
}
