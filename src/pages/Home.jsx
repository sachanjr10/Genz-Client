

import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newslettter from '../components/Newslettter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar />
        <Slider/>
        <Categories/>
        <Products />
        <Newslettter/>
        <Footer/>
        
    </div>
  )
}

export default Home