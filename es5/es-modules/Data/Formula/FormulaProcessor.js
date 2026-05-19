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
 *  - Sophie Bremer
 *
 * */
'use strict';
import { defined } from '../../Shared/Utilities.js';
import FormulaTypes from './FormulaTypes.js';
var isFormula = FormulaTypes.isFormula, isFunction = FormulaTypes.isFunction, isOperator = FormulaTypes.isOperator, isRange = FormulaTypes.isRange, isReference = FormulaTypes.isReference, isValue = FormulaTypes.isValue;
/* *
 *
 *  Constants
 *
 * */
var asLogicalStringRegExp = / */;
var MAX_FALSE = Number.MAX_VALUE / 1.000000000001;
var MAX_STRING = Number.MAX_VALUE / 1.000000000002;
var MAX_TRUE = Number.MAX_VALUE;
var operatorPriority = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
    '=': 0,
    '<': 0,
    '<=': 0,
    '>': 0,
    '>=': 0
};
var processorFunctions = {};
var processorFunctionNameRegExp = /^[A-Z][A-Z\.]*$/;
/* *
 *
 *  Functions
 *
 * */
/**
 * Converts non-number types to logical numbers.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Logical number value. `NaN` if not convertable.
 */
function asLogicalNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? MAX_TRUE : MAX_FALSE;
        case 'string':
            return MAX_STRING;
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Converts strings to logical strings, while other types get passed through. In
 * logical strings the space character is the lowest value and letters are case
 * insensitive.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {Highcharts.FormulaValue}
 * Logical string value or passed through value.
 */
function asLogicalString(value) {
    if (typeof value === 'string') {
        return value.toLowerCase().replace(asLogicalStringRegExp, '\0');
    }
    return value;
}
/**
 * Converts non-number types to a logic number.
 *
 * @param {Highcharts.FormulaValue} value
 * Value to convert.
 *
 * @return {number}
 * Number value. `NaN` if not convertable.
 */
function asNumber(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? 1 : 0;
        case 'string':
            return parseFloat(value.replace(',', '.'));
        case 'number':
            return value;
        default:
            return NaN;
    }
}
/**
 * Process a basic operation of two given values.
 *
 * @private
 *
 * @param {Highcharts.FormulaOperator} operator
 * Operator between values.
 *
 * @param {Highcharts.FormulaValue} x
 * First value for operation.
 *
 * @param {Highcharts.FormulaValue} y
 * Second value for operation.
 *
 * @return {Highcharts.FormulaValue}
 * Operation result. `NaN` if operation is not support.
 */
function basicOperation(operator, x, y) {
    switch (operator) {
        case '=':
            return asLogicalString(x) === asLogicalString(y);
        case '<':
            if (typeof x === typeof y) {
                return asLogicalString(x) < asLogicalString(y);
            }
            return asLogicalNumber(x) < asLogicalNumber(y);
        case '<=':
            if (typeof x === typeof y) {
                return asLogicalString(x) <= asLogicalString(y);
            }
            return asLogicalNumber(x) <= asLogicalNumber(y);
        case '>':
            if (typeof x === typeof y) {
                return asLogicalString(x) > asLogicalString(y);
            }
            return asLogicalNumber(x) > asLogicalNumber(y);
        case '>=':
            if (typeof x === typeof y) {
                return asLogicalString(x) >= asLogicalString(y);
            }
            return asLogicalNumber(x) >= asLogicalNumber(y);
    }
    x = asNumber(x);
    y = asNumber(y);
    var result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            return NaN;
    }
    // Limit decimal to 9 digits
    return (result % 1 ?
        Math.round(result * 1000000000) / 1000000000 :
        result);
}
/**
 * Converts an argument to Value and in case of a range to an array of Values.
 *
 * @function Highcharts.Formula.getArgumentValue
 *
 * @param {Highcharts.FormulaRange|Highcharts.FormulaTerm} arg
 * Formula range or term to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Converted value.
 */
function getArgumentValue(arg, table) {
    // Add value
    if (isValue(arg)) {
        return arg;
    }
    // Add values of a range
    if (isRange(arg)) {
        return (table && getRangeValues(arg, table) || []);
    }
    // Add values of a function
    if (isFunction(arg)) {
        return processFunction(arg, table);
    }
    // Process functions, operations, references with formula processor
    return processFormula((isFormula(arg) ? arg : [arg]), table);
}
/**
 * Converts all arguments to Values and in case of ranges to arrays of Values.
 *
 * @function Highcharts.Formula.getArgumentsValues
 *
 * @param {Highcharts.FormulaArguments} args
 * Formula arguments to convert.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Array<(Highcharts.FormulaValue|Array<Highcharts.FormulaValue>)>}
 * Converted values.
 */
