"use client";
import { ColourTypeChecker } from "@/utils/conversion";
import React, { use, useContext, useEffect, useState } from "react";
import { ColourContext } from "./ColourContext";

const ColourInput = () => {
  const { inputColour, setInputColour, color, setColor , isValid , setIsValid } =
    useContext<any>(ColourContext);

  useEffect(() => {
    const test = ColourTypeChecker(inputColour);
    if (test?.type !== "invalid") {
      setColor({
        r: test?.red,
        g: test?.green,
        b: test?.blue,
        a: test?.alpha,
      });
        setIsValid(true);
    }
    else{
        if(inputColour === ``){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }
  }, [inputColour]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <h1 className="font-bold sm:text-[20px] text-[17px]">
            Type the colour in any format(rgba, rgb, hex, hsl, hsla)
        </h1>
      </div>
      <input
        type="text"
        className="h-[30px] sm:w-[300px] w-[250px] px-2 py-4 border-black border-[3px] rounded-lg text-center  focus:outline-8 focus:outline-[#007dfa99] focus:outline-offset-2"
        style={{
          boxShadow: `0 2px 10px 5px #0000001f`,
        }}
        value={inputColour}
        onChange={(e) => {
          setInputColour(e.target.value);
        }}
        placeholder="rgba(98, 85, 31, 1)"
        spellCheck={false}
      />
    </div>
  );
};

export default ColourInput;
