declare module '../../Core/GlobalsBase.d.ts' {
    interface GlobalsBase {
        /**
         * Returns true if the current browser supports WebGL.
         *
         * @requires modules/boost
         *
         * @function Highcharts.hasWebGLSupport
         *
         * @return {boolean}
         * `true` if the browser supports WebGL.
         */
        hasWebGLSupport?: typeof hasWebGLSupport;
    }
}
/**
 * Returns true if the current browser supports WebGL.
 *
 * @requires modules/boost
 *
 * @function Highcharts.hasWebGLSupport
 *
 * @return {boolean}
 * `true` if the browser supports WebGL.
 */
declare function hasWebGLSupport(): boolean;
export {};
