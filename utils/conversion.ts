// make a function which convert rgba to hex
import { type } from "os";

export const rgbaToHex = (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => {


    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255 || alpha < 0 || alpha > 1) {
        return "Invalid color component";
    }
    else{
        let hex = (r:number, g:number, b:number) => {
            return "#" + [r, g, b].map(x => {
                const hex = x.toString(16)
                return hex.length === 1 ? "0" + hex : hex
            }).join("")
        }
    
        if(alpha > 0 && alpha < 1) {
            return hex(Number(red), Number(green), Number(blue)) + Math.round(alpha * 255).toString(16)
        }
        else{
            return hex(Number(red), Number(green), Number(blue))
        }
    }

};

//convert rgba to rgb

export const rgbaToRgb = (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

//convert rgba to hsla

export const rgbaToHsla = (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => {
  let r = red / 255;
  let g = green / 255;
  let b = blue / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
};

//convert rgba to hsl

export const rgbaToHsl = (
  red: number,
  green: number,
  blue: number,
  alpha: number
) => {
  let r = red / 255;
  let g = green / 255;
  let b = blue / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
};

//colour type checker

export const ColourTypeChecker = (colour: string) => {
  if (colour.slice(0, 4).includes("rgba")) {
    const rgba = colour.replace(/[^\d,]/g, "").split(",");
    const rgbaRegex =
      /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/;
    const matches = colour.match(rgbaRegex);
    if (!matches)
      return {
        type: "invalid",
      };
    // const red = parseInt(rgba[0])
    // const green = parseInt(rgba[1])
    // const blue = parseInt(rgba[2])
    // const alpha = parseFloat(rgba[3])
    const [, red, green, blue, alpha]: any = matches;
    if (
      alpha >= 0 &&
      alpha <= 1 &&
      red >= 0 &&
      red <= 255 &&
      green >= 0 &&
      green <= 255 &&
      blue >= 0 &&
      blue <= 255
    ) {
      return {
        type: "rgba",
        red: red,
        green: green,
        blue: blue,
        alpha: alpha,
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else if (colour.slice(0, 3).includes("rgb")) {
    const rgb = colour.replace(/[^\d,]/g, "").split(",");
    const red = parseInt(rgb[0]);
    const green = parseInt(rgb[1]);
    const blue = parseInt(rgb[2]);

    if (
      red >= 0 &&
      red <= 255 &&
      green >= 0 &&
      green <= 255 &&
      blue >= 0 &&
      blue <= 255
    ) {
      return {
        type: "rgb",
        red: red,
        green: green,
        blue: blue,
        alpha: 1,
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else if (colour.slice(0, 4).includes("hsla")) {
    const values: any = colour.match(/\d+(\.\d+)?/g);
    const hue = parseInt(values[0]);
    const saturation = parseInt(values[1]);
    const lightness = parseInt(values[2]);
    const alpha = parseFloat(values[3]);
    // Convert HSLA to RGBA
    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;

    let red, green, blue;

    if (s === 0) {
      red = green = blue = l;
    } else {
      const hueToRgb = (p: any, q: any, t: any) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      red = Math.round(hueToRgb(p, q, h + 1 / 3) * 255);
      green = Math.round(hueToRgb(p, q, h) * 255);
      blue = Math.round(hueToRgb(p, q, h - 1 / 3) * 255);
    }

    if (
      alpha >= 0 &&
      alpha <= 1 &&
      red >= 0 &&
      red <= 255 &&
      green >= 0 &&
      green <= 255 &&
      blue >= 0 &&
      blue <= 255
    ) {
      return {
        type: "hsla",
        red: red,
        green: green,
        blue: blue,
        alpha: alpha,
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else if (colour.slice(0, 3).includes("hsl")) {
    const values: any = colour.match(/\d+(\.\d+)?/g);
    const hue = parseInt(values[0]);
    const saturation = parseInt(values[1]);
    const lightness = parseInt(values[2]);
    // Convert HSLA to RGBA
    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;

    let red, green, blue;

    if (s === 0) {
      red = green = blue = l;
    } else {
      const hueToRgb = (p: any, q: any, t: any) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      red = Math.round(hueToRgb(p, q, h + 1 / 3) * 255);
      green = Math.round(hueToRgb(p, q, h) * 255);
      blue = Math.round(hueToRgb(p, q, h - 1 / 3) * 255);
    }

    if (
      red >= 0 &&
      red <= 360 &&
      green >= 0 &&
      green <= 100 &&
      blue >= 0 &&
      blue <= 100
    ) {
      return {
        type: "hsl",
        red: red,
        green: green,
        blue: blue,
        alpha: 1,
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else if (colour.slice(0, 1).includes("#")) {
    //valid hex number lenght  is 3,4,6,8
    var hex = colour.replace("#", "");

    var hexLength = hex.length;

    // Check if the hex code is of length 3 or 4
    if (hexLength === 3 || hexLength === 4) {
      // Expand the short hex code to 6 or 8 digits
      var expandedHex = "";
      for (var i = 0; i < hexLength; i++) {
        expandedHex += hex.charAt(i) + hex.charAt(i);
      }
      hex = expandedHex;
      hexLength = hex.length;
    }

    if (hexLength === 6 || hexLength === 8) {
      // Split the hex code into red, green, blue, and alpha components
      var red = parseInt(hex.substring(0, 2), 16);
      var green = parseInt(hex.substring(2, 4), 16);
      var blue = parseInt(hex.substring(4, 6), 16);

      // Check if the hex code is of length 8 and extract the alpha component
      var alpha = hexLength === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;

      if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue) || Number.isNaN(alpha)) {
        return {
          type: "invalid",
        };
      }

      // Return the RGBA values as an object
      return {
        type: "hex",
        red: red,
        green: green,
        blue: blue,
        alpha: alpha.toFixed(2),
      };
    } else {
      return {
        type: "invalid",
      };
    }
  } else {
    return {
      type: "invalid",
    };
  }
};
