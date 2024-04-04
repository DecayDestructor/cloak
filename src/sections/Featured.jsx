import axios from 'axios'
import { ArrowRight } from 'lucide-react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { featuredData } from '../data/featured'
const Featured = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="md:my-28 max-md:my-16 flex flex-col items-center gap-3">
      <span className="font-istok-web">upstyle yourself</span>
      <h1 className="text-center tracking-tighter hover:tracking-widest transition-[letter-spacing] duration-300 ease-in-out font-open-sans font-extrabold  md:text-5xl max-md:text-2xl">
        CLOAK LIGHTWEIGHTS
      </h1>
      <span className="font-istok-web text-lg ">Fresh styles</span>
      <button className="gap-2 shadow-md flex items-center md:p-2 md:px-5 max-md:p-[6px] max-md:px-3 rounded-full dark:text-black dark:bg-white text-white bg-black max-md:text-sm active:scale-[0.95]">
        <span> Shop Now</span>
        <ArrowRight />
      </button>

      <Slider {...settings} className="w-[90%] py-5 mt-10">
        {featuredData.map((item) => {
          return (
            <Card
              key={item.id}
              src={item.src}
              title={item.name}
              price={item.price}
              category={item.category}
              mrpPrice={item.mrpPrice}
            />
          )
        })}
      </Slider>
    </div>
  )
}
export const Card = (props) => {
  const { src, title, price, category, mrpPrice } = props
  return (
    <div className="flex flex-col items-center bg-slate-200 text-black font-poppins pt-4 pb-4 mx-1 rounded-none shadow-lg border-1  border-transparent hover:border-black dark:hover:border-white">
      <img src={src} alt="pic" className={`h-[80%] aspect-square`} />
      <div className="self-start ml-4 w-full mt-3">
        <h3 className="lg:text-lg md:text-medium max-md:text-sm font-semibold">
          {title}
        </h3>
        <span className="text-gray-700">{category}</span>
        <div className="flex flex-col justify-center items-end w-[90%]">
          <h2 className="text-lg font-bold max-md:text-medium">${price}</h2>
          <span className="text-xs line-through text-red-500">${mrpPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default Featured
