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
  metadata:[
    { name: 'viewport', content: 'width=device-width, initial-scale=1'},
    { name: 'description', content: `Colour Codes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    {name:'keywords' , content: "colour codes, color codes, color converter, colour converter, color picker, colour picker, color, colour, rgb, rgba, hex, hsl, hsla, rgb to hex, rgba to hex, rgb to hsl, rgba to hsl, rgb to hsla, rgba to hsla, hex to rgb, hex to rgba, hex to hsl, hex to hsla, hsl to rgb, hsl to rgba, hsl to hex, hsl to hsla, hsla to rgb, hsla to rgba, hsla to hex, hsla to hsl, color to hex, color to rgb, color to rgba, color to hsl, color to hsla, colour to hex, colour to rgb, colour to rgba, colour to hsl, colour to hsla"},

    { property: 'og:site_name', content: 'Colour Codes' },
    { property: 'og:title', content: 'Colour Codes' },
    { property: 'og:description', content: `Colour Codes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    { property: 'og:url', content: WEBSITE_URL },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${WEBSITE_URL}/icon.png` },
    { property: 'og:image:alt', content: 'Colour Codes' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Colour Codes' },
    { name: 'twitter:description', content: `Colour Codes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    { name: 'twitter:image', content: `${WEBSITE_URL}/icon.png` },
    { name: 'twitter:image:alt', content: 'Colour Codes' },

  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type='image/png' />
      </head>
      <body className={robotoMono.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
