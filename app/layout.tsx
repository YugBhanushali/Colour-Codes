import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { WEBSITE_URL } from '@/utils/constants'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
    weight:["400","700"],
   subsets: ['latin'] 
})



export const metadata = {
  title: 'Colour Codes',
  description: `Colour Codes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content={metadata.description}/>
        
        <meta property="og:site_name" content="Colour Codes" />
        <meta property="og:title" content="Colour Codes" />
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:url" content={WEBSITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${WEBSITE_URL}icon.png`} />
        <meta property="og:image:alt" content="Colour Codes" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Colour Codes" />
        <meta name="twitter:description" content={metadata.description}/>
        <meta name="twitter:image" content={`${WEBSITE_URL}icon.png`} />
        <meta name="twitter:image:alt" content="Colour Codes" />
        
        <link rel="icon" href="/icon.png" type='image/png' />
      </head>
      <body className={robotoMono.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
