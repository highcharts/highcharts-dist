import type DataModifierOptions from './DataModifierOptions';
import type { DataModifierTypeOptions } from './DataModifierType';
/**
 * Options to configure the chain modifier.
 */
export interface ChainModifierOptions extends DataModifierOptions {
    /**
     * Name of the related modifier for these options.
     */
    type: 'Chain';
    /**
     * Array of options of the chain modifiers.
     */
    chain?: Array<Partial<DataModifierTypeOptions>>;
    /**
     * Whether to revert the order before execution.
     */
    reverse?: boolean;
}
export default ChainModifierOptions;
