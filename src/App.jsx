import Home from './pages/Home'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode && 'dark'}`}>
      <button
        className="rounded-full bg-black p-3 absolute bottom-5 right-5 "
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      >
        {darkMode ? <Sun color="white" /> : <Moon color="white" />}
      </button>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
export default App
