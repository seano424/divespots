import { IoIosHeart } from 'react-icons/io'
import { GoSettings } from 'react-icons/go'
import { GiMoonBats } from 'react-icons/gi'
import ProfileLink from './ProfileLink'
import { useContext } from 'react'
import { MobileViewContext } from 'contexts/MobileViewContext'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import AuthLink from './AuthLink'
import ProfileLogout from './ProfileLogout'

export default function ProfileMenu() {
  const { showMenu, showProfile, toggleProfile } = useContext(MobileViewContext)

  return (
    <>
      {showProfile && !showMenu && (
        <ul
          onMouseLeave={() => toggleProfile(false)}
          className="absolute top-12 pt-6 right-0 flex flex-col shadow-2xl drop-shadow-2xl gap-4 p-4 bg-white text-base text-gray-700 dark:text-gray-50 dark:bg-black rounded-lg z-50"
        >
          <SignedIn>
            <ProfileLink href="/profile" emoji="👩‍🎤" title="Profile" />
            <ProfileLink href="/" title="My Favorites">
              <IoIosHeart color="red" />
            </ProfileLink>
            <ProfileLink href="/" title="Settings">
              <GoSettings />{' '}
            </ProfileLink>
            <ProfileLogout />
          </SignedIn>
          <SignedOut>
            <AuthLink />
            <ProfileLink href="/sign-up" emoji="👩‍🎤" title="Sign up" />
          </SignedOut>
          <ProfileLink button={true} title="Darkmode">
            <GiMoonBats color="fushcia" />{' '}
          </ProfileLink>
        </ul>
      )}
    </>
  )
}
