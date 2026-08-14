/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface AjaxSettingsObject {
        data?: (string|Dictionary<any>);
        dataType?: ("json"|"octet"|"text"|"xml");
        error?: Function;
        headers?: Dictionary<string>;
        success?: Function;
        type?: string;
        url: string;
    }
    interface Chart {
        /**
         * Exporting object.
         */
        exporting: Exporting;
        fullscreen: Fullscreen;
    }
    /**
     * Handles displaying chart's container in the fullscreen mode.
     *
     * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
     */
    class Fullscreen {
        /**
         * Handles displaying chart's container in the fullscreen mode.
         *
         * **Note**: Fullscreen is not supported on iPhone due to iOS
         * limitations.
         */
        constructor(chart: Chart);
        /**
         * Chart managed by the fullscreen controller.
         */
        chart: Chart;
        /**
         * The flag is set to `true` when the chart is displayed in the
         * fullscreen mode.
         */
        isOpen?: boolean;
        /**
         * Stops displaying the chart in fullscreen mode. Exporting module
         * required.
         */
        close(): void;
        /**
         * Displays the chart in fullscreen mode. When fired customly by user
         * before exporting context button is created, button's text will not be
         * replaced - it's on the user side. Exporting module required.
         */
        open(): void;
        /**
         * Toggles displaying the chart in fullscreen mode. By default, when the
         * exporting module is enabled, a context button with a drop down menu
         * in the upper right corner accesses this function. Exporting module
         * required.
         */
        toggle(): void;
    }
    /**
     * Perform an Ajax call.
     *
     * @param settings
     *        The Ajax settings to use.
     *
     * @return Returns false, if error occurred.
     */
    function ajax(settings: AjaxSettingsObject): (false|undefined);
    /**
     * Get a JSON resource over XHR, also supporting CORS without preflight.
     *
     * @param url
     *        The URL to load.
     *
     * @param success
     *        The success callback. For error handling, use the
     *        `Highcharts.ajax` function instead.
     */
    function getJSON(url: string, success: Function): void;
}
export default _Highcharts;
