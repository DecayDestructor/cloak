// Navbar.jsx
import { navbarData } from '../data/navbar'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import {
  ArrowLeftIcon,
  Heart,
  LucideShoppingBag,
  MenuIcon,
  Search,
  User,
} from 'lucide-react'
import { Tooltip } from '@nextui-org/react'
import { useRef, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
const Navbar = ({ darkMode }) => {
  const sideBarRef = useRef(null)
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  const { width } = useWindowDimensions()
  return (
    <nav
      className={`flex  w-full justify-between items-center px-5 py-2 lg:text-base md:text-sm sm:text-xs bg-gray-100 dark:bg-black dark:text-white text-black transition-all duration-500 ease-out font-poppins`}
    >
      <img
        src={darkMode ? logoDark : logoLight}
        alt="logo-pic"
        className={`h-[50px] w-[50px] ${
          width < 768 && showFullWidthSearch && 'hidden'
        }`}
      />

      <div
        className={`rounded-md p-2 flex items-center justify-evenly bg-transparent w-full gap-2 ${
          width > 768 ? 'hidden' : !showFullWidthSearch ? 'hidden' : 'false'
        }`}
      >
        <span className={`md:hidden ${!showFullWidthSearch && 'hidden'}`}>
          <ArrowLeftIcon
            color={`${darkMode ? 'black' : 'white'}`}
            size={24}
            onClick={() => {
              setShowFullWidthSearch(false)
            }}
            className="rounded-full hover:bg-gray-300 p-1 dark:hover:bg-gray-800 transition-background duration-300"
          />
        </span>
        <form className="flex items-center bg-transparent gap-1 justify-between w-full">
          <input
            className={`outline-none px-3 bg-transparent dark:placeholder-white placeholder-black text-sm grow`}
            placeholder="Search for clothing"
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            <Search size={20} />
          </button>
        </form>
      </div>

      <ul className="flex lg:gap-10 md:gap-6 max-md:hidden">
        {navbarData.map((category) => (
          <li
            key={category.id}
            className={`relative before:h-[2px] before:bottom-[-5px] before:w-0 before:absolute  before:content-[''] dark:before:bg-white before:bg-black hover:before:w-full before:transition-all before:duration-300 before:ease-out`}
          >
            <a href="">{category.name}</a>
          </li>
        ))}
      </ul>
      <div className="rounded-md p-2 flex items-center justify-center gap-2 bg-transparent max-md:hidden">
        <form className="flex items-center bg-transparent gap-3 justify-center max-md:hidden ">
          <input
            className={`outline-none px-3 bg-transparent dark:placeholder-white placeholder-black`}
            placeholder="Search for clothing"
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            <Search />
          </button>
        </form>
      </div>
      <div
        ref={sideBarRef}
        className="md:hidden absolute right-0 translate-x-[125%] top-0 h-screen w-[250px] dark:bg-black bg-gray-100 p-6 z-10 transition-transform duration-500 ease-out"
      >
        <MenuIcon
          color={`${darkMode ? 'black' : 'white'}`}
          onClick={() => {
            sideBarRef.current.style.transform = 'translateX(125%)'
            document.body.style.overflow = 'scroll'
          }}
        />
        <ul className="flex flex-col gap-7 py-5">
          {navbarData.map((category) => (
            <li
              key={category.id}
              className="hover:bg-gray-300 p-3 rounded-md transition-colors duration-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              <a href="">{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex lg:gap-8 md:gap-4 md:justify-around items-center md:pr-6 max-md:gap-2 max-md:justify-end ${
          width < 768 && showFullWidthSearch && 'hidden'
        }`}
      >
        <span
          className={` ${(width > 768 || showFullWidthSearch) && 'hidden'} `}
        >
          <Search
            color={`${darkMode ? 'black' : 'white'} `}
            size={width < 768 ? 20 : width < 1024 ? 22 : 24}
            onClick={() => {
              // console.log(showFullWidthSearch)
              setShowFullWidthSearch(true)
            }}
          />
        </span>
        <span className={``}>
          <Tooltip content="Profile">
            <a href="">
              <User
                radius={'100%'}
                color={`${darkMode ? 'black' : 'white'}`}
                size={width < 768 ? 20 : width < 1024 ? 22 : 24}
              />
            </a>
          </Tooltip>
        </span>
        <span className={``}>
          <Tooltip content="Wishlist">
            <a href="">
              <Heart
                radius={'100%'}
                color={`${darkMode ? 'black' : 'white'}`}
                size={width < 768 ? 20 : width < 1024 ? 22 : 24}
              />
            </a>
          </Tooltip>
        </span>
        <span className={``}>
          <Tooltip content="Cart">
            <a href="">
              <LucideShoppingBag
                radius={'100%'}
                color={`${darkMode ? 'black' : 'white'}`}
                size={width < 768 ? 20 : width < 1024 ? 22 : 24}
              />
            </a>
          </Tooltip>
        </span>
        <span className={`md:hidden`}>
          <MenuIcon
            className="md:hidden"
            color={`${darkMode ? 'black' : 'white'}`}
            size={20}
            onClick={() => {
              sideBarRef.current.style.transform = 'translateX(0)'
              document.body.style.overflow = 'hidden'
            }}
          />
        </span>
      </div>
    </nav>
  )
}

export default Navbar
