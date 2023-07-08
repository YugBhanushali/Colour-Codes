import { colourChartArr } from '@/utils/constants'
import React, { useContext } from 'react'
import { ColourContext } from './ColourContext';
import { ColourTypeChecker } from '@/utils/conversion';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const DisplayColour = () => {
    const colours = colourChartArr;
    const { color, setColor } = useContext<any>(ColourContext);


  return (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 1 ,type:'spring', stiffness: 50}}
        >
    <div className='flex justify-between sm:flex-row items-center gap-0 flex-col'>
      {
        colours.map((colour) => {
            return (
                <div className='flex justify-center sm:flex-col items-center flex-row-reverse'>
                    {/* {colour.name} */}
                    {
                        
                        colour.differentShades.map((shade,index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -50, scale: 0.2 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 100, scale: 0.5 }}
                                    transition={{ duration: 1 ,type:'spring', stiffness: 50}}
                                    style={{ listStyle: "none" }}
                                >
                                    <div className='flex flex-col justify-center items-center gap-4 '>
                                        <div className={`sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] hover:scale-125 hover:shadow-3xl hover:shadow-black sm:hover:rounded-xl hover:rounded-md duration-300 ease-in cursor-pointer`} style={{background:`${shade.hexValue}`}}
                                        onClick={() => {
                                            const tempColor = ColourTypeChecker(shade.hexValue);
                                            setColor({
                                                r: tempColor?.red,
                                                g: tempColor?.green,
                                                b: tempColor?.blue,
                                                a: tempColor?.alpha,
                                            });
                                        }}
                                        >
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        }
                        )
                    }
                </div>
            )
            }
        )
      }
    </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default DisplayColour
