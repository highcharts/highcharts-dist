/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Class that can keep track of elements added to DOM and clean them up on
 *  destroy.
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */
'use strict';
import H from '../../Core/Globals.js';
const { doc } = H;
import HU from './HTMLUtilities.js';
const { removeElement } = HU;
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 */
class DOMElementProvider {
    /* *
     *
     *  Constructor
     *
     * */
    constructor() {
        this.elements = [];
    }
    /**
     * Create an element and keep track of it for later removal.
     * Same args as document.createElement
     * @private
     */
    createElement() {
        const el = doc.createElement.apply(doc, arguments);
        this.elements.push(el);
        return el;
    }
    /**
     * Destroy created element, removing it from the DOM.
     * @private
     */
    removeElement(element) {
        removeElement(element);
        this.elements.splice(this.elements.indexOf(element), 1);
    }
    /**
     * Destroy all created elements, removing them from the DOM.
     * @private
     */
    destroyCreatedElements() {
        this.elements.forEach(function (element) {
            removeElement(element);
        });
        this.elements = [];
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default DOMElementProvider;
