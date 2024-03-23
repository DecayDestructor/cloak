// Home.jsx
import Navbar from '../components/Navbar'
import Carousel from '../sections/Carousel'
import Featured from '../sections/Featured'
import MensTrending from '../sections/MenTrending'
import WomenTrending from '../sections/WomenTrending'
import Essentials from '../sections/Essentials'
import Footer from '../sections/Footer'

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} />
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
