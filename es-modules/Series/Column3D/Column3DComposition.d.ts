import type ColorString from '../../Core/Color/ColorString';
import type Position3DObject from '../../Core/Renderer/Position3DObject';
import type Series from '../../Core/Series/Series.js';
import type { default as StackItem } from '../../Core/Axis/Stacking/StackItem';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        columnGroup: SVGElement;
    }
}
declare module '../../Core/Series/DataLabelOptions' {
    interface DataLabelOptions {
        outside3dPlot?: (boolean | null);
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        height?: number;
        outside3dPlot?: (boolean | null);
        shapey?: number;
        plot3d?: Position3DObject;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        z: number;
        /** @requires Series/Column3DSeries */
        translate3dShapes(): void;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        depth?: number;
        edgeColor?: ColorString;
        edgeWidth?: number;
        groupZPadding?: number;
        inactiveOtherPoints?: boolean;
    }
}
/** @private */
declare function compose(SeriesClass: typeof Series, StackItemClass: typeof StackItem): void;
declare const Column3DComposition: {
    compose: typeof compose;
};
export default Column3DComposition;
