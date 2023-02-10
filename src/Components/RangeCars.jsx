import Carousel from './Carousel';
import React from 'react'
import { useState,useEffect } from 'react';

export default function RangeCars() {
  return (
    <div style={{
        textAlign:"center",
        color:"black"
    }}>
       <h3>CHOOSE FROM OUR WIDE RANGE OF CARS</h3>
       <Carousel/>
    </div>
  )
}
