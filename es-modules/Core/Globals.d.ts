import type GlobalsBase from './GlobalsBase';
declare global {
    type AnyRecord = Record<string, any>;
    type ArrowFunction = (...args: any) => any;
    type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
    type FunctionNamesOf<T> = keyof FunctionsOf<T>;
    type FunctionsOf<T> = {
        [K in keyof T as T[K] extends Function ? K : never]: T[K];
    };
    interface CallableFunction {
        apply<TScope, TArguments extends Array<unknown>, TReturn>(this: (this: TScope, ...args: TArguments) => TReturn, thisArg: TScope, args?: (TArguments | IArguments)): TReturn;
    }
    interface Class<T = any> extends Function {
        new (...args: Array<any>): T;
    }
    interface Document {
        /** @deprecated */
        exitFullscreen: () => Promise<void>;
        /** @deprecated */
        mozCancelFullScreen: Function;
        /** @deprecated */
        msExitFullscreen: Function;
        /** @deprecated */
        msHidden: boolean;
        /** @deprecated */
        webkitExitFullscreen: Function;
        /** @deprecated */
        webkitHidden: boolean;
    }
    interface Element {
        setAttribute(qualifiedName: string, value: (boolean | number | string)): void;
        /** @deprecated */
        currentStyle?: ElementCSSInlineStyle;
        /** @deprecated */
        mozRequestFullScreen: Function;
        /** @deprecated */
        msMatchesSelector: Element['matches'];
        /** @deprecated */
        msRequestFullscreen: Function;
        /** @deprecated */
        webkitMatchesSelector: Element['matches'];
        /** @deprecated */
        webkitRequestFullScreen: Function;
    }
    interface HTMLElement {
        parentNode: HTMLElement;
    }
    interface Math {
        /**
         * Easing definition
         *
         * @param pos
         * Current position, ranging from 0 to 1.
         *
         * @return
         * Ease result
         */
        easeInOutSine(pos: number): number;
    }
    interface SVGElement {
        parentNode: SVGElement;
    }
    interface TouchList {
        changedTouches: Array<Touch>;
    }
    interface Window {
        chrome?: unknown;
        /** @deprecated */
        opera?: unknown;
        /** @deprecated */
        webkitAudioContext?: typeof AudioContext;
        /** @deprecated */
        webkitURL?: typeof URL;
    }
    namespace Intl {
        interface DateTimeFormat {
            formatRange(startDate: Date, endDate: Date): string;
        }
    }
}
declare const _default: GlobalsBase;
export default _default;
