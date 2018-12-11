import * as globals from "../globals";
import * as Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    interface AjaxSettings {
        data: object;
        dataType: ("json"|"octet"|"text"|"xml");
        error: () => void;
        headers: object;
        success: () => void;
        type: ("delete"|"get"|"post"|"update");
        url: string;
    }
    interface Chart {
        data?: Data;
    }
    interface DataDateFormatObject {
        alternative?: string;
        parser: DataDateFormatCallbackFunction;
        regex: RegExp;
    }
    /**
     * Perform an Ajax call.
     *
     * @param attr
     *        The Ajax settings to use.
     */
    function ajax(attr: AjaxSettings): void;
    /**
     * Creates a data object to parse data for a chart.
     *
     *
     *
     */
    function data(dataOptions: DataOptions, chartOptions?: Options, chart?: Chart): Data;
}
export default factory;
