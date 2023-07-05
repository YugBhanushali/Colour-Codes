'use client'
import { ColourTypeChecker, rgbaToHex, rgbaToHsl, rgbaToHsla, rgbaToRgb } from '@/utils/conversion';
import React, { use, useEffect, useState } from 'react'
import { HexColorPicker, RgbaColorPicker, RgbaStringColorPicker } from 'react-colorful';
import { Toaster, toast } from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';
import ColourInput from './ColourInput';
import { ColourContext } from './ColourContext';
import AllColours from './AllColours';

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
    const [isValid, setIsValid] = useState<boolean>(true);

    return (
        <ColourContext.Provider value={{inputColour,setInputColour,color,setColor,isValid,setIsValid}}>
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
                            setInputColour(``);
                            setIsValid(true);
                        }}
                    />
                </div>

                {isValid ? (
                    <AllColours color={color} />
                    
                ) : (
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h1 className='font-bold text-[20px]'>
                            Invalid colour
                        </h1>
                    </div>
                )}

                <Toaster />
            </div>
        </ColourContext.Provider>
    )
}

export default ColourPicker
