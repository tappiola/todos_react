export const COLORS = {
    "Berry Red": "rgb(184, 37, 95)",
    "Red": "rgb(219, 64, 53)",
    "Orange": "rgb(255, 153, 51)",
    "Yellow": "rgb(250, 208, 0)",
    "Olive Green": "rgb(175, 184, 59)",
    "Lime Green": "rgb(126, 204, 73)",
    "Green": "rgb(41, 148, 56)",
    "Mint Green": "rgb(106, 204, 188)",
    "Teal": "rgb(21, 143, 173)",
    "Sky Blue": "rgb(20, 170, 245)",
    "Light Blue": "rgb(150, 195, 235)",
    "Blue": "rgb(64, 115, 255)",
    "Grape": "rgb(136, 77, 255)",
    "Violet": "rgb(175, 56, 235)",
    "Lavender": "rgb(235, 150, 235)",
    "Magenta": "rgb(224, 81, 148)",
    "Salmon": "rgb(255, 141, 133)",
    "Charcoal": "rgb(128, 128, 128)",
    "Grey": "rgb(184, 184, 184)",
    "Taupe": "rgb(204, 172, 147)"
}

export const COLORS_LIST = Object.entries(COLORS).map(e => ({humanColor: e[0], colorCode: e[1]}));

export const DEFAULT_COLOR = COLORS_LIST.find(c => c.colorCode === COLORS.Grey);
