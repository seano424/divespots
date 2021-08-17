import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function ProfileLink({ href, emoji, children, title, button }) {
  const { theme, setTheme } = useTheme()
  return (
    <>
      {button ? (
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex cursor-pointer items-center"
        >
          {' '}
          <span className="flex-shrink-0 w-10">{children}</span>
          <span className="min-w-max transform hover:scale-105 hover:text-gray-900 dark:hover:text-gray-50">
            {title}
          </span>
        </div>
      ) : (
        <Link href={href}>
          <a className="flex items-center">
            {' '}
            <span className="flex-shrink-0 w-10 ">
              {emoji ? emoji : children}
            </span>
            <span className="min-w-max transform hover:scale-105 hover:text-gray-900 dark:hover:text-gray-50">
              {title}
            </span>
          </a>
        </Link>
      )}
    </>
  )
}
