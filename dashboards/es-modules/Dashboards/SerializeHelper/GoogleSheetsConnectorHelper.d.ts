import type JSON from '../JSON';
import type GoogleSheetsConnectorOptions from '../../Data/Connectors/GoogleSheetsConnectorOptions';
import GoogleSheetsConnector from '../../Data/Connectors/GoogleSheetsConnector.js';
import Serializable from '../Serializable.js';
declare namespace GoogleSheetsConnectorHelper {
    interface JSON extends Serializable.JSON<'Data.GoogleSheetsConnector'> {
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & GoogleSheetsConnectorOptions);
}
declare const GoogleSheetsConnectorHelper: Serializable.Helper<GoogleSheetsConnector, GoogleSheetsConnectorHelper.JSON>;
export default GoogleSheetsConnectorHelper;
