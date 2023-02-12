import ProductDetailsCSS from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContextProvider";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import Loading from "../ProductsPage/Loading";

export default function ProductDetails() {
  let { isLoading, setIsLoading } = useContext(MainContext);
  let [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();

  async function getData(url) {
    setIsLoading(true);
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    setSingleProduct(data);
    localStorage.setItem("productData", JSON.stringify(data));
    setIsLoading(false);
  }

  useEffect(() => {
    console.log(`https://api-zoom-car-clone.cyclic.app/cards/${id}`);
    getData(`https://api-zoom-car-clone.cyclic.app/cards/${id}`);
  }, []);

  return (
    <div className={ProductDetailsCSS.mainContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={ProductDetailsCSS.flexContainer}>
          <div className={ProductDetailsCSS.leftContainer}>
            {singleProduct.hasOwnProperty("car_data") ? (
              <LeftContainer data={singleProduct.car_data} />
            ) : (
              false
            )}
          </div>
          <div className={ProductDetailsCSS.rightContainer}>
            <RightContainer />
          </div>
        </div>
      )}
    </div>
  );
}
