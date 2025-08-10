import { useState } from 'react'

import Hero from '../Components/Hero'
import Benefits from '../Components/Benefits'
import Ingredients from '../Components/Ingredients'
import BeforeAfter from '../Components/BeforeAfter'
import Testimonials from '../Components/Testimonials'
import Purchase from '../Components/Purchase'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Products from '../Components/Products'
import FullScreenVideo from '../Components/FullScreenVideo'

function HomePage() {

  return (
    <>
   
     <Purchase/>
     
     <Benefits/>
     <Ingredients/>
     <Products/>
     {/* <BeforeAfter/> */}
     <Testimonials/>
     <Hero/>
     <Contact/>
    </>
  )
}

export default HomePage
