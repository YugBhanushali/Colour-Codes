import {
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
  return (
    <>
      {/* rgba */}
      <div className="font-bold sm:text-[22px] text-[18px] flex justify-center items-center hover:border-black border-4 border-transparent px-4 hover:duration-300 hover:ease-in-out ">
        <div>
          rgba({color.r}, {color.g}, {color.b}, {color.a})
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
        <div>{rgbaToRgb(color.r, color.g, color.b, color.a)}</div>

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
        <div>{rgbaToHsl(color.r, color.g, color.b, color.a)}</div>

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
        <div>{rgbaToHsla(color.r, color.g, color.b, color.a)}</div>

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
        <div>{rgbaToHex(color.r, color.g, color.b, color.a)}</div>

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

    </>
  );
};

export default AllColours;