function getArgumentsValues(args, table) {
    var values = [];
    for (var i = 0, iEnd = args.length; i < iEnd; ++i) {
        values.push(getArgumentValue(args[i], table));
    }
    return values;
}
/**
 * Extracts cell values from a table for a given range.
 *
 * @function Highcharts.Formula.getRangeValues
 *
 * @param {Highcharts.FormulaRange} range
 * Formula range to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Array<Highcharts.FormulaValue>}
 * Extracted values.
 */
function getRangeValues(range, table) {
    var columnIds = table
        .getColumnIds()
        .slice(range.beginColumn, range.endColumn + 1), values = [];
    for (var i = 0, iEnd = columnIds.length, cell = void 0; i < iEnd; ++i) {
        var cells = table.getColumn(columnIds[i], true) || [];
        for (var j = range.beginRow, jEnd = range.endRow + 1; j < jEnd; ++j) {
            cell = cells[j];
            if (typeof cell === 'string' &&
                cell[0] === '=' &&
                table !== table.getModified()) {
                // Look in the modified table for formula result
                cell = table.getModified().getCell(columnIds[i], j);
            }
            values.push(isValue(cell) ? cell : NaN);
        }
    }
    return values;
}
/**
 * Extracts the cell value from a table for a given reference.
 *
 * @private
 *
 * @param {Highcharts.FormulaReference} reference
 * Formula reference to use.
 *
 * @param {Highcharts.DataTable} table
 * Table to extract from.
 *
 * @return {Highcharts.FormulaValue}
 * Extracted value. 'undefined' might also indicate that the cell was not found.
 */
function getReferenceValue(reference, table) {
    var columnId = table.getColumnIds()[reference.column];
    if (columnId) {
        var cell = table.getCell(columnId, reference.row);
        if (typeof cell === 'string' &&
            cell[0] === '=' &&
            table !== table.getModified()) {
            // Look in the modified table for formula result
            var result = table.getModified().getCell(columnId, reference.row);
            return isValue(result) ? result : NaN;
        }
        if (isValue(cell)) {
            return reference.isNegative ? -cell : cell;
        }
        return NaN;
    }
    return NaN;
}
/**
 * Calculates a value based on the two top values and the related operator.
 *
 * Used to properly process the formula's values based on its operators.
 *
 * @private
 * @function Highcharts.applyOperator
 *
 * @param {Array<Highcharts.Value>} values
 * Processed formula values.
 *
 * @param {Array<Highcharts.Operator>} operators
 * Processed formula operators.
 */
function applyOperator(values, operators) {
    if (values.length < 2 || operators.length < 1) {
        values.push(NaN);
    }
    var secondValue = values.pop();
    var firstValue = values.pop();
    var operator = operators.pop();
    if (!defined(secondValue) || !defined(firstValue) || !defined(operator)) {
        values.push(NaN);
    }
    else {
        values.push(basicOperation(operator, firstValue, secondValue));
    }
}
/**
 * Processes a formula array on the given table. If the formula does not contain
 * references or ranges, then no table has to be provided.
 *
 * Performs formulas considering the operators precedence.
 *
 * // Example of the `2 * 3 + 4` formula:
 * 2 -> values: [2], operators: []
 * * -> values: [2], operators: [*]
 * 3 -> values: [2, 3], operators: [*]
 * // Since the higher precedence operator exists (* > +), perform it first.
 * + -> values: [6], operators: [+]
 * 4 -> values: [6, 4], operators: [+]
 * // When non-higher precedence operators remain, perform rest calculations.
 * -> values: [10], operators: []
 *
 * @private
 * @function Highcharts.processFormula
 *
 * @param {Highcharts.Formula} formula
 * Formula array to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @return {Highcharts.FormulaValue}
 * Result value of the process. `NaN` indicates an error.
 */
