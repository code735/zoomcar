import PaginationCSS from "./Pagination.module.css";
import { useContext } from "react";
import { MainContext } from "../Context/MainContextProvider";

export default function Pagination() {
  let { page, totalPage, setPage } = useContext(MainContext);
  return (
    <div style={{ margin: "3rem 0 1rem 0" }}>
      <div className={PaginationCSS.pageContainer}>
        <div>
          <button
            disabled={page <= 1}
            onClick={() => {
              setPage(page - 1);
            }}
            className={PaginationCSS.btn}
          >
            <i class="bi bi-arrow-left"></i>
          </button>
        </div>
        <div className={PaginationCSS.currentNumber}>{page}</div>
        <div>
          <button
            disabled={page >= totalPage}
            onClick={() => {
              setPage(page + 1);
            }}
            className={PaginationCSS.btn}
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
