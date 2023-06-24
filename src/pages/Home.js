import React from 'react'
import Navbar1 from './Navbar'
import Landingpage from './Landingpage'
import Offer from './Offer'
import About from './About'
import Product from './Product'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar1/>
        <Landingpage/>
        <Offer/>
        <About/>
        <Product/>
        <Contact/>
    </div>
  )
}

export default Home