import { useContext } from 'react'
import { MobileViewContext } from 'contexts/MobileViewContext'
import Link from 'next/link'
import MobileNavLink from './MobileNavLink'

export default function MobileNavbarMenu() {
  const { showMenu } = useContext(MobileViewContext)
  return (
    <ul
      className={`${
        showMenu ? 'absolute' : 'hidden'
      } z-50 text-base grid grid-cols-2 gap-8 py-8 top-20  w-10/12 bg-white dark:bg-black shadow-2xl drop-shadow-2xl text-gray-700 dark:text-white rounded-lg`}
    >
      <MobileNavLink href="/" emoji="🌎" title="Join Divespots" />
      <MobileNavLink href="/" emoji="🤿" title="Explore" />
      <Link href="/">
        <a className="flex px-3">
          <span className="flex-shrink font-black navitems rounded-tr-lg rounded-bl-lg bg-black text-white dark:text-black dark:bg-white w-7 items-center justify-center flex">
            <span className="text-secondary">D</span>S
          </span>

          <span className="transform pl-2 hover:scale-105 hover:text-gray-900 dark:hover:text-gray-100">
            Homepage
          </span>
        </a>
      </Link>
      <MobileNavLink href="/" emoji="🧑🏽‍🚀" title="Profile" />
      <MobileNavLink href="/" emoji="💬" title="Community" />
      <MobileNavLink href="/" emoji="📰" title="Newsletter" />
      <MobileNavLink href="/" emoji="🏴‍☠️" title="Meetups" />
      <MobileNavLink href="/" emoji="👋" title="Login" />
    </ul>
  )
}
