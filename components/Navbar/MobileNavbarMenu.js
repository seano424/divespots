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
      } z-50 text-base grid grid-cols-2 gap-8 py-8 top-20 px-4 w-10/12 bg-white shadow-2xl drop-shadow-2xl text-gray-700 rounded-lg`}
    >
      <MobileNavLink href="/" emoji="🌎" title="Join Divespots" />
      <MobileNavLink href="/" emoji="🤿" title="Explore" />
      <Link href="/">
        <a className="flex">
          <span className="h-6 w-8 text-white dark:bg-white dark:text-black flex-shrink">
            <span className="bg-black text-xs p-[2px]">DS</span>
          </span>
          <span className="transform hover:scale-105 hover:text-gray-900">
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
