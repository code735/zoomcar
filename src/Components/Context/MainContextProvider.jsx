import { createContext, useState } from "react";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(true);
  let [isLoading, setIsLoading] = useState(true);
  let [sort, setSort] = useState("?_sort");
  let [filter, setFilter] = useState("");
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);

  function handleTotalPages(dataCount) {
    let totalPage = dataCount / 10;
    setTotalPage(Math.ceil(totalPage));
  }

  return (
    <MainContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        sort,
        setSort,
        filter,
        setFilter,
        page,
        setPage,
        totalPage,
        setTotalPage,
        handleTotalPages,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
