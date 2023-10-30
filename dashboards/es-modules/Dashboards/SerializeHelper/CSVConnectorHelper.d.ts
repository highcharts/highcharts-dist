import type JSON from '../JSON';
import type CSVConnectorOptions from '../../Data/Connectors/CSVConnectorOptions';
import CSVConnector from '../../Data/Connectors/CSVConnector.js';
import Serializable from '../Serializable.js';
declare namespace CSVConnectorHelper {
    interface JSON extends Serializable.JSON<'Data.CSVConnector'> {
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & CSVConnectorOptions);
}
declare const CSVConnectorHelper: Serializable.Helper<CSVConnector, CSVConnectorHelper.JSON>;
export default CSVConnectorHelper;
