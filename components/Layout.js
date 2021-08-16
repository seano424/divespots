import Footer from './Commons/Footer'
import Nav from './Navbar/Nav'

export default function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
