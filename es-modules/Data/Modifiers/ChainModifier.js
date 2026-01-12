/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Dawid Dragula
 *
 * */
'use strict';
import DataModifier from './DataModifier.js';
import U from '../../Core/Utilities.js';
const { addEvent, fireEvent, merge } = U;
/* *
 *
 *  Class
 *
 * */
/**
 * Modifies a table with the help of modifiers in an ordered chain.
 *
 */
class ChainModifier extends DataModifier {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Constructs an instance of the modifier chain.
     *
     * @param {Partial<ChainModifier.Options>} [options]
     * Options to configure the modifier chain.
     *
     * @param {...DataModifier} [chain]
     * Ordered chain of modifiers.
     */
    constructor(options, ...chain) {
        super();
        this.chain = chain;
        this.options = merge(ChainModifier.defaultOptions, options);
        const optionsChain = this.options.chain || [];
        for (let i = 0, iEnd = optionsChain.length, modifierOptions, ModifierClass; i < iEnd; ++i) {
            modifierOptions = optionsChain[i];
            if (!modifierOptions.type) {
                continue;
            }
            ModifierClass = DataModifier.types[modifierOptions.type];
            if (ModifierClass) {
                chain.push(new ModifierClass(modifierOptions));
            }
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds a configured modifier to the end of the modifier chain. Please note,
     * that the modifier can be added multiple times.
     *
     * @param {DataModifier} modifier
     * Configured modifier to add.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    add(modifier, eventDetail) {
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
        this.chain.push(modifier);
        this.emit({
            type: 'addModifier',
            detail: eventDetail,
            modifier
        });
    }
    /**
     * Clears all modifiers from the chain.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    clear(eventDetail) {
        this.emit({
            type: 'clearChain',
            detail: eventDetail
        });
        this.chain.length = 0;
        this.emit({
            type: 'afterClearChain',
            detail: eventDetail
        });
    }
    /**
     * Sequentially applies all modifiers in the chain to the given table,
     * updating its `modified` property with the final result.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    async modify(table, eventDetail) {
        const modifiers = (this.options.reverse ?
            this.chain.slice().reverse() :
            this.chain.slice());
        if (!table.modified) {
            table.modified = table.clone(false, eventDetail);
        }
        let modified = table;
        for (let i = 0, iEnd = modifiers.length; i < iEnd; ++i) {
            try {
                await modifiers[i].modify(modified, eventDetail);
            }
            catch (error) {
                this.emit({
                    type: 'error',
                    detail: eventDetail,
                    table
                });
                throw error;
            }
            modified = modified.getModified();
        }
        table.modified = modified;
        return table;
    }
    /**
     * Applies several modifications to the table.
     *
     * *Note:* The `modified` property reference of the table gets replaced.
     *
     * @param {DataTable} table
     * Table to modify.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {DataTable}
     * Table as a reference.
     *
     * @emits ChainDataModifier#execute
     * @emits ChainDataModifier#afterExecute
     */
    modifyTable(table, eventDetail) {
        const chain = this;
        chain.emit({
            type: 'modify',
            detail: eventDetail,
            table
        });
        const modifiers = (chain.options.reverse ?
            chain.chain.reverse() :
            chain.chain.slice());
        let modified = table.getModified();
        for (let i = 0, iEnd = modifiers.length, modifier; i < iEnd; ++i) {
            modifier = modifiers[i];
            modified =
                modifier.modifyTable(modified, eventDetail).getModified();
        }
        table.modified = modified;
        chain.emit({
            type: 'afterModify',
            detail: eventDetail,
            table
        });
        return table;
    }
    /**
     * Removes a configured modifier from all positions in the modifier chain.
     *
     * @param {DataModifier} modifier
     * Configured modifier to remove.
     *
     * @param {DataEvent.Detail} [eventDetail]
     * Custom information for pending events.
     */
    remove(modifier, eventDetail) {
        const modifiers = this.chain;
        this.emit({
            type: 'removeModifier',
            detail: eventDetail,
            modifier
        });
        modifiers.splice(modifiers.indexOf(modifier), 1);
        this.emit({
            type: 'afterRemoveModifier',
            detail: eventDetail,
            modifier
        });
    }
    emit(e) {
        fireEvent(this, e.type, e);
    }
    on(type, callback) {
        return addEvent(this, type, callback);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Default option for the ordered modifier chain.
 */
ChainModifier.defaultOptions = {
    type: 'Chain'
};
DataModifier.registerType('Chain', ChainModifier);
/* *
 *
 *  Default Export
 *
 * */
export default ChainModifier;
