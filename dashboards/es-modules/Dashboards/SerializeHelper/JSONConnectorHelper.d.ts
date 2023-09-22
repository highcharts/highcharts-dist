import type JSON from '../JSON';
import type JSONConnectorOptions from '../../Data/Connectors/JSONConnectorOptions';
import JSONConnector from '../../Data/Connectors/JSONConnector.js';
import Serializable from '../Serializable.js';
declare namespace JSONConnectorHelper {
    interface JSON extends Serializable.JSON<'Data.JSONConnector'> {
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & JSONConnectorOptions);
}
declare const JSONConnectorHelper: Serializable.Helper<JSONConnector, JSONConnectorHelper.JSON>;
export default JSONConnectorHelper;
