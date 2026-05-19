/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
/* *
 *
 *  Imports
 *
 * */
import AST from '../Core/Renderer/HTML/AST.js';
import BaseFormIcons from './BaseFormIcons.js';
import getIcon from './BaseFormUtils.js';
import { addEvent, createElement } from './Utilities.js';
/* *
 *
 *  Class
 *
 * */
var BaseForm = /** @class */ (function () {
    /* *
     *
     *  Constructor
     *
     * */
    function BaseForm(parentDiv, iconsURL) {
        this.iconsURL = iconsURL;
        this.container = this.createPopupContainer(parentDiv);
        this.closeButton = this.addCloseButton();
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create popup div container.
     *
     * @param {HTMLElement} parentDiv
     * Parent div to attach popup.
     *
     * @param  {string} className
     * Class name of the popup.
     *
     * @return {HTMLElement}
     * Popup div.
     */
    BaseForm.prototype.createPopupContainer = function (parentDiv, className) {
        if (className === void 0) { className = 'highcharts-popup highcharts-no-tooltip'; }
        return createElement('div', { className: className }, void 0, parentDiv);
    };
    /**
     * Create HTML element and attach click event to close popup.
     *
     * @param {string} className
     * Class name of the close button.
     *
     * @return {HTMLElement}
     * Close button.
     */
    BaseForm.prototype.addCloseButton = function (className) {
        var _this = this;
        if (className === void 0) { className = 'highcharts-popup-close'; }
        // Create close popup button.
        var closeButton = createElement('button', { className: className }, void 0, this.container);
        createElement('span', {
            className: 'highcharts-icon'
        }, {
            backgroundImage: getIcon('close.svg', this.iconsURL, BaseFormIcons)
        }, closeButton);
        ['click', 'touchstart'].forEach(function (eventName) {
            addEvent(closeButton, eventName, _this.closeButtonEvents.bind(_this));
        });
        // Close popup when press ESC
        addEvent(document, 'keydown', function (event) {
            if (event.code === 'Escape') {
                _this.closeButtonEvents();
            }
        });
        return closeButton;
    };
    /**
     * Close button events.
     * @return {void}
     */
    BaseForm.prototype.closeButtonEvents = function () {
        this.closePopup();
    };
    /**
     * Reset content of the current popup and show.
     *
     * @param {string} toolbarClass
     * Class name of the toolbar which styles should be reset.
     */
    BaseForm.prototype.showPopup = function (toolbarClass) {
        if (toolbarClass === void 0) { toolbarClass = 'highcharts-annotation-toolbar'; }
        var popupDiv = this.container, popupCloseButton = this.closeButton;
        this.type = void 0;
        // Reset content.
        popupDiv.innerHTML = AST.emptyHTML;
        // Reset toolbar styles if exists.
        if (popupDiv.className.indexOf(toolbarClass) >= 0) {
            popupDiv.classList.remove(toolbarClass);
            // Reset toolbar inline styles
            popupDiv.removeAttribute('style');
        }
        // Add close button.
        popupDiv.appendChild(popupCloseButton);
        popupDiv.style.display = 'block';
        popupDiv.style.height = '';
    };
    /**
     * Hide popup.
     */
    BaseForm.prototype.closePopup = function () {
        this.container.style.display = 'none';
    };
    return BaseForm;
}());
/* *
 *
 *  Default Export
 *
 * */
export default BaseForm;
