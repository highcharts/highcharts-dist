import type JSON from '../JSON';
import DataCursor from '../../Data/DataCursor.js';
import Serializable from '../Serializable.js';
declare namespace DataCursorHelper {
    type TypeJSON = (PositionJSON | RangeJSON);
    interface PositionJSON extends JSON.Object {
        column?: string;
        row?: number;
        state: DataCursor.State;
        type: 'position';
    }
    interface RangeJSON extends JSON.Object {
        columns?: Array<string>;
        firstRow: number;
        lastRow: number;
        state: DataCursor.State;
        type: 'range';
    }
    interface JSON extends Serializable.JSON<'Data.DataCursor'> {
        stateMap: StateMapJSON;
    }
    type StateMapJSON = JSON.Object<JSON.Object<JSON.Array<TypeJSON>>>;
}
declare const DataCursorHelper: Serializable.Helper<DataCursor, DataCursorHelper.JSON>;
export default DataCursorHelper;
