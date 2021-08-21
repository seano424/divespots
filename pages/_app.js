import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '@/components/Commons/Layout'
import { useRouter } from 'next/router'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react'
import { ThemeProvider } from 'next-themes'
import MobileViewProvider from 'contexts/MobileViewContext'
import {
  ApolloProviderWrapper,
  ApolloProviderWrapperWithoutUser,
} from '../lib/apolloClient'

const publicPages = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={(to) => router.push(to)}
    >
      <ThemeProvider attribute="class">
        <MobileViewProvider>
          <Layout>
            <SignedIn>
              <ApolloProviderWrapper>
                <Component {...pageProps} />
              </ApolloProviderWrapper>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </Layout>
        </MobileViewProvider>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default MyApp
