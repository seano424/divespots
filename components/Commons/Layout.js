import Footer from './Footer'
import Nav from '../Navbar/Nav'

export default function Layout({ children }) {
  return (
    <main>
      <section className="mx-auto max-w-6xl w-11/12 xl:w-full">
        <Nav />
        {children}
      </section>
      <Footer />
    </main>
  )
}
