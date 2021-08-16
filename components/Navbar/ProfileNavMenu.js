import Image from 'next/image'
import { IoIosHeart } from 'react-icons/io'
import { GoSettings } from 'react-icons/go'
import { GiMoonBats } from 'react-icons/gi'
import { useContext } from 'react'
import { MobileViewContext } from 'contexts/MobileViewContext'
import ProfileLink from '../Commons/ProfileLink'

export default function ProfileNavMenu() {
  const { showMenu, showProfile, toggleProfile } = useContext(MobileViewContext)

  return (
    <div onMouseOver={() => toggleProfile(true)} className="group relative">
      <div className="bg-gradient-to-tr from-blue-300 to-fuschia rounded-full p-1">
        <div className="h-12 w-12 md:h-10 md:w-10 rounded-full bg-white block p-[1.2px]">
          <Image
            className="rounded-full object-cover hover:-rotate-6 transform transition filter brightness-105"
            src="/images/me.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
      </div>
      {showProfile && !showMenu && (
        <ul
          onMouseLeave={() => toggleProfile(false)}
          className="absolute top-16 pt-6 right-0 flex flex-col shadow-2xl drop-shadow-2xl gap-4 p-4 bg-white text-base text-gray-700 dark:text-gray-50 dark:bg-black rounded-lg"
        >
          <ProfileLink href="/" emoji="👩‍🎤" title="Profile" />
          <ProfileLink href="/" title="My Favorites">
            <IoIosHeart color="red" />
          </ProfileLink>
          <ProfileLink href="/" title="Settings">
            <GoSettings />{' '}
          </ProfileLink>
          <ProfileLink button={true} href="/" title="Darkmode">
            <GiMoonBats color="fushcia" />{' '}
          </ProfileLink>
          <ProfileLink href="/" title="Logout" emoji="👋" />
        </ul>
      )}
    </div>
  )
}
