/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Pawel Lysy
 *  - Kamil Kubik
 *
 * */
'use strict';
import DataConverter from './DataConverter.js';
import DataConverterUtils from './DataConverterUtils.js';
import U from '../../Core/Utilities.js';
const { error, isArray, merge, objectEach } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming JSON to a table.
 *
 * @private
 */
class JSONConverter extends DataConverter {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the JSON parser.
     *
     * @param {Partial<JSONConverterOptions>} [options]
     * Options for the JSON parser.
     */
    constructor(options) {
        const mergedOptions = merge(JSONConverter.defaultOptions, options);
        super(mergedOptions);
        /* *
         *
         *  Properties
         *
         * */
        this.headerColumnIds = [];
        this.headers = [];
        this.options = mergedOptions;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initiates parsing of JSON structure.
     *
     * @param {Partial<JSONConverterOptions>}[options]
     * Options for the parser
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @emits JSONConverter#parse
     * @emits JSONConverter#afterParse
     */
    parse(options, eventDetail) {
        const converter = this;
        options = merge(converter.options, options);
        const { beforeParse, orientation, firstRowAsNames, columnIds } = options;
        let data = options.data;
        if (!data) {
            return {};
        }
        converter.headers = [];
        const columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (beforeParse) {
            data = beforeParse(data);
        }
        data = data.slice();
        if (orientation === 'columns') {
            this.parseColumnsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        else if (orientation === 'rows') {
            this.parseRowsOrientation(columnsArray, data, firstRowAsNames, columnIds);
        }
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    }
    /**
     * Helper for parsing data in 'columns' orientation.
     *
     * @param {DataTable.BasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {void}
     */
    parseColumnsOrientation(columnsArray, data, firstRowAsNames, columnIds) {
        const converter = this;
        for (let i = 0, iEnd = data.length; i < iEnd; i++) {
            const item = data[i];
            if (!(Array.isArray(item))) {
                return;
            }
            if (Array.isArray(converter.headers)) {
                if (firstRowAsNames) {
                    converter.headers.push(`${item.shift()}`);
                }
                else if (columnIds && Array.isArray(columnIds)) {
                    converter.headers.push(columnIds[i]);
                }
                columnsArray.push(item);
            }
            else {
                error('JSONConverter: Invalid `columnIds` option.', false);
            }
        }
    }
    /**
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {DataTable.BasicColumn[]} [columnsArray]
     * Array of columns.
     *
     * Helper for parsing data in 'rows' orientation.
     *
     * @param {unknown[]} [data]
     * Array of data elements.
     *
     * @param {Boolean} [firstRowAsNames]
     * Defines row as names.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {DataTable.BasicColumn[]}
     * Parsed columns.
     */
    parseRowsOrientation(columnsArray, data, firstRowAsNames, columnIds) {
        const converter = this;
        if (firstRowAsNames) {
            converter.headers = data.shift();
        }
        else if (columnIds) {
            converter.headerColumnIds = columnIds;
        }
        for (let rowIndex = 0, iEnd = data.length; rowIndex < iEnd; rowIndex++) {
            let row = data[rowIndex];
            if (!isArray(row)) {
                row = this.convertItemToRow(row, columnIds);
            }
            for (let columnIndex = 0, jEnd = row.length; columnIndex < jEnd; columnIndex++) {
                if (columnsArray.length < columnIndex + 1) {
                    columnsArray.push([]);
                }
                columnsArray[columnIndex].push(row[columnIndex]);
                // Create headers only once.
                if (!firstRowAsNames && rowIndex === 0) {
                    if (Array.isArray(converter.headerColumnIds)) {
                        converter.headers.push(converter.headerColumnIds[columnIndex] ||
                            columnIndex.toString());
                    }
                    else {
                        error('JSONConverter: Invalid `columnIds` option.', false);
                    }
                }
            }
        }
    }
    /**
     * Extracts a row from an object, using columnIds if provided.
     *
     * @param {Record<string, string|number>} [rowObj]
     * Set of props.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Array<string | number>}
     * Row converted to array.
     */
    convertItemToRow(rowObj, columnIds) {
        const converter = this;
        if (columnIds && !(Array.isArray(columnIds))) {
            const newRow = [];
            objectEach(columnIds, (arrayWithPath, name) => {
                newRow.push(arrayWithPath.reduce((acc, key) => acc[key], rowObj));
                if (converter.headers.indexOf(name) < 0) {
                    converter.headers.push(name);
                }
            });
            return newRow;
        }
        converter.headerColumnIds = Object.keys(rowObj);
        return Object.values(rowObj);
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
JSONConverter.defaultOptions = {
    ...DataConverter.defaultOptions,
    orientation: 'rows'
};
DataConverter.registerType('JSON', JSONConverter);
/* *
 *
 *  Default Export
 *
 * */
export default JSONConverter;
