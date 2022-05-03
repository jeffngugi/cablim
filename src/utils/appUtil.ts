import {PixelRatio} from 'react-native'

const fontScale = PixelRatio.getFontScale();


export const appFontSize = (size:number) => size / fontScale;

