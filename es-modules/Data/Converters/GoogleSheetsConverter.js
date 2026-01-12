/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Gøran Slettemark
 *  - Wojciech Chmiel
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */
'use strict';
import DataConverter from './DataConverter.js';
import DataConverterUtils from './DataConverterUtils.js';
import U from '../../Core/Utilities.js';
const { merge, uniqueKey } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transformation of an Google Sheets to a table.
 *
 * @private
 */
class GoogleSheetsConverter extends DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the GoogleSheetsConverter.
     *
     * @param {Partial<GoogleSheetsConverterOptions>} [options]
     * Options for the GoogleSheetsConverter.
     */
    constructor(options) {
        const mergedOptions = merge(GoogleSheetsConverter.defaultOptions, options);
        super(mergedOptions);
        this.header = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates the parsing of the Google Sheet
     *
     * @param {Partial<GoogleSheetsConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits GoogleSheetsParser#parse
     * @emits GoogleSheetsParser#afterParse
     */
    parse(options, eventDetail) {
        const converter = this, parseOptions = merge(converter.options, options);
        let columnsArray = ((parseOptions.json?.values) || []).map((column) => column.slice());
        if (columnsArray.length === 0) {
            return {};
        }
        converter.header = [];
        converter.emit({
            type: 'parse',
            columns: [],
            detail: eventDetail,
            headers: converter.header
        });
        // If beforeParse is defined, use it to modify the data
        const { beforeParse, json } = parseOptions;
        if (beforeParse && json) {
            columnsArray = beforeParse(json.values);
        }
        let column;
        for (let i = 0, iEnd = columnsArray.length; i < iEnd; i++) {
            column = columnsArray[i];
            converter.header[i] = (parseOptions.firstRowAsNames ?
                `${column.shift()}` :
                uniqueKey());
            for (let j = 0, jEnd = column.length; j < jEnd; ++j) {
                let cellValue = column[j];
                if (isDateObject(cellValue)) {
                    cellValue = cellValue.getTime();
                }
                columnsArray[i][j] = cellValue;
            }
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.header
        });
        return DataConverterUtils.getColumnsCollection(columnsArray, converter.header);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default options
 */
GoogleSheetsConverter.defaultOptions = {
    ...DataConverter.defaultOptions
};
DataConverter.registerType('GoogleSheets', GoogleSheetsConverter);
/* *
 *
 *  Default Export
 *
 * */
export default GoogleSheetsConverter;
/**
 * Check if a value is a Date object
 *
 * @param {unknown} value to verify
 * @return {boolean}
 * True if the value is a Date object, false otherwise.
 */
function isDateObject(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
