import Nav from './Navbar/Nav'

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Nav />
      {children}
    </div>
  )
}
