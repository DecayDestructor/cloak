import axios from 'axios'
import { ArrowRight, ArrowRightCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
        <Slider {...settings} className="w-3/4">
          <Card src="" title="Shoes" price={300} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}
export const Card = (props) => {
  const { src, title, price } = props
  return (
    <div className="flex flex-col">
      <img src={src} alt="pic"></img>
      <div className="">
        <h3>{title}</h3>
        <h5>{price}</h5>
      </div>
    </div>
  )
}
export default Featured
