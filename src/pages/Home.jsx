// Home.jsx
import Carousel from '../sections/Carousel'
import Featured from '../sections/Featured'
import MensTrending from '../sections/MenTrending'
// import WomenTrending from '../sections/WomenTrending'
import Essentials from '../sections/Essentials'
import Footer from '../sections/Footer'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'

const Home = () => {
  const OPTIONS = { loop: true }

  return (
    <div className="">
      <Carousel />
      <Featured />
      <Essentials />
      <MensTrending />
      {/* <WomenTrending /> */}
      <Footer />
    </div>
  )
}

export default Home
