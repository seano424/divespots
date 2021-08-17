import Link from 'next/link'
export default function MobileNavLink({ href, emoji, title }) {
  return (
    <Link href={href}>
      <a className="flex">
        <span className="flex-shrink dark:text-black w-8">{emoji}</span>
        <span className="transform hover:scale-105 hover:text-gray-900">
          {title}
        </span>
      </a>
    </Link>
  )
}
