import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Link from 'next/link'

export default function Home() {
  const SignupLink = () => (
    <Link href="/sign-up">
      <a>
        {/* <UserAddIcon className='h-7 w-7 text-blue-500' /> */}+
        <div>
          <h3>Create an account to start saving todos!</h3>
          <p>This application is auth protected. Create an account to begin.</p>
        </div>
        <div>arrow right</div>
      </a>
    </Link>
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Divespots - Best place for divers around the 🌏 🐳 🐠 🦀</title>
        <link rel="icon" href="/images/favicon.ico" />
        {/* <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐠</text></svg>"
        /> */}
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Cards />
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </main>
    </div>
  )
}

// We use the dive community to be more informed divers. And have fun! Get in touch with us through any of
//               the following channels
