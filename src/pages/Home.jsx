// Home.jsx
import Carousel from '../sections/Carousel'
import Featured from '../sections/Featured'
import MensTrending from '../sections/MenTrending'
import WomenTrending from '../sections/WomenTrending'
import Essentials from '../sections/Essentials'
import Footer from '../sections/Footer'
import EmblaCarousel from '../components/EmblaCarousel'
import '../components/embla.css'

const Home = () => {
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Featured />
      <MensTrending />
      <WomenTrending />
      <Essentials />
      <Footer />
    </div>
  )
}

export default Home
