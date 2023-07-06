import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Navbar = (colorObj:{ color: string , shadowColor: string}) => {
  return (
    <>
        <div className="flex justify-between items-center border-4 border-black p-2 px-4 w-full gap-2">
            <div className='flex justify-center items-center gap-2'>
                <div
                className={`flex h-[25px] w-[25px]`}
                style={{
                    backgroundColor: colorObj.color,
                    boxShadow: `0 0 8px 5px ${colorObj.shadowColor}`,
                    borderRadius: `50%`,
                }}
                />
                <div className='flex justify-center text-center'>
                    <h1 className="font-bold text-[25px]">ColorCodes</h1>
                </div>
            </div>

            <div className="font-bold text-[22px] flex justify-center items-center">
                <div>
                    <Link
                        href="https://github.com/YugBhanushali/Colour-picker/tree/main"
                        target="_blank"
                    >
                        <BsGithub className="cursor-pointer" size={28} />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
