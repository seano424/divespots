import Link from 'next/link'

export default function NavItem({ href, title, button }) {
  return (
    <Link href={href}>
      <a
        className={`${
          button
            ? 'bg-primary-black text-white py-2 px-2 rounded-full'
            : 'dark:text-gray-50 text-gray-500'
        } navitems font-medium lg:tracking-wide capitalize text-xs lg:text-sm min-w-max`}
      >
        {title}
      </a>
    </Link>
  )
}
