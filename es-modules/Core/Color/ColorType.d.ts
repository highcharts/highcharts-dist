import type ColorString from './ColorString';
import type GradientColor from './GradientColor';
export interface ColorBase {
}
export type ColorType = ColorTypeRegistry[keyof ColorTypeRegistry];
export interface ColorTypeRegistry {
    ColorString: ColorString;
    GradientColor: GradientColor;
}
export default ColorType;
