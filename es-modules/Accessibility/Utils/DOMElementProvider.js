/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Class that can keep track of elements added to DOM and clean them up on
 *  destroy.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
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
 * Class that can keep track of elements added to DOM and clean them up on
 * destroy.
 *
 * @internal
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
     *
     * @internal
     */
    createElement() {
        const el = doc.createElement.apply(doc, arguments);
        this.elements.push(el);
        return el;
    }
    /**
     * Destroy created element, removing it from the DOM.
     *
     * @internal
     */
    removeElement(element) {
        removeElement(element);
        this.elements.splice(this.elements.indexOf(element), 1);
    }
    /**
     * Destroy all created elements, removing them from the DOM.
     *
     * @internal
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
/** @internal */
export default DOMElementProvider;
