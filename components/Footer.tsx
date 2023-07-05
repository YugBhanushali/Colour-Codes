import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div  className='flex justify-center items-center mt-[30px]'>
      <p>
        Made with ❤️ by <Link href='https://github.com/YugBhanushali' passHref>Yug Bhanushali</Link>
      </p>
    </div>
  )
}

export default Footer
