
// make a function which convert rgba to hex

import { type } from "os"

export const rgbaToHex = (red: number, green: number, blue: number, alpha: number) => {
    let hex = (r:number, g:number, b:number) => {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? "0" + hex : hex
        }).join("")
    }

    if(alpha > 0 && alpha < 1) {
        return hex(red, green, blue) + Math.round(alpha * 255).toString(16)
    }
    else{
        return hex(red, green, blue)
    }
}

//convert rgba to rgb

export const rgbaToRgb = (red: number, green: number, blue: number, alpha: number) => {
    return `rgb(${red}, ${green}, ${blue})`
}

//convert rgba to hsla

export const rgbaToHsla = (red: number, green: number, blue: number, alpha: number) => {
    let r = red / 255
    let g = green / 255
    let b = blue / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)

    let h = 0
    let s = 0
    let l = (max + min) / 2

    if(max === min) {
        h = s = 0
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch(max) {
            case r: 
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
        }

        h /= 6
    }

    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)

    return `hsla(${h}, ${s}%, ${l}%, ${alpha})`
}

//convert rgba to hsl

export const rgbaToHsl = (red: number, green: number, blue: number, alpha: number) => {
    let r = red / 255
    let g = green / 255
    let b = blue / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)

    let h = 0
    let s = 0
    let l = (max + min) / 2

    if(max === min) {
        h = s = 0
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch(max) {
            case r: 
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
        }

        h /= 6
    }

    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)

    return `hsl(${h}, ${s}%, ${l}%)`
}

//colour type checker

export const ColourTypeChecker = (colour: string) => {
    if(colour.slice(0, 4).includes("rgba")) {
        const rgba = colour.replace(/[^\d,]/g, '').split(',');
        const rgbaRegex = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/;
        const matches = colour.match(rgbaRegex);
        if(!matches) return {
            type: "invalid",
        };
        // const red = parseInt(rgba[0])
        // const green = parseInt(rgba[1])
        // const blue = parseInt(rgba[2])
        // const alpha = parseFloat(rgba[3])
        const [, red, green, blue, alpha] : any = matches;
        if(alpha >= 0 && alpha <= 1 && red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
            return {
                type: "rgba",
                red: red,
                green: green,
                blue: blue,
                alpha: alpha
            }
        }
        else{
            return{
                type: "invalid",
            }
        }
    } else if(colour.slice(0, 3).includes("rgb")) {
        const rgb = colour.replace(/[^\d,]/g, '').split(',');
        const red = parseInt(rgb[0])
        const green = parseInt(rgb[1])
        const blue = parseInt(rgb[2])

        if(red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
            return {
                type: "rgb",
                red: red,
                green: green,
                blue: blue,
                alpha: 1
            }
        }
        else{
            return{
                type: "invalid",
            }
        }
    }
    else if(colour.slice(0, 4).includes("hsla")) {
        const values: any = colour.match(/\d+(\.\d+)?/g);
        const hue = parseInt(values[0]);
        const saturation = parseInt(values[1]);
        const lightness = parseInt(values[2]);
        const alpha = parseFloat(values[3]);
        console.log(hue, saturation, lightness, alpha)
        // Convert HSLA to RGBA
        const h = hue / 360;
        const s = saturation / 100;
        const l = lightness / 100;

        let red, green, blue;

        if (s === 0) {
            red = green = blue = l;
        } else {
            const hueToRgb = (p:any, q:any, t:any) => {
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

        if(alpha >= 0 && alpha <= 1 && red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
            return {
                type: "hsla",
                red: red,
                green: green,
                blue: blue,
                alpha: alpha
            }
        }
        else{
            return{
                type: "invalid",
            }
        }
    }
    else if(colour.slice(0, 3).includes("hsl")) {
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
            const hueToRgb = (p:any, q:any, t:any) => {
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

        if(red >= 0 && red <= 360 && green >= 0 && green <= 100 && blue >= 0 && blue <= 100) {
            return {
                type: "hsl",
                red: red,
                green: green,
                blue: blue,
                alpha: 1
            }
        }
        else{
            return{
                type: "invalid",
            }
        }
    }
    else if(colour.slice(0, 1).includes("#")) {
        const temp = colour.replace('#', '');
        const red = parseInt(temp.slice(0, 2), 16);
        const green = parseInt(temp.slice(2, 4), 16);
        const blue = parseInt(temp.slice(4, 6), 16);
        var alpha = parseInt(temp.substring(6, 8), 16) / 255;
        if(true) {
            return {
                type: "hex",
                red: red ,
                green: green ,
                blue: blue ,
                alpha: alpha.toFixed(2) || 1
            }
        }
        // const hexRegex = /^#?([0-9A-F]{3}|[0-9A-F]{6})([0-9A-F]{2})?$/i;
        // const rgbRegex = /^rgba?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})(?:,\s?(\d(?:\.\d)?))?\)$/i;
        // if (hexRegex.test(temp)) {
        //     let hex = temp.slice(1);
        //     if (hex.length === 3) {
        //         hex = hex.split('').map(function (hex) {
        //             return hex + hex;
        //         }).join('');
        //     }
        //     const rgb = parseInt(hex, 16);
        //     const red = (rgb >> 16) & 0xFF;
        //     const green = (rgb >> 8) & 0xFF;
        //     const blue = rgb & 0xFF;
        //     const alpha = parseInt(temp.slice(-2), 16) / 255;
        //     return {
        //         type: "hex",
        //         red: red,
        //         green: green,
        //         blue: blue,
        //         alpha: alpha.toFixed(2)
        //     }
        // }
        else{
            return {
                type: "invalid",
            }
        }
    }
    else {
        return {
            type: "invalid",
        }
    }
}


