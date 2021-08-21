import { useContext } from 'react'
import { MobileViewContext } from 'contexts/MobileViewContext'
import ProfileAvatar from './ProfileAvatar'
import ProfileMenu from './ProfileMenu'

export default function ProfileNavMenu() {
  const { toggleProfile } = useContext(MobileViewContext)

  return (
    <article onMouseOver={() => toggleProfile(true)} className="group relative">
      <ProfileAvatar />
      <ProfileMenu />
    </article>
  )
}
