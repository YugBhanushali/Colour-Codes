'use client'
import ColourInput from "@/components/ColourInput";
import ColourPicker from "@/components/ColourPicker";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-[25px] mt-[20px]">Colour picker</h1>
      <ColourPicker />
      <Footer />
    </main>
  );
}
