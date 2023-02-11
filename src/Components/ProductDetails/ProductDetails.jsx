import ProductDetailsCSS from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContextProvider";
import RightContainer from "./RightContainer";

export default function ProductDetails() {
  let { isLoading, setisLoading } = useContext(MainContext);
  let [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();

  async function getData(url) {
    // setIsLoading(true);
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    console.log(data);
    setSingleProduct(data);
    localStorage.setItem("productData", JSON.stringify(data));
    // setIsLoading(false);
  }

  useEffect(() => {
    getData(`https://api-zoom-car-clone.cyclic.app/cards/${id}`);
  }, []);

  return (
    <div className={`${ProductDetailsCSS.mainContainer} bg-light`}>
      <div className={ProductDetailsCSS.leftContainer}></div>
      <div className={ProductDetailsCSS.rightContainer}>
        <RightContainer />
      </div>
    </div>
  );
}
