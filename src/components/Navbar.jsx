// Navbar.jsx
import { navbarData } from '../data/navbar'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import { Heart, LucideShoppingBag, Moon, Search, User } from 'lucide-react'

const Navbar = ({ darkMode }) => {
  return (
    <div className={` ${darkMode && 'dark'}`}>
      <nav className="flex justify-between items-center px-5 py-5 bg-gray-100 dark:bg-black dark:text-white transition-colors duration-700 ease-out">
        <img
          src={darkMode ? logoDark : logoLight}
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
        <div className="rounded-md p-2 flex items-center justify-center gap-2 bg-gray-100">
          <form className="flex items-center bg-transparent gap-3 justify-center">
            <input
              className="outline-none px-3 bg-transparent"
              placeholder="Search for clothing"
            />
            <button type="submit" onClick={(e) => e.preventDefault()}>
              <Search className={`${!darkMode && 'text-black'}`} />
            </button>
          </form>
        </div>
        <div className="flex gap-10 justify-around items-center pr-6">
          <a href="">
            <User radius={'100%'} />
          </a>
          <a href="">
            <Heart />
          </a>
          <a href="">
            <LucideShoppingBag />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
