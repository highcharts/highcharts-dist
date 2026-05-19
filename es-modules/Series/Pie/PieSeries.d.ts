declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        /**
         * The series center position, read only. This applies only to
         * circular chart types like pie and sunburst. It is an array of
         * `[centerX, centerY, diameter, innerDiameter]`.
         */
        center?: Array<number>;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        brightness?: number;
    }
}
export {};
