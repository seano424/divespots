import Cards from '@/components/Card/Cards'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Divespots - Best place for divers around the 🌏 🐳 🐠 🦀</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤿</text></svg>"
        /> */}
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Cards />
      </main>
    </div>
  )
}

// We use the dive community to be more informed divers. And have fun! Get in touch with us through any of
//               the following channels
