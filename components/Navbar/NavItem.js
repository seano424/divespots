import Link from 'next/link'

export default function NavItem({ href, description }) {
  return (
    <Link href={href}>
      <a>{description}</a>
    </Link>
  )
}
