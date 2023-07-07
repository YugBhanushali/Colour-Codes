import {
  rgbaToAll,
  rgbaToHex,
  rgbaToHsl,
  rgbaToHsla,
  rgbaToRgb,
} from "@/utils/conversion";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { BiCopy } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const notify = (title: string) =>
  toast.success(title, {
    position: "top-center",
  });

type colorProps = {
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
};

const AllColours = ({ color }: colorProps) => {
  const allColours: {
    hex: string;
    rgb: string;
    rgba: string;
    hsl: string;
    hsla: string;
    tailwind: string;
  } = rgbaToAll(color.r, color.g, color.b, color.a);


  return (
    <>
      {/* rgba */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-300 hover:ease-in-out ">
        <div>
          {allColours.rgba}
        </div>

        <BiCopy
          className="ml-[20px] cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(
              `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
            );
            notify(
              `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) copied to clipboard`
            );
          }}
        />
      </div>

      {/* rgb */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-500 hover:ease-in-out ">
        <div>{allColours.rgb}</div>

        <div>
          <BiCopy
            className="ml-[20px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                rgbaToRgb(color.r, color.g, color.b, color.a)
              );
              notify(
                `${rgbaToRgb(
                  color.r,
                  color.g,
                  color.b,
                  color.a
                )} copied to clipboard`
              );
            }}
          />
        </div>
      </div>

      {/* Hsl */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-500 hover:ease-in-out ">
        <div>{allColours.hsl}</div>

        <div>
          <BiCopy
            className="ml-[20px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                rgbaToHsl(color.r, color.g, color.b, color.a)
              );
              notify(
                `${rgbaToHsl(
                  color.r,
                  color.g,
                  color.b,
                  color.a
                )} copied to clipboard`
              );
            }}
          />
        </div>
      </div>

      {/* Hsla */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-500 hover:ease-in-out ">
        <div>{allColours.hsla}</div>

        <div>
          <BiCopy
            className="ml-[20px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                rgbaToHsla(color.r, color.g, color.b, color.a)
              );
              notify(
                `${rgbaToHsla(
                  color.r,
                  color.g,
                  color.b,
                  color.a
                )} copied to clipboard`
              );
            }}
          />
        </div>
      </div>

      {/* hex */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-500 hover:ease-in-out ">
        <div>{allColours.hex}</div>

        <div>
          <BiCopy
            className="ml-[20px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                rgbaToHex(color.r, color.g, color.b, color.a)
              );
              notify(
                `${rgbaToHex(
                  color.r,
                  color.g,
                  color.b,
                  color.a
                )} copied to clipboard`
              );
            }}
          />
        </div>
      </div>

      {/* tailwind */}
      <div onMouseEnter={()=>
        toast.success("This Tailwind color is the nearest color in tailwind palette", {
          position: "top-center",
          duration: 5000
        })
        } className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-500 hover:ease-in-out ">
        <div>
          {allColours.tailwind}
        </div>

        <div>
          <BiCopy
            className="ml-[20px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                allColours.tailwind
              );
              notify(`${allColours.tailwind} copied to clipboard`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AllColours;
