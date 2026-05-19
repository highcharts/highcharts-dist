import type Accessibility from './Accessibility';
import type ColorType from '../Core/Color/ColorType';
interface HighContrastState {
    active?: boolean;
    applying?: boolean;
}
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        highContrastState?: HighContrastState;
    }
}
declare module '../Core/Series/PointBase' {
    interface PointBase {
        borderColor?: ColorType;
    }
}
/**
 * Detect WHCM in the browser.
 *
 * @function Highcharts#isHighContrastModeActive
 * @private
 * @return {boolean} Returns true if the browser is in High Contrast mode.
 */
declare function isHighContrastModeActive(): boolean;
/**
 * Force high contrast theme for the chart. The default theme is defined in
 * a separate file.
 *
 * @function Highcharts#setHighContrastTheme
 * @private
 * @param {Highcharts.AccessibilityChart} chart The chart to set the theme of.
 * @return {void}
 */
declare function setHighContrastTheme(chart: Accessibility.ChartComposition): void;
declare const whcm: {
    isHighContrastModeActive: typeof isHighContrastModeActive;
    setHighContrastTheme: typeof setHighContrastTheme;
};
export default whcm;
