// Navbar.jsx
import { navbarData } from '../data/navbar'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import {
  Heart,
  LucideShoppingBag,
  MenuIcon,
  Moon,
  Search,
  ShoppingBag,
  User,
} from 'lucide-react'
import { IconButton, Menu, Tooltip } from '@mui/material'
import { useRef, useState, useEffect } from 'react'

const Navbar = ({ darkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const sideBarRef = useRef(null)
  const [showFullWidthSearch, setShowFullWidthSearch] = useState('false')
  return (
    <nav
      className={`flex sticky top-0 justify-between items-center px-5 py-2 bg-gray-100 dark:bg-black dark:text-white text-black transition-all duration-500 ease-out font-poppins ${
        !visible && 'hidden'
      }`}
    >
      <img
        src={darkMode ? logoDark : logoLight}
        alt="logo-pic"
        className="h-[50px] w-[50px]"
      />
      <ul className="flex gap-8 max-md:hidden">
        {navbarData.map((category) => (
          <li key={category.id}>
            <a href="">{category.name}</a>
          </li>
        ))}
      </ul>
      <div className="rounded-md p-2 flex items-center justify-center gap-2 bg-transparent">
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
        className="md:hidden absolute right-0 translate-x-[125%] top-0 h-full w-[250px] dark:bg-black bg-gray-100 p-6 z-10 transition-transform duration-500 ease-out"
      >
        <IconButton>
          <MenuIcon
            onClick={() => {
              sideBarRef.current.style.transform = 'translateX(125%)'
            }}
            color={`${darkMode ? 'black' : 'white'}`}
          />
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
      <div className="flex gap-10 md:justify-around items-center md:pr-6 max-md:gap-2 max-md:justify-end">
        <span className="md:hidden">
          <IconButton>
            <Search color={`${darkMode ? 'black' : 'white'}`} />
          </IconButton>
        </span>

        <Tooltip title="Profile">
          <a href="">
            <IconButton>
              <User radius={'100%'} color={`${darkMode ? 'black' : 'white'}`} />
            </IconButton>
          </a>
        </Tooltip>
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
        <span className="md:hidden">
          <IconButton className="md:hidden">
            <MenuIcon
              className="md:hidden"
              color={`${darkMode ? 'black' : 'white'}`}
              onClick={() => {
                sideBarRef.current.style.transform = 'translateX(0)'
              }}
            />
          </IconButton>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
