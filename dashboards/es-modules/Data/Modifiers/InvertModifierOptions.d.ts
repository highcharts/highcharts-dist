import type DataModifierOptions from './DataModifierOptions';
/**
 * Options to configure the modifier.
 */
export interface InvertModifierOptions extends DataModifierOptions {
    /**
     * Name of the related modifier for these options.
     */
    type: 'Invert';
}
export default InvertModifierOptions;
