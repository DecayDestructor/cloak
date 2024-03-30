// Home.jsx
import Carousel from '../sections/Carousel'
import Featured from '../sections/Featured'
import MensTrending from '../sections/MenTrending'
import WomenTrending from '../sections/WomenTrending'
import Essentials from '../sections/Essentials'
import Footer from '../sections/Footer'
import EmblaCarousel from '../components/EmblaCarousel'
import '../components/embla.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [carouselPics, setCarouselPics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCarouselPics = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products?limit=5'
        )
        setCarouselPics(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching carousel pictures:', error)
        setIsLoading(false)
      }
    }

    fetchCarouselPics()
  }, []) // Empty dependency array means this effect runs only once after the initial render
  let SLIDES = []
  useEffect(() => {
    const modifyArray = () => {
      setIsLoading(false)
      SLIDES = Array.from(carouselPics)
      console.log(SLIDES.length)
      console.log(carouselPics)
    }
    // This will log carouselPics every time it changes
    carouselPics.length == 0 ? setIsLoading(true) : modifyArray()
  }, [carouselPics])

  const OPTIONS = { loop: true }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="">
      {SLIDES.length == 0 ? (
        <h1>LOADING</h1>
      ) : (
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      )}
      <Featured />
      <MensTrending />
      <WomenTrending />
      <Essentials />
      <Footer />
    </div>
  )
}

export default Home
