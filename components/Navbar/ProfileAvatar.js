import Image from 'next/image'
import { useContext } from 'react'
import { MobileViewContext } from 'contexts/MobileViewContext'

export default function ProfileAvatar() {
  const { showProfile, toggleProfile } = useContext(MobileViewContext)
  return (
    <div
      onClick={() => toggleProfile(!showProfile)}
      className="bg-gradient-to-tr from-primary to-secondary rounded-full p-1"
    >
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
  )
}
