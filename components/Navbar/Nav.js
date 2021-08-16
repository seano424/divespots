import NavHamburger from './NavHamburger'
import NavItems from './NavItems'
import NavLogo from './NavLogo'
import NavTheme from './NavTheme'
import MobileNavbarMenu from './MobileNavbarMenu'
import ProfileNavMenu from './ProfileNavMenu'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full text-3xl h-20">
      <NavHamburger />
      <MobileNavbarMenu />
      <NavItems />
      <NavLogo />
      <section className="flex items-center space-x-6">
        <NavTheme />
        <ProfileNavMenu />
      </section>
    </nav>
  )
}
