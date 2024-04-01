import { Cross, XIcon } from 'lucide-react'
import { header } from '../data/header'
import { useState, useEffect } from 'react'
import { AnimatePresence, easeInOut, easeOut, motion } from 'framer-motion'
const TextFlash = ({ texts, duration }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, duration)
    return () => clearInterval(interval)
  }, [texts.length, duration, index])

  return (
    <div
      style={{ position: 'relative' }}
      className="flex font-bebas-neue text-center flex-1 justify-center"
    >
      <AnimatePresence mode="wait">
        {header.map((textShown, i) => {
          return (
            index == i && (
              <motion.div
                // className="flex-grow"
                layout
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1, ease: 'easeOut' }, // Adjust the duration as needed
                }}
              >
                {textShown}
              </motion.div>
            )
          )
        })}
      </AnimatePresence>
    </div>
  )
}
const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  return (
    showHeader && (
      <header className="flex dark:bg-gray-200 dark:text-black justify-between px-4 py-2 bg-black text-white ">
        <TextFlash texts={header} duration={5000}></TextFlash>
        <XIcon
          className="hover:cursor-pointer"
          onClick={() => {
            setShowHeader(false)
          }}
        />
      </header>
    )
  )
}
export default Header
