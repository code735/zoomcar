import { useContext, useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import ProductCSS from "./Products.module.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MainContext } from "../Context/MainContextProvider";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function Products() {
  let {
    sort,
    filter,
    isLoading,
    setIsLoading,
    page,
    setPage,
    totalPage,
    handleTotalPages,
  } = useContext(MainContext);
  let [productData, setProductData] = useState([]);
  async function getData(url) {
    let fetchData = await fetch(url);
    handleTotalPages(fetchData.headers.get("x-total-count"));
    let data = await fetchData.json();
    setProductData(data);
  }

  useEffect(() => {
    setIsLoading(true);
    console.log(`https://api-zoom-car-clone.cyclic.app/cards${sort}${filter}`);
    getData(
      `https://api-zoom-car-clone.cyclic.app/cards${sort}${filter}&_page=${page}&_limit=10`
    );
    setIsLoading(false);
  }, [sort, filter, page]);

  return (
    <>
      <Link to="/payment">
        <button>To Payment</button>
      </Link>

      <section id="productSection" className="bg-light w-100 pt-4">
        <div className={`bg-light d-flex ${ProductCSS.mainContainer}`}>
          <div className="filterMenu">
            <FilterMenu />
          </div>

          <div style={{ width: "70%" }}>
            {isLoading ? (
              <Loading />
            ) : (
              <div className={ProductCSS.productCardsContainer}>
                <div className={`${ProductCSS.nameCity} border rounded`}>
                  <p>Chandigarh . MGPP+3Q Rupalheri, Punjab, India</p>
                </div>
                <div className={`${ProductCSS.timeBar} border rounded`}>
                  <div>
                    <label> START DATE/TIME</label>
                    <p>10 Feb,2023 04:00 PM</p>
                  </div>

                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>

                  <div>
                    <label> END DATE/TIME</label>
                    <p>11 Feb,2023 12:00 AM</p>
                  </div>
                </div>
                {productData &&
                  productData.map((element) => {
                    return (
                      <ProductCard key={element.id} productData={element} />
                    );
                  })}
              </div>
            )}
            <Pagination page={page} />
          </div>
        </div>
      </section>
    </>
  );
}
