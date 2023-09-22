import type GlobalsLike from './GlobalsLike';
declare global {
    type AnyRecord = Record<string, any>;
    type ArrowFunction = (...args: any) => any;
    type DeepPartial<T> = {
        [K in keyof T]?: (T[K] | DeepPartial<T[K]>);
    };
    type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
    type FunctionNamesOf<T> = keyof FunctionsOf<T>;
    type FunctionsOf<T> = {
        [K in keyof T as T[K] extends Function ? K : never]: T[K];
    };
    interface Array<T> {
        forEach<TScope = any>(callbackfn: ArrayForEachCallbackFunction<T, TScope>, thisArg?: TScope): void;
    }
    interface ArrayForEachCallbackFunction<T, TScope = any> {
        (this: TScope, value: T, index: number, array: Array<T>): void;
    }
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
        /**
         * @private
         * @requires Core/Renderer/SVG/SVGElement
         */
        gradient?: string;
        /**
         * @private
         * @requires Core/Renderer/SVG/SVGElement
         */
        radialReference?: Array<number>;
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
        easeInOutSine(pos: number): number;
    }
    interface SVGElement {
        /**
         * @private
         * @requires Core/Renderer/SVG/SVGElement
         */
        cutHeight?: number;
        parentNode: SVGElement;
    }
    interface TouchList {
        changedTouches: Array<Touch>;
    }
    interface Window {
        /** @deprecated */
        opera?: unknown;
        /** @deprecated */
        webkitAudioContext?: typeof AudioContext;
        /** @deprecated */
        webkitURL?: typeof URL;
    }
    interface GlobalOptions {
        /** @deprecated */
        canvasToolsURL?: string;
        /** @deprecated */
        Date?: Function;
        /** @deprecated */
        getTimezoneOffset?: Function;
        /** @deprecated */
        timezone?: string;
        /** @deprecated */
        timezoneOffset?: number;
        /** @deprecated */
        useUTC?: boolean;
    }
    namespace Intl {
        interface DateTimeFormat {
            formatRange(startDate: Date, endDate: Date): string;
        }
    }
}
declare const _default: GlobalsLike;
export default _default;
