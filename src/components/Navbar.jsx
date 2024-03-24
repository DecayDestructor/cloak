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
import { IconButton, Tooltip } from '@mui/material'
import { useRef, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Navbar = ({ darkMode }) => {
  const sideBarRef = useRef(null)
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  const { width } = useWindowDimensions()
  return (
    <nav
      className={`flex fixed top-0 w-full justify-between items-center px-5 py-2 bg-gray-100 dark:bg-black dark:text-white text-black transition-all duration-500 ease-out font-poppins`}
    >
      <img
        src={darkMode ? logoDark : logoLight}
        alt="logo-pic"
        className={`h-[50px] w-[50px] ${
          width < 768 && showFullWidthSearch && 'hidden'
        }`}
      />
      <span className={`md:hidden ${!showFullWidthSearch && 'hidden'}`}>
        <IconButton
          onClick={() => {
            setShowFullWidthSearch(false)
          }}
        >
          <ArrowLeftIcon color={`${darkMode ? 'black' : 'white'}`} />
        </IconButton>
      </span>
      <div
        className={`rounded-md p-2 flex items-center justify-center gap-2 bg-transparent ${
          !showFullWidthSearch && 'hidden'
        }`}
      >
        <form className="flex items-center bg-transparent gap-3 justify-center ">
          <input
            className={`outline-none px-3 bg-transparent dark:placeholder-white placeholder-black`}
            placeholder="Search for clothing"
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            <Search />
          </button>
        </form>
      </div>

      <ul className="flex gap-8 max-md:hidden">
        {navbarData.map((category) => (
          <li key={category.id}>
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
        <IconButton
          onClick={() => {
            sideBarRef.current.style.transform = 'translateX(125%)'
            document.body.style.overflow = 'scroll'
          }}
        >
          <MenuIcon color={`${darkMode ? 'black' : 'white'}`} />
        </IconButton>
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
        className={`flex gap-10 md:justify-around items-center md:pr-6 max-md:gap-2 max-md:justify-end ${
          width < 768 && showFullWidthSearch && 'hidden'
        }`}
      >
        <span
          className={` ${(width > 768 || showFullWidthSearch) && 'hidden'} `}
        >
          <IconButton
            onClick={() => {
              // console.log(showFullWidthSearch)
              setShowFullWidthSearch(true)
            }}
          >
            <Search color={`${darkMode ? 'black' : 'white'} `} />
          </IconButton>
        </span>
        <span className={``}>
          <Tooltip title="Profile">
            <a href="">
              <IconButton>
                <User
                  radius={'100%'}
                  color={`${darkMode ? 'black' : 'white'}`}
                />
              </IconButton>
            </a>
          </Tooltip>
        </span>
        <span className={``}>
          <Tooltip title="Wishlist">
            <a href="">
              <IconButton>
                <Heart
                  radius={'100%'}
                  color={`${darkMode ? 'black' : 'white'}`}
                />
              </IconButton>
            </a>
          </Tooltip>
        </span>
        <span className={``}>
          <Tooltip title="Cart">
            <a href="">
              <IconButton>
                <LucideShoppingBag
                  radius={'100%'}
                  color={`${darkMode ? 'black' : 'white'}`}
                />
              </IconButton>
            </a>
          </Tooltip>
        </span>
        <span className={``}>
          <IconButton
            className="md:hidden"
            onClick={() => {
              sideBarRef.current.style.transform = 'translateX(0)'
              document.body.style.overflow = 'hidden'
            }}
          >
            <MenuIcon
              className="md:hidden"
              color={`${darkMode ? 'black' : 'white'}`}
            />
          </IconButton>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
