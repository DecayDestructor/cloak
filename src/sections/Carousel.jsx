import React from 'react'
import landingMain from '../assets/landingMain.mp4'
const Carousel = () => {
  return (
    <div className="flex justify-center items-center lg:mt-[-6.5%] md:mt-10 max-sm:mt-[100px]">
      <video autoPlay loop src={landingMain} muted className="grow" />
    </div>
  )
}
export default Carousel
