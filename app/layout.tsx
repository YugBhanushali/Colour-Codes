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
        <meta name="keywords" content="color, color converter, color codes, color codes converter, color converter app, color codes app, color codes converter app, color converter online, color codes online, color codes converter online, color converter tool, color codes tool, color codes converter tool, color converter rgb, color codes rgb, color codes converter rgb, color converter hex, color codes hex, color codes converter hex, color converter hsl, color codes hsl, color codes converter hsl, color converter rgba, color codes rgba, color codes converter rgba, color converter hsla, color codes hsla, color codes converter hsla, color converter rgb to hex, color codes rgb to hex, color codes converter rgb to hex, color converter hex to rgb, color codes hex to rgb, color codes converter hex to rgb, color converter rgb to hsl, color codes rgb to hsl, color codes converter rgb to hsl, color converter hsl to rgb, color codes hsl to rgb, color codes converter hsl to rgb"/>
        
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
