import NavItem from './NavItem'
export default function NavItems() {
  return (
    <ul className="hidden md:flex justify-center space-x-4 lg:space-x-14">
      <NavItem href={'/'} title="locations" />
      <NavItem href={'/'} title="community" />
      <NavItem href={'/'} title="about" />
      <NavItem href={'/'} title="learn" />
      <NavItem href={'/'} title="help the planet" />
    </ul>
  )
}
