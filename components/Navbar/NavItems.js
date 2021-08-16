import NavItem from './NavItem'
export default function NavItems() {
  return (
    <ul className="hidden md:flex items-center flex-shrink-0 space-x-4 h-14 w-14">
      <NavItem href={'/'} description="helloz" />
      <NavItem href={'/'} description="helloz" />
      <NavItem href={'/'} description="helloz" />
      <NavItem href={'/'} description="helloz" />
    </ul>
  )
}
