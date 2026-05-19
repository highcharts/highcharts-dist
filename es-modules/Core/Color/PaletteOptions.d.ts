import type ColorString from './ColorString';
export interface PaletteSchemeColors {
    backgroundColor?: ColorString;
    colors?: Array<ColorString | null | undefined>;
    neutralColor?: ColorString;
    highlightColor?: ColorString;
    positiveColor?: ColorString;
    negativeColor?: ColorString;
}
export interface PaletteOptions {
    colors?: Array<ColorString>;
    colorScheme?: 'light dark' | 'light' | 'dark' | 'inherit';
    dark?: PaletteSchemeColors;
    injectCSS?: boolean;
    light?: PaletteSchemeColors;
}
export default PaletteOptions;
