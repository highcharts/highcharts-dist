import type ColorType from '../Core/Color/ColorType';
import type { DeepPartial } from '../Shared/Types';
import type Options from '../Core/Options';
declare module '../Core/Series/DataLabelOptions' {
    interface DataLabelOptions {
        connectorColor?: ColorType;
    }
}
export type HighContrastThemeOptions = DeepPartial<Options>;
declare const theme: HighContrastThemeOptions;
export default theme;
