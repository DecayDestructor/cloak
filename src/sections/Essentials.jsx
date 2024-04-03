import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react'
import { essentials } from '../data/essentials'

const Essentials = () => {
  return (
    <div className="md:my-28 max-md:my-16 flex flex-col items-center gap-3">
      <span className="font-istok-web">your wardrobe longs for essentials</span>
      <h1 className="text-center tracking-tighter hover:tracking-widest transition-[letter-spacing] duration-300 ease-in-out font-open-sans font-extrabold  md:text-5xl max-md:text-2xl">
        CLOAK ESSENTIALS
      </h1>
      <span className="font-istok-web text-lg ">
        Must haves in your lifestyle
      </span>
      <div className="w-[90%] flex overflow-x-auto py-5 mt-10">
        {essentials.map((item) => {
          return (
            <Card
              key={item.id}
              className="relative h-[450px] rounded-none grow mx-1 shrink-0 border-2 border-transparent hover:border-black"
            >
              <h1 className=" absolute w-full text-center tracking-wide z-10 bottom-0 font-poppins font-semibold text-[2.5rem] text-white">
                {item.title}
              </h1>

              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover rounded-none object-top"
                src={item.src}
              />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
export default Essentials
