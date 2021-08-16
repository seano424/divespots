import { ThemeProvider } from 'next-themes'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '@/components/Layout'
import MobileViewProvider from 'contexts/MobileViewContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MobileViewProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileViewProvider>
    </ThemeProvider>
  )
}

export default MyApp
