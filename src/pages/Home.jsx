// Home.jsx
import Carousel from '../sections/Carousel'
import Featured from '../sections/Featured'
import MensTrending from '../sections/MenTrending'
import WomenTrending from '../sections/WomenTrending'
import Essentials from '../sections/Essentials'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div className="mt-16">
      <Carousel />
      <Featured />
      <MensTrending />
      <WomenTrending />
      <Essentials />
      <Footer />
    </div>
  )
}

export default Home
