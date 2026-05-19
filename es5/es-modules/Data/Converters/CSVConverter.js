/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Torstein Hønsi
 *  - Christer Vasseng
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *  - Kamil Kubik
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import DataConverter from './DataConverter.js';
import DataConverterUtils from './DataConverterUtils.js';
import { merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Handles parsing and transforming CSV to a table.
 *
 * @private
 */
var CSVConverter = /** @class */ (function (_super) {
    __extends(CSVConverter, _super);
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the CSV parser.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the CSV parser.
     */
    function CSVConverter(options) {
        var _this = this;
        var mergedOptions = merge(CSVConverter.defaultOptions, options);
        _this = _super.call(this, mergedOptions) || this;
        /* *
         *
         *  Properties
         *
         * */
        _this.headers = [];
        _this.dataTypes = [];
        _this.options = mergedOptions;
        return _this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Parses the CSV string into a DataTable column collection.
     * Handles line and item delimiters, optional header row, and
     * applies pre-processing if a beforeParse callback is provided.
     *
     * @param {Partial<CSVConverterOptions>} [options]
     * Options for the parser.
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     * @return {DataTableColumnCollection}
     * The parsed column collection.
     *
     * @emits CSVDataParser#parse
     * @emits CSVDataParser#afterParse
     */
    CSVConverter.prototype.parse = function (options, eventDetail) {
        var converter = this, dataTypes = converter.dataTypes, parserOptions = merge(this.options, options), beforeParse = parserOptions.beforeParse, lineDelimiter = parserOptions.lineDelimiter, firstRowAsNames = parserOptions.firstRowAsNames, itemDelimiter = parserOptions.itemDelimiter;
        var lines, rowIt = 0, csv = parserOptions.csv, startRow = parserOptions.startRow, endRow = parserOptions.endRow, column;
        var columnsArray = [];
        converter.emit({
            type: 'parse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        if (csv && beforeParse) {
            csv = beforeParse(csv);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n|\r/g, '\n') // Windows | Mac
                .split(lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (!itemDelimiter) {
                converter.guessedItemDelimiter =
                    converter.guessDelimiter(lines);
            }
            // If the first row contain names, add them to the
            // headers array and skip the row.
            if (firstRowAsNames) {
                var headers = lines[0].split(itemDelimiter || converter.guessedItemDelimiter || ',');
                // Remove ""s from the headers
                for (var i = 0; i < headers.length; i++) {
                    headers[i] = headers[i].trim().replace(/^["']|["']$/g, '');
                }
                converter.headers = headers;
                startRow++;
            }
            var offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    converter.parseCSVRow(columnsArray, lines[rowIt], rowIt - startRow - offset);
                }
            }
            if (dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' && // Format is a string date
                !converter.options.dateFormat) {
                converter.deduceDateFormat(columnsArray[0], null, true);
            }
            // Guess types.
            for (var i = 0, iEnd = columnsArray.length; i < iEnd; ++i) {
                column = columnsArray[i];
                for (var j = 0, jEnd = column.length; j < jEnd; ++j) {
                    if (column[j] && typeof column[j] === 'string') {
                        var cellValue = converter.convertByType(column[j]);
                        if (cellValue instanceof Date) {
                            cellValue = cellValue.getTime();
                        }
                        columnsArray[i][j] = cellValue;
                    }
                }
            }
        }
        // Normalize columns to same length to avoid truncation.
        columnsArray.forEach(function (col) {
            col.length = Math.max.apply(Math, columnsArray.map(function (c) { return c.length; }));
        });
        converter.emit({
            type: 'afterParse',
            columns: columnsArray,
            detail: eventDetail,
            headers: converter.headers
        });
        return DataConverterUtils.getColumnsCollection(columnsArray, converter.headers);
    };
    /**
     * Parses a single CSV row string into columns, handling delimiters,
     * quoted values, data type inference, and column range selection.
     */
    CSVConverter.prototype.parseCSVRow = function (columns, columnStr, rowNumber) {
        var converter = this, dataTypes = converter.dataTypes, _a = converter.options, startColumn = _a.startColumn, endColumn = _a.endColumn, itemDelimiter = (converter.options.itemDelimiter ||
            converter.guessedItemDelimiter);
        var decimalPoint = converter.options.decimalPoint;
        if (!decimalPoint || decimalPoint === itemDelimiter) {
            decimalPoint = converter.guessedDecimalPoint || '.';
        }
        var i = 0, c = '', token = '', actualColumn = 0, column = 0;
        var read = function (j) {
            c = columnStr[j];
        };
        var pushType = function (type) {
            if (dataTypes.length < column + 1) {
                dataTypes.push([type]);
            }
            if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                dataTypes[column].push(type);
            }
        };
        var push = function () {
            if (startColumn > actualColumn || actualColumn > endColumn) {
                // Skip this column, but increment the column count (#7272)
                ++actualColumn;
                token = '';
                return;
            }
            // Save the type of the token.
            if (typeof token === 'string') {
                var parsedNumber = parseFloat(token);
                if (!isNaN(parsedNumber) && isFinite(Number(token))) {
                    token = parsedNumber;
                    pushType('number');
                }
                else if (!isNaN(Date.parse(token))) {
                    token = token.replace(/\//g, '-');
                    pushType('date');
                }
                else {
                    pushType('string');
                }
            }
            else {
                pushType('number');
            }
            if (columns.length < column + 1) {
                columns.push([]);
            }
            // Try to apply the decimal point, and check if the token then is a
            // number. If not, reapply the initial value
            if (typeof token !== 'number' &&
                DataConverterUtils.guessType(token, converter) !== 'number' &&
                decimalPoint) {
                var initialValue = token;
                token = token.replace(decimalPoint, '.');
                if (DataConverterUtils.guessType(token, converter) !== 'number') {
                    token = initialValue;
                }
            }
            columns[column][rowNumber] = token;
            token = '';
            ++column;
            ++actualColumn;
        };
        if (!columnStr.trim().length) {
            return;
        }
        if (columnStr.trim()[0] === '#') {
            return;
        }
        for (; i < columnStr.length; i++) {
            read(i);
            if (c === '#') {
                // If there are hexvalues remaining (#13283)
                if (!/^#[A-F\d]{3,3}|[A-F\d]{6,6}/i.test(columnStr.substring(i))) {
                    // The rest of the row is a comment
                    push();
                    return;
                }
            }
            // Quoted string
            if (c === '"') {
                read(++i);
                while (i < columnStr.length) {
                    if (c === '"') {
                        break;
                    }
                    token += c;
                    read(++i);
                }
            }
            else if (c === itemDelimiter) {
                push();
                // Actual column data
            }
            else {
                token += c;
            }
        }
        push();
    };
    /**
     * Internal method that guesses the delimiter from the first
     * 13 lines of the CSV
     * @param {string[]} lines
     * The CSV, split into lines
     */
    CSVConverter.prototype.guessDelimiter = function (lines) {
        var points = 0, commas = 0, guessed;
        var potDelimiters = {
            ',': 0,
            ';': 0,
            '\t': 0
        }, linesCount = lines.length;
        for (var i = 0; i < linesCount; i++) {
            var inStr = false, c = void 0, cn = void 0, cl = void 0, token = '';
            // We should be able to detect dateFormats within 13 rows
            if (i > 13) {
                break;
            }
            var columnStr = lines[i];
            for (var j = 0; j < columnStr.length; j++) {
                c = columnStr[j];
                cn = columnStr[j + 1];
                cl = columnStr[j - 1];
                if (c === '#') {
                    // Skip the rest of the line - it's a comment
                    break;
                }
                if (c === '"') {
                    if (inStr) {
                        if (cl !== '"' && cn !== '"') {
                            while (cn === ' ' && j < columnStr.length) {
                                cn = columnStr[++j];
                            }
                            // After parsing a string, the next non-blank
                            // should be a delimiter if the CSV is properly
                            // formed.
                            if (typeof potDelimiters[cn] !== 'undefined') {
                                potDelimiters[cn]++;
                            }
                            inStr = false;
                        }
                    }
                    else {
                        inStr = true;
                    }
                }
                else if (typeof potDelimiters[c] !== 'undefined') {
                    token = token.trim();
                    if (!isNaN(Date.parse(token))) {
                        potDelimiters[c]++;
                    }
                    else if (isNaN(Number(token)) ||
                        !isFinite(Number(token))) {
                        potDelimiters[c]++;
                    }
                    token = '';
                }
                else {
                    token += c;
                }
                if (c === ',') {
                    commas++;
                }
                if (c === '.') {
                    points++;
                }
            }
        }
        // Count the potential delimiters.
        // This could be improved by checking if the number of delimiters
        // equals the number of columns - 1
        if (potDelimiters[';'] > potDelimiters[',']) {
            guessed = ';';
        }
        else if (potDelimiters[','] > potDelimiters[';']) {
            guessed = ',';
        }
        else {
            // No good guess could be made..
            guessed = ',';
        }
        // Try to deduce the decimal point if it's not explicitly set.
        // If both commas or points is > 0 there is likely an issue
        if (points > commas) {
            this.guessedDecimalPoint = '.';
        }
        else {
            this.guessedDecimalPoint = ',';
        }
        return guessed;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Default options
     */
    CSVConverter.defaultOptions = __assign(__assign({}, DataConverter.defaultOptions), { lineDelimiter: '\n', startColumn: 0, endColumn: Number.MAX_VALUE, startRow: 0, endRow: Number.MAX_VALUE });
    return CSVConverter;
}(DataConverter));
DataConverter.registerType('CSV', CSVConverter);
/* *
 *
 *  Default Export
 *
 * */
export default CSVConverter;
