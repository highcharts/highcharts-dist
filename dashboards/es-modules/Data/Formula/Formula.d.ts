import './Functions/ABS.js';
import './Functions/AND.js';
import './Functions/AVERAGE.js';
import './Functions/AVERAGEA.js';
import './Functions/COUNT.js';
import './Functions/COUNTA.js';
import './Functions/IF.js';
import './Functions/ISNA.js';
import './Functions/MAX.js';
import './Functions/MEDIAN.js';
import './Functions/MIN.js';
import './Functions/MOD.js';
import './Functions/MODE.js';
import './Functions/NOT.js';
import './Functions/OR.js';
import './Functions/PRODUCT.js';
import './Functions/SUM.js';
import './Functions/XOR.js';
export type { FormulaParserError } from './FormulaParser';
export type { Arguments, Formula, Function, Item, Operator, Range, Reference, Term, Value } from './FormulaTypes';
/**
 * Formula engine to make use of spreadsheet formula strings.
 * @internal
 */
declare const Formula: {
    isFormula: (item: import("./FormulaTypes.js").Item) => item is import("./FormulaTypes.js").Formula;
    isFunction: (item: import("./FormulaTypes.js").Item) => item is import("./FormulaTypes.js").Function;
    isOperator: (item: import("./FormulaTypes.js").Item) => item is import("./FormulaTypes.js").Operator;
    isRange: (item: import("./FormulaTypes.js").Item) => item is import("./FormulaTypes.js").Range;
    isReference: (item: import("./FormulaTypes.js").Item) => item is import("./FormulaTypes.js").Reference;
    isValue: (item: import("./FormulaTypes.js").Item | null | undefined) => item is import("./FormulaTypes.js").Value;
    asNumber: (value: import("./FormulaTypes.js").Value) => number;
    getArgumentValue: (arg: import("./FormulaTypes.js").Range | import("./FormulaTypes.js").Term, table?: import("../DataTable.js").default | undefined) => import("./FormulaTypes.js").Value | import("./FormulaTypes.js").Value[];
    getArgumentsValues: (args: import("./FormulaTypes.js").Arguments, table?: import("../DataTable.js").default | undefined) => (import("./FormulaTypes.js").Value | import("./FormulaTypes.js").Value[])[];
    getRangeValues: (range: import("./FormulaTypes.js").Range, table: import("../DataTable.js").default) => import("./FormulaTypes.js").Value[];
    getReferenceValue: (reference: import("./FormulaTypes.js").Reference, table: import("../DataTable.js").default) => import("./FormulaTypes.js").Value;
    processFormula: (formula: import("./FormulaTypes.js").Formula, table?: import("../DataTable.js").default | undefined) => import("./FormulaTypes.js").Value;
    processorFunctions: Record<string, import("./FormulaProcessor.js").ProcessorFunction>;
    registerProcessorFunction: (name: string, processorFunction: import("./FormulaProcessor.js").ProcessorFunction) => boolean;
    translateReferences: <T extends import("./FormulaTypes.js").Formula | import("./FormulaTypes.js").Arguments>(formula: T, columnDelta?: number, rowDelta?: number) => T;
    parseFormula: (text: string, alternativeSeparators: boolean) => import("./FormulaTypes.js").Formula;
};
export default Formula;