function processFormula(formula, table) {
    // Keeps all the values to calculate them in a proper priority, based on the
    // given operators.
    var values = [];
    // Keeps all the operators to calculate the values above, following the
    // proper priority.
    var operators = [];
    // Indicates if the next item is a value (not an operator).
    var expectingValue = true;
    for (var i = 0, iEnd = formula.length; i < iEnd; ++i) {
        var item = formula[i];
        if (isOperator(item)) {
            if (expectingValue && item === '-') {
                // Split the negative values to be handled as a binary
                // operation if the next item is a value.
                values.push(0);
                operators.push('-');
                expectingValue = true;
            }
            else {
                // Perform if the higher precedence operator exist.
                while (operators.length &&
                    operatorPriority[operators[operators.length - 1]] >=
                        operatorPriority[item]) {
                    applyOperator(values, operators);
                }
                operators.push(item);
                expectingValue = true;
            }
            continue;
        }
        var value = void 0;
        // Assign the proper value, starting from the most common types.
        if (isValue(item)) {
            value = item;
        }
        else if (isReference(item)) {
            value = table ? getReferenceValue(item, table) : NaN;
        }
        else if (isFunction(item)) {
            var result = processFunction(item, table);
            value = isValue(result) ? result : NaN;
        }
        else if (isFormula(item)) {
            value = processFormula(item, table);
        }
        if (typeof value !== 'undefined') {
            values.push(value);
            expectingValue = false;
        }
        else {
            return NaN;
        }
    }
    // Handle the remaining operators that weren't taken into consideration, due
    // to non-higher precedence.
    while (operators.length) {
        applyOperator(values, operators);
    }
    if (values.length !== 1) {
        return NaN;
    }
    return values[0];
}
/**
 * Process a function on the given table. If the arguments do not contain
 * references or ranges, then no table has to be provided.
 *
 * @private
 *
 * @param {Highcharts.FormulaFunction} formulaFunction
 * Formula function to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to use for references and ranges.
 *
 * @param {Highcharts.FormulaReference} [reference]
 * Table cell reference to use for relative references and ranges.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value (or values) of the process. `NaN` indicates an error.
 */
function processFunction(formulaFunction, table, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
reference // @todo
) {
    var processor = processorFunctions[formulaFunction.name];
    if (processor) {
        try {
            return processor(formulaFunction.args, table);
        }
        catch (_a) {
            return NaN;
        }
    }
    var error = new Error("Function \"".concat(formulaFunction.name, "\" not found."));
    error.name = 'FormulaProcessError';
    throw error;
}
/**
 * Registers a function for the FormulaProcessor.
 *
 * @param {string} name
 * Name of the function in spreadsheets notation with upper case.
 *
 * @param {Highcharts.FormulaFunction} processorFunction
 * ProcessorFunction for the FormulaProcessor. This is an object so that it
 * can take additional parameter for future validation routines.
 *
 * @return {boolean}
 * Return true, if the ProcessorFunction has been registered.
 */
function registerProcessorFunction(name, processorFunction) {
    return (processorFunctionNameRegExp.test(name) &&
        !processorFunctions[name] &&
        !!(processorFunctions[name] = processorFunction));
}
/**
 * Translates relative references and ranges in-place.
 *
 * @param {Highcharts.Formula} formula
 * Formula to translate references and ranges in.
 *
 * @param {number} [columnDelta=0]
 * Column delta to translate to. Negative translate back.
 *
 * @param {number} [rowDelta=0]
 * Row delta to translate to. Negative numbers translate back.
 *
 * @return {Highcharts.Formula}
 * Formula with translated reference and ranges. This formula is equal to the
 * first argument.
 */
function translateReferences(formula, columnDelta, rowDelta) {
    if (columnDelta === void 0) { columnDelta = 0; }
    if (rowDelta === void 0) { rowDelta = 0; }
    for (var i = 0, iEnd = formula.length, item = void 0; i < iEnd; ++i) {
        item = formula[i];
        if (Array.isArray(item)) {
            translateReferences(item, columnDelta, rowDelta);
        }
        else if (isFunction(item)) {
            translateReferences(item.args, columnDelta, rowDelta);
        }
        else if (isRange(item)) {
            if (item.beginColumnRelative) {
                item.beginColumn += columnDelta;
            }
            if (item.beginRowRelative) {
                item.beginRow += rowDelta;
            }
            if (item.endColumnRelative) {
                item.endColumn += columnDelta;
            }
            if (item.endRowRelative) {
                item.endRow += rowDelta;
            }
        }
        else if (isReference(item)) {
            if (item.columnRelative) {
                item.column += columnDelta;
            }
            if (item.rowRelative) {
                item.row += rowDelta;
            }
        }
    }
    return formula;
}
/* *
 *
 *  Default Export
 *
 * */
var FormulaProcessor = {
    asNumber: asNumber,
    getArgumentValue: getArgumentValue,
    getArgumentsValues: getArgumentsValues,
    getRangeValues: getRangeValues,
    getReferenceValue: getReferenceValue,
    processFormula: processFormula,
    processorFunctions: processorFunctions,
    registerProcessorFunction: registerProcessorFunction,
    translateReferences: translateReferences
};
export default FormulaProcessor;
