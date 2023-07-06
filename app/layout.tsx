import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
    weight:["400","700"],
   subsets: ['latin'] 
})

export const metadata = {
  title: 'ColourCodes',
  description: `ColorCodes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`,
  metadata:[
    { name: 'viewport', content: 'width=device-width, initial-scale=1'},
    { name: 'description', content: `ColorCodes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    { name: 'keywords', content: 'ColorCodes, Color Codes, Color Converter, Color Picker, Color Picker App, Color Converter App, Color Picker Website, Color Converter Website, Color Picker Online, Color Converter Online, Color Picker Tool, Color Converter Tool, Color Picker RGB, Color Converter RGB, Color Picker RGBA, Color Converter RGBA, Color Picker HEX, Color Converter HEX, Color Picker HSL, Color Converter HSL, Color Picker HSLA, Color Converter HSLA, Color Picker CMYK, Color Converter CMYK, Color Picker HSV, Color Converter HSV, Color Picker HSB, Color Converter HSB, Color Picker HSI, Color Converter HSI, Color Picker HWB, Color Converter HWB, Color Picker NCol, Color Converter NCol, Color Picker NCol1, Color Converter NCol1, Color Picker NCol2, Color Converter NCol2, Color Picker NCol3, Color Converter NCol3, Color Picker NCol4, Color Converter NCol4, Color Picker NCol5, Color Converter NCol5, Color Picker NCol6, Color Converter NCol6, Color Picker NCol7, Color Converter NCol7, Color Picker NCol8, Color Converter NCol8, Color Picker NCol9, Color Converter NCol9, Color Picker NCol10, Color Converter NCol10, Color Picker NCol11, Color Converter NCol11, Color Picker NCol12, Color Converter NCol12, Color Picker NCol13, Color Converter NCol13, Color Picker NCol14, Color Converter NCol14, Color Picker NCol15, Color Converter NCol15, Color Picker NCol16, Color Converter NCol16, Color Picker NCol17, Color Converter NCol17, Color Picker NCol18, Color Converter NCol18, Color Picker NCol19, Color Converter NCol19, Color Picker NCol20, Color Converter NCol20, Color Picker NCol21, Color Converter NCol21, Color Picker NCol22, Color Converter NCol22, Color Picker NCol23, Color Converter NCol23, Color Picker NCol24, Color Converter NCol24, Color Picker NCol25, Color Converter NCol25, Color Picker NCol26, Color Converter NCol26, Color Picker NCol27, Color Converter NCol27, Color Picker NCol28, Color Converter NCol28, Color Picker  NCol29, Color Converter NCol29, Color Picker NCol30, Color Converter NCol30, Color Picker NCol31, Color Converter NCol31, Color Picker NCol32, Color Converter NCol32, Color Picker NCol33, Color Converter NCol33, Color Picker NCol34, Color Converter NCol34, Color Picker NCol35, Color Converter NCol35, Color Picker NCol36, Color Converter NCol36, Color Picker NCol37, Color Converter NCol37, Color Picker NCol38, Color Converter NCol38, Color Picker NCol39, Color Converter NCol39, Color Picker NCol40, Color Converter NCol40, Color Picker NCol41, Color Converter NCol41, Color Picker NCol42, Color Converter NCol42, Color Picker NCol43, Color Converter NCol43, Color Picker NCol44, Color Converter NCol44, Color Picker NCol45, Color Converter NCol45, Color Picker NCol46, Color Converter NCol46, Color Picker NCol47, Color Converter NCol47, Color Picker NCol48, Color Converter NCol48, Color Picker NCol49, Color Converter NCol49, Color Picker NCol50, Color Converter NCol50, Color Picker NCol51, Color Converter NCol51, Color Picker NCol52, Color Converter NCol52, Color Picker NCol53, Color Converter NCol53, Color Picker NCol54, Color Converter NCol54, Color Picker NCol55, Color Converter NCol55, Color Picker NCol56, Color Converter NCol56, Color Picker NCol57, Color Converter NCol57, Color Picker NCol58, Color Converter NCol58, Color Picker NCol59, Color Converter NCol59, Color Picker NCol60, Color Converter NCol60, Color Picker NCol61, Color Converter NCol61, Color Picker NCol62, Color Converter NCol62, Color Picker NCol63, Color Converter NCol63, Color Picker NCol64, Color Converter NCol64, Color Picker NCol65, Color Converter NCol65, Color Picker NCol66, Color Converter NCol66, Color Picker NCol67, Color Converter NCol67, Color Picker NCol68, Color Converter NCol68, Color Picker NCol69, Color Converter NCol69, Color Picker NCol70, Color Converter'},

    { property: 'og:type', content: 'website'},
    { property: 'og:url', content: 'https://colorcodes.vercel.app/'},
    { property: 'og:title', content: 'ColorCodes'},
    { property: 'og:description', content: `ColorCodes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    { property: 'og:image', content: 'https://colorcodes.vercel.app/og.png'},
    { property: 'og:image:width', content: '1200'},
    { property: 'og:image:height', content: '630'},
    { property: 'og:image:alt', content: 'ColorCodes'},
    { property: 'og:site_name', content: 'ColorCodes'},


    { property: 'twitter:card', content: 'summary_large_image'},
    { property: 'twitter:url', content: 'https://colorcodes.vercel.app/'},
    { property: 'twitter:title', content: 'ColorCodes'},
    { property: 'twitter:description', content: `ColorCodes is a comprehensive color converter app that simplifies the process of converting colors between various formats. Whether you're working with RGB, RGBA, HEX, HSL, or HSLA color codes, ColorCodes provides a seamless and intuitive solution to convert any color to all color formats.`},
    { property: 'twitter:image', content: 'https://colorcodes.vercel.app/og.png'},
    { property: 'twitter:image:alt', content: 'ColorCodes'},
    { property: 'twitter:site', content: '@YugBhanushali'},
    { property: 'twitter:creator', content: '@YugBhanushali'},
    { property: 'twitter:domain', content: 'https://colorcodes.vercel.app/'},
    
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
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
