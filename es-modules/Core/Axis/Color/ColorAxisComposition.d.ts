import type ColorAxis from './ColorAxis';
import type ColorType from '../../Color/ColorType';
import type Point from '../../Series/Point';
import type Series from '../../Series/Series';
import type SeriesOptions from '../../Series/SeriesOptions';
declare module '../../Series/PointBase' {
    interface PointBase {
        /** @requires ColorSeriesMixin */
        setVisible(vis?: boolean): void;
    }
}
declare module '../../Series/SeriesBase' {
    interface SeriesBase {
        /** @requires ColorSeriesMixin */
        translateColors(): void;
    }
}
export declare namespace ColorAxisComposition {
    interface PointComposition extends Point {
        series: SeriesComposition;
        value?: (number | null);
        setVisible(vis?: boolean): void;
    }
    interface SeriesComposition extends Series {
        colorAxis: ColorAxis;
        data: Array<PointComposition>;
        points: Array<PointComposition>;
        options: SeriesCompositionOptions;
        optionalAxis?: string;
        translateColors(): void;
    }
    interface SeriesCompositionOptions extends SeriesOptions {
        nullColor?: ColorType;
    }
}
export default ColorAxisComposition;
