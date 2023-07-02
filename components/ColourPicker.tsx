'use client'
import { ColourTypeChecker, rgbaToHex, rgbaToHsl, rgbaToHsla, rgbaToRgb } from '@/utils/conversion';
import React, { use, useEffect, useState } from 'react'
import { HexColorPicker, RgbaColorPicker, RgbaStringColorPicker } from 'react-colorful';
import { Toaster, toast } from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';
import ColourInput from './ColourInput';
import { ColourContext } from './ColourContext';

const notify = (title:string) => toast.success(title,{
    position:'top-center',
});

const ColourPicker = () => {
    
    const [inputColour, setInputColour] = useState(`` as string);
    const [color, setColor] = useState<{
        r: number;
        g: number;
        b: number;
        a: number;
    }>(
        {
            r: 44,
            g: 175,
            b: 198,
            a: 1,
        }
    );

    return (
        <ColourContext.Provider value={{inputColour,setInputColour,color,setColor}}>
            <div className='flex justify-center flex-col items-center gap-6 mt-[80px]'>

                <ColourInput />    
                {/* preview of colour */}
                <div className='flex h-[70px] w-[200px] rounded-lg'
                    style={{
                        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                        boxShadow: `0 2px 10px 5px #0000001f`
                    }}
                />
                

                <div>
                    <RgbaColorPicker
                        color={color}
                        onChange={(newColor) => {
                            setColor(newColor);
                            setInputColour(``)
                        }}
                    />
                </div>

                {/* rgba */}
                <div className='font-bold text-[22px] flex justify-center items-center'>
                    <div>
                        rgba({color.r}, {color.g}, {color.b}, {color.a})
                    </div>

                    <BiCopy 
                        className='ml-[20px] cursor-pointer'
                        onClick={() => {
                            navigator.clipboard.writeText(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
                            notify(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) copied to clipboard`) 
                        }}
                    />
                </div>

                {/* rgb */}
                <div className='font-bold text-[22px] flex justify-center items-center'>
                    <div>
                        {rgbaToRgb(color.r, color.g, color.b, color.a)}
                    </div>

                    <div>
                        <BiCopy
                            className='ml-[20px] cursor-pointer'
                            onClick={() => {
                                navigator.clipboard.writeText(rgbaToRgb(color.r, color.g, color.b, color.a))
                                notify(`${rgbaToRgb(color.r, color.g, color.b, color.a)} copied to clipboard`) 
                            }}
                        />
                    </div>
                </div>
                
                {/* Hsl */}
                <div className='font-bold text-[22px] flex justify-center items-center'>
                    <div>
                        {rgbaToHsl(color.r, color.g, color.b, color.a)}
                    </div>

                    <div>
                        <BiCopy
                            className='ml-[20px] cursor-pointer'
                            onClick={() => {
                                navigator.clipboard.writeText(rgbaToHsl(color.r, color.g, color.b, color.a))
                                notify(`${rgbaToHsl(color.r, color.g, color.b, color.a)} copied to clipboard`) 
                            }}
                        />
                    </div>
                </div>

                {/* Hsla */}
                <div className='font-bold text-[22px] flex justify-center items-center'>
                    <div>
                        {rgbaToHsla(color.r, color.g, color.b, color.a)}
                    </div>

                    <div>
                        <BiCopy
                            className='ml-[20px] cursor-pointer'
                            onClick={() => {
                                navigator.clipboard.writeText(rgbaToHsla(color.r, color.g, color.b, color.a))
                                notify(`${rgbaToHsla(color.r, color.g, color.b, color.a)} copied to clipboard`)
                            }}
                        />
                    </div>
                </div>

                {/* hex */}
                <div className='font-bold text-[22px] flex justify-center items-center'>
                    <div>
                        {rgbaToHex(color.r, color.g, color.b, color.a)}
                    </div>

                    <div>
                        <BiCopy
                            className='ml-[20px] cursor-pointer'
                            onClick={() => {
                                navigator.clipboard.writeText(rgbaToHex(color.r, color.g, color.b, color.a))
                                notify(`${rgbaToHex(color.r, color.g, color.b, color.a)} copied to clipboard`)
                            }}
                        />
                    </div>
                </div>

                <Toaster />
            </div>
        </ColourContext.Provider>
    )
}

export default ColourPicker
