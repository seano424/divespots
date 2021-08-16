import Logo from '@/components/Commons/Logo'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full mt-20 text-gray-200">
        <section className="flex flex-col lg:flex-row gap-10 w-full bg-gray-700 px-32 py-12">
          <p className=" flex-shrink-0 w-96">
            We use Octopods at Octopods. Get in touch with us through any of the
            following channels
          </p>
          <aside className="flex gap-x-4 gap-y-2 flex-wrap">
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
            <Link href="/">
              <a className="">Social Media</a>
            </Link>
            <Link href="/">
              <a className="">Social Media</a>
            </Link>
          </aside>
        </section>

        <section className="w-full bg-gray-900 py-20">
          <article className="flex flex-col lg:flex-row gap-10 px-32">
            <aside className="flex-shrink-0 w-96">
              <Logo color="text-white" />
              <p className="">Connecting scuba divers all over the planet</p>
            </aside>
            <div className="flex gap-28">
              <aside className="flex flex-col flex-wrap gap-y-4">
                <h3>Product</h3>
                <Link href="/">
                  <a className="">Features</a>
                </Link>
                <Link href="/">
                  <a className="">Pricing</a>
                </Link>
                <Link href="/">
                  <a className="">Team</a>
                </Link>
              </aside>
              <aside className="flex flex-col flex-wrap gap-y-4">
                <h3>Support</h3>
                <Link href="/">
                  <a className="">Help Center</a>
                </Link>
                <Link href="/">
                  <a className="">Guides</a>
                </Link>
              </aside>
              <aside className="flex flex-col flex-wrap gap-y-4">
                <h3>Legal</h3>
                <Link href="/">
                  <a className="">Privacy Policy</a>
                </Link>
                <Link href="/">
                  <a className="">Terms of service</a>
                </Link>
              </aside>
            </div>
          </article>

          <article class="mt-12 border-t lg:mx-80 flex flex-col items-center justify-center border-gray-700 pt-8 bg-gray-900">
            <p class="text-base leading-6 text-gray-400 xl:text-center">
              Made with️ ❤️ in Playa del Carmen, Mexico and Kansas, USA 🇺🇸🇲🇽
            </p>

            <p class="text-base leading-6 text-gray-400 xl:text-center">
              © 2021 Divespots Software Systems. All rights reserved.
            </p>
          </article>
        </section>
      </footer>
    </div>
  )
}

// We use the dive community to be more informed divers. And have fun! Get in touch with us through any of
//               the following channels
