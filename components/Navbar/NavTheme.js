import { RiSunFill } from 'react-icons/ri'
import { HiMoon } from 'react-icons/hi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function NavTheme() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setTheme(localStorage.getItem('theme') || theme)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div
      className="hidden relative md:block text-3xl"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div
        className={`${
          theme === 'dark'
            ? 'opacity-100 transform scale-110 rotate-45'
            : 'opacity-0 '
        } absolute transition-all duration-700 ease-in-out cursor-pointer `}
      >
        <RiSunFill />
      </div>

      <div
        className={`${
          theme !== 'dark'
            ? 'opacity-100 transform -rotate-12'
            : 'opacity-0 text-white transform rotate-180'
        } transition duration-500 ease-in-out cursor-pointer`}
      >
        <HiMoon />
      </div>
    </div>
  )
}
