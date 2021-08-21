import NavHamburger from './NavHamburger'
import NavItems from './NavItems'
import NavTheme from './NavTheme'
import MobileNavbarMenu from './MobileNavbarMenu'
import Profile from '../Profile/Profile'
import Logo from '../Commons/Logo'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Link from 'next/link'
import NavItem from './NavItem'

export default function Nav() {
  return (
    <nav className="py-4">
      <ul className="flex items-center justify-between mx-auto h-20">
        <NavHamburger />
        <MobileNavbarMenu />
        <Logo />
        <NavItems />
        <section className="flex justify-end items-center space-x-6">
          <SignedIn>
            <NavTheme />
            <Profile />
          </SignedIn>
          <SignedOut>
            <div className="hidden lg:flex">
              <NavItem href={'/sign-in'} title="Sign in" />
            </div>
            <NavItem button href={'/sign-up'} title="Get started" />
          </SignedOut>
        </section>
      </ul>
    </nav>
  )
}
