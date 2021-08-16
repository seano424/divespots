import { createContext, useState } from 'react'
export const MobileViewContext = createContext()

export default function MobileViewProvider({ children }) {
  const [showMenu, toggleMenu] = useState(false)
  const [showProfile, toggleProfile] = useState(false)
  const value = { showMenu, toggleMenu, showProfile, toggleProfile }
  return (
    <MobileViewContext.Provider value={value}>
      {children}
    </MobileViewContext.Provider>
  )
}
