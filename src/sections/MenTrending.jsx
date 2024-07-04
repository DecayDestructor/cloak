import { menTrendingData } from '../data/MenTrending'
import Slider from 'react-slick'
import { useRef } from 'react'

const MenTrending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplaySpeed: 4000,
  }
  return (
    <div className="w-[95%] m-auto">
      <Slider {...settings}>
        {menTrendingData.map((item) => {
          return (
            <MenTrendingCard
              key={item.id}
              src={item.src}
              mrpPrice={item.mrpPrice}
              price={item.price}
              name={item.name}
              category={item.category}
              text={item.text}
            />
          )
        })}
      </Slider>
    </div>
  )
}
export default MenTrending

const MenTrendingCard = (props) => {
  const { id, src, price, mrpPrice, category, name, text } = props
  return (
    <div className="relative flex flex-col w-full">
      <video autoPlay loop src={src} muted className="grow" />
      <div className="absolute md:right-3 w-[40%] md:top-[35%] max-md:right-3 max-md:top-4">
        <h1 className="bg-white text-[50px] max-lg:text-[32px] max-md:text-[24px] font-extrabold text-black font-open-sans px-2 mr-6 backdrop-blur-sm dark:text-black">
          {text}
        </h1>
        <button className="flex items-center text-white transition-colors duration-400 ease-out justify-center bg-transparent border-3 border-black hover:bg-black py-3 px-4 font-istok-web my-5 font-semibold">
          SHOP NOW
        </button>
      </div>
    </div>
  )
}
