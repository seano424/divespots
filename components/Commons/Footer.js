import Link from 'next/link'
import Logo from '@/components/Commons/Logo'
import { FaInstagramSquare, FaFacebookSquare, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-20 text-gray-200">
      <section className="flex px-10 flex-col lg:flex-row gap-10 w-full bg-gray-700 lg:px-32 py-12">
        <p className=" flex-shrink-0 lg:w-96">
          We use Octopods at Octopods. Get in touch with us through any of the
          following channels
        </p>
        <aside className="flex justify-center gap-y-10 gap-x-10 lg:gap-x-4 lg:gap-y-2 flex-wrap">
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
          <Link href="/">
            <a className="">Social Media</a>
          </Link>
        </aside>
      </section>

      <section className="w-full bg-gray-900 py-20 px-10 lg:px-0">
        <article className="flex flex-col lg:flex-row items-center gap-10 lg:px-32">
          <aside className="flex-shrink-0 w-full lg:w-96 flex items-center lg:items-start pb-10 flex-col gap-6">
            <Logo color="text-white" />
            <p className="text-base opacity-90 w-80">
              Connecting divers all around the globe 🤿 🌎
            </p>
            <div className="flex space-x-8 text-2xl">
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </aside>
          <div className="flex gap-28">
            <aside className="flex flex-col flex-wrap gap-y-4">
              <h3 className="text-gray-400">Product</h3>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Features</a>
              </Link>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Pricing</a>
              </Link>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Team</a>
              </Link>
            </aside>
            <aside className="flex flex-col flex-wrap gap-y-4">
              <h3 className="text-gray-400">Support</h3>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Help Center</a>
              </Link>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Guides</a>
              </Link>
            </aside>
            <aside className="flex flex-col flex-wrap gap-y-4">
              <h3 className="text-gray-400">Legal</h3>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">Privacy Policy</a>
              </Link>
              <Link href="/">
                <a className="text-gray-200 hover:text-white">
                  Terms of service
                </a>
              </Link>
            </aside>
          </div>
        </article>

        <article class="mt-12 border-t lg:mx-80 flex flex-col items-center justify-center border-gray-700 pt-8 bg-gray-900">
          <p class="text-base leading-6 text-gray-400 xl:text-center">
            Made with️ ❤️ in Mexico and the USA 🇺🇸🇲🇽
          </p>

          <p class="text-base leading-6 text-gray-400 xl:text-center">
            © 2021 Divespots Software Systems. All rights reserved.
          </p>
        </article>
      </section>
    </footer>
  )
}
