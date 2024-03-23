// Navbar.jsx
import { navbarData } from '../data/navbar'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import {
  Heart,
  LucideShoppingBag,
  Moon,
  Search,
  ShoppingBag,
  User,
} from 'lucide-react'
import { IconButton, Tooltip } from '@mui/material'

const Navbar = ({ darkMode }) => {
  return (
    <div className={`${darkMode && 'dark'}`}>
      <nav className="flex justify-between items-center px-5 py-5 bg-gray-100 dark:bg-black dark:text-white text-black transition-colors duration-700 ease-out">
        <img
          src={darkMode ? logoLight : logoDark}
          alt="logo-pic"
          className="h-[50px] w-[50px]"
        />
        <ul className="flex gap-8">
          {navbarData.map((category) => (
            <li key={category.id}>
              <a href="">{category.name}</a>
            </li>
          ))}
        </ul>
        <div className="rounded-md p-2 flex items-center justify-center gap-2 bg-transparent">
          <form className="flex items-center bg-transparent gap-3 justify-center">
            <input
              className={`outline-none px-3 bg-transparent dark:placeholder-white placeholder-black`}
              placeholder="Search for clothing"
            />
            <button type="submit" onClick={(e) => e.preventDefault()}>
              <Search className={`${darkMode ? 'text-white' : 'text-black'}`} />
            </button>
          </form>
        </div>
        <div className="flex gap-10 justify-around items-center pr-6">
          <Tooltip title="Profile">
            <a href="">
              <IconButton
                style={darkMode ? { color: 'white' } : { color: 'black' }}
              >
                <User radius={'100%'} />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Wishlist">
            <a href="">
              <IconButton
                style={darkMode ? { color: 'white' } : { color: 'black' }}
              >
                <Heart radius={'100%'} />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Cart">
            <a href="">
              <IconButton
                style={darkMode ? { color: 'white' } : { color: 'black' }}
              >
                <LucideShoppingBag radius={'100%'} />
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
