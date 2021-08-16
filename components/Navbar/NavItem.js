import Link from 'next/link'

export default function NavItem({ href, title }) {
  return (
    <Link href={href}>
      <a className="navitems dark:text-gray-50 text-gray-500 font-medium tracking-wide capitalize text-base min-w-max">
        {title}
      </a>
    </Link>
  )
}
