import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import { SignedOut, SignedIn, RedirectToSignIn } from '@clerk/clerk-react'
import Link from 'next/link'

export default function Home() {
  const SignupLink = () => (
    <Link href="/sign-up">
      <a>
        <div>
          <h3>Create an account to start browsing divespots</h3>
          <p>This application is auth protected. Create an account to begin.</p>
        </div>
        <div>arrow right</div>
      </a>
    </Link>
  )

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Divespots - Best place for divers around the 🌏 🐳 🐠 🦀</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <SignedOut>
        <Cards />
      </SignedOut>
    </main>
  )
}

// We use the dive community to be more informed divers. And have fun! Get in touch with us through any of
//               the following channels
