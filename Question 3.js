// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that
// if you enter HEX color format it returns RGB and
// if you enter RGB color format it returns HEX.

const detectColorType = (string) => {
    if (string.includes('#')){
        return hexToRgb(string);
    }else
        if (string.includes('rgb')){
            return rgbToHex(string);
    }else {
            alert('Please enter right color format')
    }
};

const rgbToHex = (string)=> {
    const clearRgb = string.replace('rgb(','').replace(')','');
    const hexBegin =clearRgb.split(',') ;
    const first = Number(hexBegin[0]).toString(16).padStart(2, '0');
    const second = Number(hexBegin[1]).toString(16).padStart(2, '0');
    const third = Number(hexBegin[2]).toString(16).padStart(2, '0');
    return `#${first}${second}${third}`;
};

const hexToRgb = (string) => {
    const rgbBegin = string.replace('#','');
    if (rgbBegin.length === 6){
        const r = parseInt((rgbBegin[0] + rgbBegin[1]),16);
        const g = parseInt((rgbBegin[2] + rgbBegin[3]),16);
        const b = parseInt((rgbBegin[4] + rgbBegin[5]),16);
        return `rgb(${r}, ${g}, ${b})`
    }else {
        alert('Please enter valid hex color')
    }
};

