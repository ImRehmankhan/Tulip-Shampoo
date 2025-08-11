import  { useState } from 'react'

import Hero from '../Components/Hero'
import Benefits from '../Components/Benefits'
import Ingredients from '../Components/Ingredients'
import Purchase from '../Components/Purchase'
import Contact from '../Components/Contact'
import Products from '../Components/Products'
import CustomerReviews from '../Components/CustomerReviews'

function HomePage() {

  return (
    <>
   
     <Purchase/>
     
     <Benefits/>
     <Ingredients/>
     <Hero/>
     <Products/>
     {/* <BeforeAfter/> */}
     <CustomerReviews/>
     
     <Contact/>
    </>
  )
}

export default HomePage
