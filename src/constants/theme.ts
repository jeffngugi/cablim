import { Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');


export const COLORS = {
    primary: "#684DEC",    
    secondary: "#FFBF75",   
    lightMaroon: "#bd1087",   
    darkMaroon: "#84298e",   
    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    darkgray:"#393E48",
    gray: "#6A6A6A",
    frenchGray:"#C3C3C4",
    lightGray: "#E3E3E7",
    lightGray1: "#f5f6fa",
    transparent:'transparent',
    background:'#f3f2f7',
    whitish:'#EEEEEE',
    opaq:'#00000030'
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h0:39,
    h1: 30,
    h11:26,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body21: 18,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    body6:10,

    // app dimensions
    width,
    height
};

export const FONTS = {
    h0: {  fontSize: SIZES.h0, lineHeight: 44 },
    h1: {  fontSize: SIZES.h1, lineHeight: 36 },
    h11: {  fontSize: SIZES.h11, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h22: {  fontSize: 17, lineHeight: 24 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body21: { fontSize: SIZES.body21, lineHeight: 33 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: {  fontSize: SIZES.body3, lineHeight: 22 },
    body4: {  fontSize: SIZES.body4, lineHeight: 22 },
    body5: {  fontSize: SIZES.body5, lineHeight: 22 },
    body6: {  fontSize: SIZES.body6, lineHeight: 18 },
};