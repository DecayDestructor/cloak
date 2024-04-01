import Home from './pages/Home'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <button
        className="rounded-full bg-black p-3 fixed bottom-5 right-5 z-30"
        onClick={() => {
          setDarkMode(!darkMode)
          document.documentElement.classList.toggle('dark')
        }}
      >
        {darkMode ? <Sun color="white" /> : <Moon color="white" />}
      </button>

      <Navbar darkMode={darkMode} />

      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}
export default App
