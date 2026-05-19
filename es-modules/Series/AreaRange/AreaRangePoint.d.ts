declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /**
         * Range series only. The high or maximum value for each data point.
         */
        high?: number;
        /**
         * Range series only. The low or minimum value for each data point.
         */
        low?: number;
    }
}
export {};
