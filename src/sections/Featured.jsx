import axios from 'axios'
import { ArrowRight, ArrowRightCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { featuredData } from '../data/featured'
const Featured = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products?limit=5'
        )
        setData(response.data)
        setIsLoading(false)
        console.log(response.data) // Moved logging here
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="md:my-28 max-md:my-16 flex flex-col items-center gap-3">
      <span className="font-istok-web">upstyle yourself</span>
      <h1 className="text-center tracking-tighter hover:tracking-widest transition-[letter-spacing] duration-300 ease-in-out font-open-sans font-extrabold  md:text-5xl max-md:text-2xl">
        CLOAK LIGHTWEIGHTS
      </h1>
      <span className="font-istok-web text-lg ">Fresh styles</span>
      <button className="gap-2 shadow-md flex md:p-2 md:px-5 max-md:p-[6px] max-md:px-3 rounded-full dark:text-black dark:bg-white text-white bg-black max-md:text-sm active:scale-[0.95]">
        <span> Shop Now</span>
        <ArrowRight />
      </button>
      {!isLoading ? (
        <Slider {...settings} className="w-[90%] py-5 mt-10">
          {featuredData.map((item) => {
            return (
              <Card
                key={item.id}
                src={item.src}
                title={item.name}
                price={item.price}
                category={item.category}
              />
            )
          })}
        </Slider>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}
export const Card = (props) => {
  const { src, title, price, category } = props
  return (
    <div className="flex flex-col items-center dark:bg-white bg-black dark:text-black text-white font-poppins pt-4 pb-10 mx-7 rounded-none shadow-lg">
      <img
        src={src}
        alt="pic"
        className={` h-3/6 aspect-square before:dark:bg-black before:dark:text-white before:bg-white before:text-black`}
      ></img>
      <div className=" py-5">
        <h3 className="lg:text-lg md:text-medium max-md:text-sm">{title}</h3>
        <span>{category}</span>
        <h5>{price}</h5>
      </div>
    </div>
  )
}
export default Featured
