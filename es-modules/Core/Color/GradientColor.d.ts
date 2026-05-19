import type Color from './Color';
import type ColorType from './ColorType';
export interface GradientColor {
    linearGradient?: LinearGradientColor;
    radialGradient?: RadialGradientColor;
    stops: Array<GradientColorStop>;
}
export interface GradientColorStop {
    0: number;
    1: ColorType;
    color?: Color;
}
export interface LinearGradientColor {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
export interface RadialGradientColor {
    cx: number;
    cy: number;
    r: number;
}
export default GradientColor;
