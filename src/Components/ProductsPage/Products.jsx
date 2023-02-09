import { useContext, useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import ProductCSS from "./Products.module.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MainContext } from "../Context/MainContextProvider";

export default function Products() {
  let { sort, filter } = useContext(MainContext);
  let [productData, setProductData] = useState([]);
  async function getData(url) {
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    setProductData(data);
  }

  useEffect(() => {
    // https://api-zoom-car-clone.cyclic.app/cards
    console.log(`https://api-zoom-car-clone.cyclic.app/cards${sort}${filter}`);
    getData(`https://api-zoom-car-clone.cyclic.app/cards${sort}${filter}`);
  }, [sort, filter]);

  return (
    <>
      <Link to="/payment">
        <button>To Payment</button>
      </Link>

      <section id="productSection" className="bg-light w-100">
        <div className={`bg-light d-flex ${ProductCSS.mainContainer}`}>
          <div className="filterMenu">
            <FilterMenu />
          </div>

          <div>
            <div className="d-flex flex-row">
              <div className="nameCity border border-success rounded">
                City Name
              </div>
              <div className="time-bar border border-success rounded">Time</div>
            </div>
            <div className={ProductCSS.productCardsContainer}>
              {console.log(productData)}
              {productData &&
                productData.map((element) => {
                  return <ProductCard key={element.id} productData={element} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
