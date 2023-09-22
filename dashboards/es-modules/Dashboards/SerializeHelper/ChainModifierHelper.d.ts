import type ChainModifierOptions from '../../Data/Modifiers/ChainModifierOptions';
import type { DataModifierTypeOptions } from '../../Data/Modifiers/DataModifierType';
import type JSON from '../JSON';
import ChainModifier from '../../Data/Modifiers/ChainModifier.js';
import Serializable from '../Serializable.js';
declare namespace ChainModifierHelper {
    type ChainJSON = (Serializable.JSON<string> & DataModifierTypeOptions);
    interface JSON extends Serializable.JSON<'Data.ChainModifier'> {
        chain: Array<ChainJSON>;
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & ChainModifierOptions);
}
declare const ChainModifierHelper: Serializable.Helper<ChainModifier, ChainModifierHelper.JSON>;
export default ChainModifierHelper;
