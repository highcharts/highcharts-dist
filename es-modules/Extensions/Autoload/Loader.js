/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import G from '../../Core/Globals.js';
import mapping from './DependencyMapping.js';
import { pushUnique, splat } from '../../Shared/Utilities.js';
const H = G;
const addedFiles = [];
const loaded = [];
// Default to root and extension that supports ESM imports.
let root = './', 
// In compiled scripts, this gets replaced with .js by the scripts-compile
// task.
extension = '.src.js';
const addStyleSheets = (options, files) => {
    // Styled mode
    if (options.chart?.styledMode) {
        pushUnique(files, 'css/highcharts.css');
    }
    // Stock Tools
    if (options.stockTools) {
        pushUnique(files, 'css/stocktools/gui.css');
        pushUnique(files, 'css/annotations/popup.css');
    }
};
const setRootFromURL = (url) => {
    const regex = /\/highcharts-autoload(\.src\.js|\.js)$/, match = url.match(regex);
    if (match) {
        root = url.replace(regex, '/');
        extension = match[1];
        return root;
    }
};
const guessRoot = () => {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (setRootFromURL(scripts[i].src)) {
            return;
        }
    }
};
// Override the factories to load script files on demand
['chart', 'ganttChart', 'mapChart', 'stockChart'].forEach((factory) => {
    H[factory] = async function (container, options, callback) {
        guessRoot();
        // Load the required files
        const files = Loader.getFiles(options);
        if (factory === 'stockChart') {
            files.unshift('modules/stock');
        }
        else if (factory === 'ganttChart') {
            files.unshift('modules/gantt');
        }
        else if (factory === 'mapChart') {
            files.unshift('modules/map');
        }
        for (const file of files) {
            await loadFile(file);
        }
        const constructorName = {
            chart: 'Chart',
            ganttChart: 'GanttChart',
            mapChart: 'MapChart',
            stockChart: 'StockChart'
        }[factory];
        return new H[constructorName](container, options, callback);
    };
});
const loadFile = async (file) => {
    if (loaded.includes(file)) {
        return;
    }
    const isCss = file.endsWith('.css');
    // Relative root => ES modules
    if (root === '' || root.charAt(0) === '.') {
        try {
            if (!isCss) {
                await import(
                // eslint-disable-next-line capitalized-comments
                /* webpackIgnore: true */ `${root}${file}${extension}`);
                pushUnique(loaded, file);
            }
        }
        catch (e) {
            /* eslint-disable-next-line no-console */
            console.error(e);
        }
        return;
    }
    return new Promise((resolve, reject) => {
        const onload = () => {
            pushUnique(loaded, file);
            resolve(void 0);
        };
        const el = document.createElement(isCss ? 'link' : 'script');
        if (isCss) {
            el.rel = 'stylesheet';
            el.href = `${root}${file}`;
        }
        else {
            el.src = `${root}${file}${extension}`;
        }
        el.onload = onload;
        el.onerror = reject;
        document.head.appendChild(el);
    });
};
/**
 * The Loader class for autoloading of Highcharts modules. This class is part of
 * the `highcharts-autoload.js` bundle, and is used for dynamically loading
 * Highcharts modules on demand based on the chart configuration options.
 *
 * The Loader analyzes the chart options for features that require additional
 * modules. The Loader will load the required modules asynchronously before
 * instantiating the chart.
 *
 * For styled mode and Stock Tools, the Loader also adds the required CSS files.
 * An exception is when using ESM modules, where you need to define the CSS in
 * link tags.
 *
 * No extra configuration is required to use the Loader, the static class
 * methods below are for advanced use cases.
 *
 * @example
 * const chart = await Highcharts.chart({
 *     chart: {
 *         type: 'arearange'
 *     },
 *     series: [[0, 2], [4, 3]]
 * }, true) ;
 *
 * @sample highcharts/global/autoload-esm ESM setup with bubble chart and
 *         modules
 * @sample highcharts/global/autoload UMD setup with stock chart and modules
 *
 * @class
 * @name Highcharts.Loader
 */
class Loader {
}
/**
 * Given a Highcharts configuration object, this function will return an
 * array of the required script files. Can be used for preloading files
 * before instanciating the chart.
 *
 * @function Highcharts.Loader#getFiles
 *
 * @param {Partial<Options>} options The Highcharts configuration object.
 * @return {Array<string>} An array of file names.
 */
Loader.getFiles = (options) => {
    const files = addedFiles.slice();
    const recurse = (opts, path = []) => {
        Object.entries(opts).forEach(([key, value]) => {
            if (path.length === 1 && path[0] === 'series') {
                key = value.type || options.chart?.type || 'line';
            }
            const fullKey = path.concat(key).join('.'), 
            // Pick up properties that are set on series items, like
            // `dragDrop` or `label`
            seriesKey = fullKey.replace(/^series\.[a-zA-Z]+/, 'plotOptions.series'), fullKeys = [fullKey];
            // Add special cases
            if (seriesKey !== fullKey) {
                fullKeys.push(seriesKey);
            }
            fullKeys.forEach((fullKey) => {
                if (fullKey in mapping) {
                    mapping[fullKey].forEach((file) => pushUnique(files, file));
                }
            });
            if (value && typeof value === 'object' && key !== 'data') {
                path.push(key);
                recurse(value, path);
                path.pop();
            }
        });
    };
    recurse(options);
    // Advanced annotations
    if (options.annotations) {
        splat(options.annotations).forEach((annotation) => {
            ((annotation.type && (mapping[`annotations.${annotation.type}`] ||
                mapping['annotations.type'])) || []).forEach((file) => pushUnique(files, file));
        });
    }
    addStyleSheets(options, files);
    return Array.from(files);
};
/**
 * Set the root URL and extension for script files. By default, the root and
 * extension are guessed from the script tag that loads
 * `highcharts-autoload.js`, or from the current script if running in ESM
 * mode.
 *
 * @function Highcharts.Loader#setRoot
 *
 * @param {string} [userRoot]
 *        The root URL for script files. When loading from
 *        `code.highcharts.com`, this defaults to
 *        `https://code.highcharts.com/`.
 * @param {string} [userExtension]
 *        The extension for script files. This defaults to `.js` when
 *        invoked from `highcharts-autoload.js`, and `.src.js` when invoked
 *        from `highcharts-autoload.src.js`.
 */
Loader.setRoot = (userRoot = root, userExtension = extension) => {
    root = userRoot;
    extension = userExtension;
};
/**
 * Add script files to the list of modules to load. This is useful for
 * dynamically loading modules that have no reference in the options
 * structure.
 *
 * @example
 * // Load the accessibility and exporting modules without having to set
 * // `accessibility.enabled` and `exporting.enabled` in the chart options.
 * Highcharts.Loader.use(['modules/accessibility', 'modules/exporting']);
 *
 * @function Highcharts.Loader#use
 *
 * @param {Array<string>} files An array of files to add.
 */
Loader.use = (files) => {
    files.forEach((file) => pushUnique(addedFiles, file));
};
export default Loader;
