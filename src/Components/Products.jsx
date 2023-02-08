import { useEffect, useState } from "react";

export default function Products() {
  let [productData, setProductData] = useState([]);
  async function getData(url) {
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    setProductData(data);
  }

  useEffect(() => {
    getData("https://api-zoom-car-clone.cyclic.app/cards");
  }, []);

  return (
    <section id="productSection" className="bg-light">
      <div></div>
      <div>
        <div className="d-flex flex-row">
          <div className="nameCity border border-success rounded">
            City Name
          </div>
          <div className="time-bar border border-success rounded">Time</div>
        </div>
      </div>
      {console.log(productData)}
    </section>
  );
}
