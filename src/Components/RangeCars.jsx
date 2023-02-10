import React from 'react'
import carsData from '../cars_db.json';
import { useState,useEffect } from 'react';

export default function RangeCars() {

let [productData, setProductData] = useState(carsData);

  console.log(productData);

  let cars=[];

  for(let i=0;i<10;i++){
    cars.push(
        <div key={i} style={{
            width:"20%"
        }}>
            <h6>{productData[i].car_data.name}</h6>
            <img src={productData[i].car_data.url} alt="" />
        </div>
    )
  }

  return (
    <div style={{
        textAlign:"center",
        color:"black"
    }}>
       <h3>CHOOSE FROM OUR WIDE RANGE OF CARS</h3>
       <div style={{display:"flex",alignItems:"center"}}>
        {
            cars
        }
       </div>
    </div>
  )
}
