import type Chart from './Chart/Chart.js';
import type GlobalOptions from './Options';
declare module './Chart/ChartLike' {
    interface ChartLike {
        /** @requires Core/Responsive */
        setResponsive(redraw?: boolean, reset?: boolean): void;
    }
}
declare module './Options' {
    interface Options {
        isResponsiveOptions?: boolean;
        responsive?: Responsive.Options;
    }
}
declare namespace Responsive {
    interface CallbackFunction {
        (this: Chart): boolean;
    }
    class Composition extends Chart {
        /** @requires Core/Responsive */
        currentResponsive?: CurrentObject;
        /** @requires Core/Responsive */
        currentOptions(options: Partial<GlobalOptions>): Partial<GlobalOptions>;
        /** @requires Core/Responsive */
        matchResponsiveRule(rule: RuleOptions, matches: Array<string>): void;
        /** @requires Core/Responsive */
        setResponsive(redraw?: boolean, reset?: boolean): void;
    }
    interface CurrentObject {
        mergedOptions: Partial<GlobalOptions>;
        ruleIds: string;
        undoOptions: Partial<GlobalOptions>;
    }
    interface Options {
        rules?: Array<RuleOptions>;
    }
    interface RuleConditionOptions {
        callback?: CallbackFunction;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
    }
    interface RuleOptions {
        _id?: string;
        chartOptions?: GlobalOptions;
        condition: RuleConditionOptions;
    }
    /**
     * @private
     */
    function compose<T extends typeof Chart>(ChartClass: T): (T & typeof Composition);
}
export default Responsive;
