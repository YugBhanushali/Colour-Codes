"use client";
import ColourInput from "@/components/ColourInput";
import ColourPicker from "@/components/ColourPicker";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { randomColourGenerator, stringToRGBA } from "@/utils/conversion";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [colorObj, setColorObj] = useState<{
    color: string;
    shadowColor: string;
  }>({
    color: randomColourGenerator().color,
    shadowColor: "",
  });

  useEffect(() => {
    const { color, shadowColor } = randomColourGenerator();
    setColorObj({
      color: color,
      shadowColor: shadowColor,
    });
  }, []);

   return (
    <main className="flex flex-col gap-4 justify-center items-center">
      <>
        <Navbar
          color={colorObj.color}
          shadowColor={colorObj.shadowColor}
        />
        <ColourPicker
          r={stringToRGBA(colorObj.color).red}
          g={stringToRGBA(colorObj.color).green}
          b={stringToRGBA(colorObj.color).blue}
          a={stringToRGBA(colorObj.color).alpha}
        />
        <Footer />
      </>
    </main>
  );
}
