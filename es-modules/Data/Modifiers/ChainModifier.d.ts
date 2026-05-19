import type ChainModifierOptions from './ChainModifierOptions';
import type { DataEvent, DataEventCallback, DataEventDetail } from '../DataEvent';
import type DataModifierEvent from './DataModifierEvent';
import DataModifier from './DataModifier.js';
import DataTable from '../DataTable.js';
/**
 * Modifies a table with the help of modifiers in an ordered chain.
 *
 */
declare class ChainModifier extends DataModifier {
    /**
     * Default option for the ordered modifier chain.
     */
    static readonly defaultOptions: ChainModifierOptions;
    /**
     * Constructs an instance of the modifier chain.
     *
     * @param {Partial<ChainModifierOptions>} [options]
     * Options to configure the modifier chain.
     *
     * @param {...DataModifier} [chain]
     * Ordered chain of modifiers.
     */
    constructor(options?: Partial<ChainModifierOptions>, ...chain: Array<DataModifier>);
    /**
     * Ordered chain of modifiers.
     */
    readonly chain: Array<DataModifier>;
    /**
     * Options of the modifier chain.
     */
    readonly options: ChainModifierOptions;
    /**
     * Adds a configured modifier to the end of the modifier chain. Please note,
     * that the modifier can be added multiple times.
     *
     * @param {DataModifier} modifier
     * Configured modifier to add.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    add(modifier: DataModifier, eventDetail?: DataEventDetail): void;
    /**
     * Clears all modifiers from the chain.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    clear(eventDetail?: DataEventDetail): void;
    /**
     * Sequentially applies all modifiers in the chain to the given table,
     * updating its `modified` property with the final result.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    modify(table: DataTable, eventDetail?: DataEventDetail): Promise<DataTable>;
    /**
     * Applies several modifications to the table.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table as a reference.
     *
     * @emits ChainDataModifier#execute
     * @emits ChainDataModifier#afterExecute
     */
    modifyTable(table: DataTable, eventDetail?: DataEventDetail): DataTable;
    /**
     * Removes a configured modifier from all positions in the modifier chain.
     *
     * @param {DataModifier} modifier
     * Configured modifier to remove.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     */
    remove(modifier: DataModifier, eventDetail?: DataEventDetail): void;
    emit<E extends Event>(e: E): void;
    on<T extends Event['type']>(type: T, callback: DataEventCallback<this, Extract<DataModifierEvent, {
        type: T;
    }>>): Function;
}
/**
 * Event information.
 */
export type Event = ChainEvent | ModifierEvent;
/**
 * Event object
 */
export interface ChainEvent extends DataEvent {
    readonly type: ('clearChain' | 'afterClearChain' | DataModifierEvent['type']);
    readonly table?: DataTable;
}
/**
 * Event information for modifier operations.
 */
export interface ModifierEvent extends DataEvent {
    readonly type: ('addModifier' | 'afterAddModifier' | 'removeModifier' | 'afterRemoveModifier');
    readonly modifier: DataModifier;
}
declare module './DataModifierType' {
    interface DataModifierTypes {
        Chain: typeof ChainModifier;
    }
}
export default ChainModifier;
