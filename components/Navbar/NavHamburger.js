import { useContext } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { MobileViewContext } from 'contexts/MobileViewContext'

export default function NavHamburger() {
  const { showMenu, toggleMenu } = useContext(MobileViewContext)
  return (
    <div className="flex md:hidden">
      <Hamburger
        distance="sm"
        duration={0.3}
        toggled={showMenu}
        toggle={toggleMenu}
      />
    </div>
  )
}
