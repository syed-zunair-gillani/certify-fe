import type { Metadata } from 'next'
import Script from 'next/script'
import Layout from '../components/Layout'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { GTM } from '../components/GTM'
import '@/styles/globals.css'
import { getTopBar } from '@/sanity/lib/topbar'
import TopBar from '@/components/TopBar'

// const appHost = process.env.APP_HOST ?? ''
const appHost = process.env.APP_HOST || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(appHost),
  alternates: {
    canonical: '/'
  },
  ...(process.env.APP_ENV === 'production' ? {} : {
    robots: 'noindex, nofollow'
  })
}

const PreloadTags = (): JSX.Element => (
  <>
    <link rel='preload' href='/fonts/IvarText-Regular.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
    <link rel='preload' href='/fonts/ABCDiatype-Regular.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
    <link rel='preload' href='/fonts/IvarText-Italic.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
  </>
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): Promise<JSX.Element> {
const topBar = await getTopBar()
  return (
    <html lang='en'>
      <head>
        <PreloadTags />
        <link rel='shortcut icon' href='/favicon-48x48.png' />
      </head>
      <body>
        <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-K4328TRB"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
        <GTM />
        <TopBar content={topBar?.content} />
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40166028.js"></script>
      </body>
    </html>
  )
}
