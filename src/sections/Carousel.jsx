import React from 'react'
import landingMain from '../assets/landingMain.mp4'
const Carousel = () => {
  return (
    <div className="flex justify-center items-center mt-[-25px]">
      <video autoPlay loop src={landingMain} muted className="grow" />
    </div>
  )
}
export default Carousel
