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
      <div className="font-bold text-[22px] flex justify-center items-center">
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
      <div className="font-bold text-[22px] flex justify-center items-center">
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
      <div className="font-bold text-[22px] flex justify-center items-center">
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
      <div className="font-bold text-[22px] flex justify-center items-center">
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
      <div className="font-bold text-[22px] flex justify-center items-center">
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

      {/* Github */}
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
    </>
  );
};

export default AllColours;
