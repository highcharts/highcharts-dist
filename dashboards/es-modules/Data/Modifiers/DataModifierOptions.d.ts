import type { DataModifierTypes } from './DataModifierType';
/**
 * Options to configure the modifier.
 */
export interface DataModifierOptions {
    /**
     * Type of the related modifier for these options.
     */
    type: keyof DataModifierTypes;
}
export default DataModifierOptions;
