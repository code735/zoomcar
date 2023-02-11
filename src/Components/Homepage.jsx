import React from 'react'
import Hero from './Hero'
import Marketplace from './Marketplace Components/Marketplace'
import RangeCars from './RangeCars'

export default function Homepage() {
  return (
    <div>
      <Hero/>
      <RangeCars/>
      <Marketplace/>
    </div>
  )
}
