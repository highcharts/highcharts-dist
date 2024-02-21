/* *
 *
 *  Popup generator for Stock tools
 *
 *  (c) 2009-2024 Sebastian Bochan
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import H from '../../../Core/Globals.js';
const { doc, isFirefox } = H;
import U from '../../../Core/Utilities.js';
const { createElement, isArray, isObject, objectEach, pick, stableSort } = U;
/* *
 *
 *  Functions
 *
 * */
/**
 * Create annotation simple form.
 * It contains fields with param names.
 * @private
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {Object} options
 * Options
 * @param {Function} callback
 * On click callback
 * @param {boolean} [isInit]
 * If it is a form declared for init annotation
 */
function addForm(chart, options, callback, isInit) {
    if (!chart) {
        return;
    }
    const popupDiv = this.container, lang = this.lang;
    // create title of annotations
    let lhsCol = createElement('h2', {
        className: 'highcharts-popup-main-title'
    }, void 0, popupDiv);
    lhsCol.appendChild(doc.createTextNode(lang[options.langKey] || options.langKey || ''));
    // left column
    lhsCol = createElement('div', {
        className: ('highcharts-popup-lhs-col highcharts-popup-lhs-full')
    }, void 0, popupDiv);
    const bottomRow = createElement('div', {
        className: 'highcharts-popup-bottom-row'
    }, void 0, popupDiv);
    addFormFields.call(this, lhsCol, chart, '', options, [], true);
    this.addButton(bottomRow, isInit ?
        (lang.addButton || 'Add') :
        (lang.saveButton || 'Save'), isInit ? 'add' : 'save', popupDiv, callback);
}
/**
 * Create annotation simple form. It contains two buttons
 * (edit / remove) and text label.
 * @private
 * @param {Highcharts.Chart} - chart
 * @param {Highcharts.AnnotationsOptions} - options
 * @param {Function} - on click callback
 */
function addToolbar(chart, options, callback) {
    const lang = this.lang, popupDiv = this.container, showForm = this.showForm, toolbarClass = 'highcharts-annotation-toolbar';
    // set small size
    if (popupDiv.className.indexOf(toolbarClass) === -1) {
        popupDiv.className += ' ' + toolbarClass + ' highcharts-no-mousewheel';
    }
    // set position
    if (chart) {
        popupDiv.style.top = chart.plotTop + 10 + 'px';
    }
    // create label
    createElement('span', void 0, void 0, popupDiv).appendChild(doc.createTextNode(pick(
    // Advanced annotations:
    lang[options.langKey] || options.langKey, 
    // Basic shapes:
    options.shapes && options.shapes[0].type, '')));
    // add buttons
    let button = this.addButton(popupDiv, lang.removeButton || 'Remove', 'remove', popupDiv, callback);
    button.className += ' highcharts-annotation-remove-button';
    button.style['background-image'] = 'url(' +
        this.iconsURL + 'destroy.svg)';
    button = this.addButton(popupDiv, lang.editButton || 'Edit', 'edit', popupDiv, () => {
        showForm.call(this, 'annotation-edit', chart, options, callback);
    });
    button.className += ' highcharts-annotation-edit-button';
    button.style['background-image'] = 'url(' +
        this.iconsURL + 'edit.svg)';
}
/**
 * Create annotation's form fields.
 * @private
 * @param {Highcharts.HTMLDOMElement} parentDiv
 * Div where inputs are placed
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {string} parentNode
 * Name of parent to create chain of names
 * @param {Highcharts.AnnotationsOptions} options
 * Options
 * @param {Array<unknown>} storage
 * Array where all items are stored
 * @param {boolean} [isRoot]
 * Recursive flag for root
 */
function addFormFields(parentDiv, chart, parentNode, options, storage, isRoot) {
    if (!chart) {
        return;
    }
    const addInput = this.addInput, lang = this.lang;
    let parentFullName, titleName;
    objectEach(options, (value, option) => {
        // create name like params.styles.fontSize
        parentFullName = parentNode !== '' ? parentNode + '.' + option : option;
        if (isObject(value)) {
            if (
            // value is object of options
            !isArray(value) ||
                // array of objects with params. i.e labels in Fibonacci
                (isArray(value) && isObject(value[0]))) {
                titleName = lang[option] || option;
                if (!titleName.match(/\d/g)) {
                    storage.push([
                        true,
                        titleName,
                        parentDiv
                    ]);
                }
                addFormFields.call(this, parentDiv, chart, parentFullName, value, storage, false);
            }
            else {
                storage.push([
                    this,
                    parentFullName,
                    'annotation',
                    parentDiv,
                    value
                ]);
            }
        }
    });
    if (isRoot) {
        stableSort(storage, (a) => (a[1].match(/format/g) ? -1 : 1));
        if (isFirefox) {
            storage.reverse(); // (#14691)
        }
        storage.forEach((genInput) => {
            if (genInput[0] === true) {
                createElement('span', {
                    className: 'highcharts-annotation-title'
                }, void 0, genInput[2]).appendChild(doc.createTextNode(genInput[1]));
            }
            else {
                genInput[4] = {
                    value: genInput[4][0],
                    type: genInput[4][1]
                };
                addInput.apply(genInput[0], genInput.splice(1));
            }
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
const PopupAnnotations = {
    addForm,
    addToolbar
};
export default PopupAnnotations;
