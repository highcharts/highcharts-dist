/* *
 *
 *  (c) 2009 - 2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sebastian Bochan
 *  - Wojciech Chmiel
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *
 * */
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AST from '../../Core/Renderer/HTML/AST.js';
import Component from './Component.js';
import U from '../../Core/Utilities.js';
const { merge, diffObjects } = U;
// TODO: This may affect the AST parsing in Highcharts
// should look into adding these as options if possible
// Needs to go in a composition in the Highcharts plugin
AST.allowedTags = [
    ...AST.allowedTags,
    'option',
    'select',
    'label',
    'input',
    'textarea'
];
AST.allowedAttributes = [
    ...AST.allowedAttributes,
    'for', 'value', 'checked', 'src', 'name', 'selected'
];
AST.allowedReferences = [...AST.allowedReferences, 'data:image/'];
/* *
 *
 *  Class
 *
 * */
/**
 *
 * Class that represents a HTML component.
 *
 */
class HTMLComponent extends Component {
    /* *
     *
     *  Static functions
     *
     * */
    /**
     * Creates component from JSON.
     *
     * @param json
     * Set of component options, used for creating the HTML component.
     *
     * @param cell
     * Instance of cell, where component is attached.
     *
     * @returns
     * HTML component based on config from JSON.
     *
     * @internal
     */
    static fromJSON(json, cell) {
        const options = json.options;
        const elements = (json.elements ?
            json.elements.map((el) => JSON.parse(el)) :
            []);
        // const connector = (
        //     json.connector ? DataJSON.fromJSON(json.connector) : void 0
        // );
        const component = new HTMLComponent(cell, merge(options, {
            elements
            // connector: (
            //   connector instanceof DataConnector ? connector : void 0
            // )
        }));
        component.emit({
            type: 'fromJSON',
            json
        });
        return component;
    }
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * Creates a HTML component in the cell.
     *
     * @param options
     * The options for the component.
     */
    constructor(cell, options) {
        options = merge(HTMLComponent.defaultOptions, options);
        super(cell, options);
        this.options = options;
        this.type = 'HTML';
        this.elements = [];
        this.sync = new Component.Sync(this, this.syncHandlers);
    }
    /* *
     *
     *  Functions
     *
     * */
    /** @internal */
    load() {
        const _super = Object.create(null, {
            load: { get: () => super.load }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.emit({
                type: 'load'
            });
            yield _super.load.call(this);
            const options = this.options;
            let isError = false;
            if (options.elements) {
                this.elements = options.elements.map(function (element) {
                    if (typeof element === 'string') {
                        return new AST(element).nodes[0];
                    }
                    if (!element.textContent &&
                        !element.tagName &&
                        element.attributes) {
                        isError = true;
                    }
                    return element;
                });
            }
            this.constructTree();
            this.emit({ type: 'afterLoad' });
            if (isError) {
                throw new Error('Missing tagName param in component: ' +
                    options.cell);
            }
            return this;
        });
    }
    render() {
        super.render();
        this.constructTree();
        this.emit({ type: 'afterRender' });
        return this;
    }
    resize(width, height) {
        super.resize(width, height);
        return this;
    }
    /**
     * Handles updating via options.
     * @param options
     * The options to apply.
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.update.call(this, options);
            this.emit({ type: 'afterUpdate' });
        });
    }
    /**
     * TODO: Could probably use the serialize function moved on
     * the exportdata branch
     *
     * @internal
     */
    constructTree() {
        // Remove old tree if rerendering.
        while (this.contentElement.firstChild) {
            this.contentElement.firstChild.remove();
        }
        const parser = new AST(this.elements);
        parser.addToDOM(this.contentElement);
    }
    /**
     * Converts the class instance to a class JSON.
     *
     * @returns
     * Class JSON of this Component instance.
     *
     * @internal
     */
    toJSON() {
        const elements = (this.options.elements || [])
            .map((el) => JSON.stringify(el));
        const json = merge(super.toJSON(), {
            elements,
            options: this.options
        });
        this.emit({
            type: 'toJSON',
            json
        });
        return json;
    }
    /**
     * Get the HTML component's options.
     * @returns
     * The JSON of HTML component's options.
     *
     * @internal
     *
     */
    getOptions() {
        return Object.assign(Object.assign({}, diffObjects(this.options, HTMLComponent.defaultOptions)), { type: 'HTML' });
    }
    /**
     * @internal
     */
    onTableChanged(e) {
        var _a;
        if (((_a = e.detail) === null || _a === void 0 ? void 0 : _a.sender) !== this.id) {
            this.render();
        }
    }
}
/* *
 *
 *  Static properties
 *
 * */
/**
 * Default options of the HTML component.
 */
HTMLComponent.defaultOptions = merge(Component.defaultOptions, {
    type: 'HTML',
    elements: []
});
/* *
 *
 *  Default export
 *
 * */
export default HTMLComponent;
