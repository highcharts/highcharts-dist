import type Time from '../Time';
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * If no x values are given for the points in a series, `pointInterval`
         * defines the interval of the x values. For example, if a series
         * contains one value every decade starting from year 0, set
         * `pointInterval` to `10`. In true `datetime` axes, the `pointInterval`
         * is set in milliseconds.
         *
         * It can be also be combined with `pointIntervalUnit` to draw irregular
         * time intervals.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point, and the `pointInterval` is added x times to the `pointStart`
         * setting.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         *
         * @sample {highcharts} highcharts/plotoptions/series-pointstart-datetime/
         *         Datetime X axis
         * @sample {highcharts} highcharts/plotoptions/series-relativexvalue/
         *         Relative x value
         * @sample {highstock} stock/plotoptions/pointinterval-pointstart/
         *         Using pointStart and pointInterval
         * @sample {highstock} stock/plotoptions/relativexvalue/
         *         Relative x value
         *
         * @default 1
         * @product highcharts highstock gantt
         */
        pointInterval?: number;
        /**
         * On datetime series, this allows for setting the
         * [pointInterval](#plotOptions.series.pointInterval) to irregular time
         * units, `day`, `month` and `year`. A day is usually the same as 24
         * hours, but `pointIntervalUnit` also takes the DST crossover into
         * consideration when dealing with local time. Combine this option with
         * `pointInterval` to draw weeks, quarters, 6 months, 10 years etc.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         *
         * @sample {highcharts} highcharts/plotoptions/series-pointintervalunit/
         *         One point a month
         * @sample {highstock} highcharts/plotoptions/series-pointintervalunit/
         *         One point a month
         *
         * @since   4.1.0
         * @product highcharts highstock gantt
         */
        pointIntervalUnit?: DateTimeAxis.PointIntervalUnitValue;
    }
}
declare module './TimeTicksInfoObject' {
    interface TimeTicksInfoObject extends Time.TimeNormalizedObject {
    }
}
declare namespace DateTimeAxis {
    type PointIntervalUnitValue = ('day' | 'month' | 'year');
}
export default DateTimeAxis;
