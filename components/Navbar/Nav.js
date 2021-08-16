import NavHamburger from './NavHamburger'
import NavItems from './NavItems'
import NavTheme from './NavTheme'
import MobileNavbarMenu from './MobileNavbarMenu'
import ProfileNavMenu from './ProfileNavMenu'
import Logo from '../Commons/Logo'

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 items-center justify-between h-20">
          <NavHamburger />
          <MobileNavbarMenu />
          <Logo />
          <NavItems />
          <section className="flex justify-end items-center space-x-6">
            <NavTheme />
            <ProfileNavMenu />
          </section>
        </div>
      </div>
    </nav>
  )
}
