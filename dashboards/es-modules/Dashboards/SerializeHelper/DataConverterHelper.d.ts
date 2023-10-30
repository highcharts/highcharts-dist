import JSON from '../JSON';
import DataConverter from '../../Data/Converters/DataConverter.js';
import Serializable from '../Serializable.js';
declare namespace DataConverterHelper {
    interface JSON extends Serializable.JSON<'Data.DataConverter'> {
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & DataConverter.Options);
}
declare const DataConverterHelper: Serializable.Helper<DataConverter, DataConverterHelper.JSON>;
export default DataConverterHelper;
