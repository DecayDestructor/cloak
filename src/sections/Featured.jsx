import { ArrowRight, ArrowRightCircle } from 'lucide-react'

const Featured = () => {
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
    </div>
  )
}
export default Featured
