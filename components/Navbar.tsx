import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Navbar = (colorObj:{ color: string , shadowColor: string}) => {
  return (
    <>
        <div className="flex justify-between items-center border-4 border-black p-2 px-4 w-full">
            <div className='flex justify-center items-center gap-2'>
                <div
                className={`flex sm:h-[25px] sm:w-[25px] h-[21px] w-[21px]`}
                style={{
                    backgroundColor: colorObj.color,
                    boxShadow: `0 0 8px 5px ${colorObj.shadowColor}`,
                    borderRadius: `50%`,
                }}
                />
                <div className='flex justify-center text-center'>
                    <h1 className="font-bold sm:text-[25px] text-[20px]">Colour Codes</h1>
                </div>
            </div>

            <div className="font-bold flex justify-center items-center">
                <div>
                    <Link
                        href="https://github.com/YugBhanushali/Colour-Codes"
                        target="_blank"
                    >
                        <BsGithub className="cursor-pointer sm:h-[30px] sm:w-[30px] w-[25px] h-[25px]" />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
