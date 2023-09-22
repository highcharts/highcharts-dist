/**
 *
 *  (c) 2010-2021 Paweł Fus
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type Chart from './Chart';
import type NavigationOptions from '../../Extensions/Exporting/NavigationOptions';
declare module './ChartLike' {
    interface ChartLike {
        navigation?: ChartNavigationComposition.Additions;
    }
}
declare namespace ChartNavigationComposition {
    interface Composition extends Chart {
        navigation: Additions;
    }
    interface UpdateFunction {
        (this: Composition, options: NavigationOptions, redraw?: boolean): void;
    }
    interface UpdateObject {
        context: Composition;
        update: UpdateFunction;
    }
    /**
     * @private
     */
    function compose<T extends Chart>(chart: T): (T & Composition);
    /**
     * Initializes `chart.navigation` object which delegates `update()` methods
     * to all other common classes (used in exporting and navigationBindings).
     * @private
     */
    class Additions {
        constructor(chart: Composition);
        private chart;
        updates: Array<UpdateFunction>;
        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @private
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */
        addUpdate(updateFn: UpdateFunction): void;
        /**
         * @private
         */
        update(options: NavigationOptions, redraw?: boolean): void;
    }
}
export default ChartNavigationComposition;
