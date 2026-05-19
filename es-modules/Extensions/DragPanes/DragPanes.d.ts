import type AxisResizeOptions from './AxisResizeOptions';
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        /**
         * Maximal size of a resizable axis. Could be set as a percent
         * of plot area or pixel size.
         *
         * @sample {highstock} stock/yaxis/resize-min-max-length
         *         minLength and maxLength
         *
         * @type      {number|string}
         * @product   highstock
         * @requires  modules/drag-panes
         * @apioption yAxis.maxLength
         */
        maxLength?: (number | string);
        /**
         * Minimal size of a resizable axis. Could be set as a percent
         * of plot area or pixel size.
         *
         * @sample {highstock} stock/yaxis/resize-min-max-length
         *         minLength and maxLength
         *
         * @type      {number|string}
         * @product   highstock
         * @requires  modules/drag-panes
         * @apioption yAxis.minLength
         */
        minLength?: (number | string);
        /**
         * Options for axis resizing. It adds a thick line between panes which
         * the user can drag in order to resize the panes.
         *
         * @sample {highstock} stock/demo/candlestick-and-volume
         *         Axis resizing enabled
         *
         * @product      highstock
         * @requires     modules/drag-panes
         */
        resize?: AxisResizeOptions;
    }
}
