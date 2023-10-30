import type InvertModifierOptions from '../../Data/Modifiers/InvertModifierOptions';
import type JSON from '../JSON';
import InvertModifier from '../../Data/Modifiers/InvertModifier';
import Serializable from '../Serializable.js';
declare namespace InvertModifierHelper {
    interface JSON extends Serializable.JSON<'Data.InvertModifier'> {
        options: OptionsJSON;
    }
    type OptionsJSON = (JSON.Object & InvertModifierOptions);
}
declare const InvertModifierHelper: Serializable.Helper<InvertModifier, InvertModifierHelper.JSON>;
export default InvertModifierHelper;
