import { useClerk } from '@clerk/clerk-react'

export default function ProfileLogout() {
  const { signOut } = useClerk()
  return (
    <div onClick={() => signOut()} className="flex cursor-pointer items-center">
      {' '}
      <span className="flex-shrink-0 w-10">👋 </span>
      <span className="min-w-max transform hover:scale-105 hover:text-gray-900 dark:hover:text-gray-50">
        Sign out
      </span>
    </div>
  )
}
