import Home from './pages/Home'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-full">
      <Navbar darkMode={darkMode} />
      <button
        className="rounded-full bg-black p-3 sticky bottom-5 right-5 "
        onClick={() => {
          setDarkMode(!darkMode)
          document.documentElement.classList.toggle('dark')
        }}
      >
        {darkMode ? <Sun color="white" /> : <Moon color="white" />}
      </button>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
export default App
