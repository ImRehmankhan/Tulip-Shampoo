import { useState } from 'react'

import Hero from '../Components/Hero'
import Benefits from '../Components/Benefits'
import Ingredients from '../Components/Ingredients'
import BeforeAfter from '../Components/BeforeAfter'
import Testimonials from '../Components/Testimonials'
import Purchase from '../Components/Purchase'
import Contact from '../Components/Contact'
import Header from '../Components/Header'

function HomePage() {

  return (
    <>
     <Header />
     <Hero/>
     <Benefits/>
     <Ingredients/>
     <BeforeAfter/>
     <Testimonials/>
     <Purchase/>
     <Contact/>
    </>
  )
}

export default HomePage
