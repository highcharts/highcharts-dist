# Highcharts

**The only charting library you need.** Highcharts is a pure JavaScript/TypeScript charting library, built from scratch that makes it easy to create responsive, interactive, and accessible charts for web and mobile platforms.

Trusted by 80 out of the world's 100 largest companies, Highcharts offers a comprehensive suite including **Highcharts Core**, **Stock** (financial charting), **Maps** (geo maps), and **Gantt**.

Also note the related packages for [Highcharts Dashboards](https://github.com/highcharts/dashboards-dist), [Highcharts Grid Lite](https://github.com/highcharts/grid-lite-dist), and [Highcharts Grid Pro](https://github.com/highcharts/grid-pro-dist).

**Note:**
This package is intended for supporting client-side JavaScript charting through bundlers like Parcel, Vite or Webpack, and development environments like Babel or TypeScript. If you intend to generate static charts on the server side, use the [Highcharts node.js Export Server](https://www.npmjs.com/package/highcharts-export-server) instead.

## Links
* Official website: [www.highcharts.com](https://www.highcharts.com)
* Demos: [www.highcharts.com/demo](https://www.highcharts.com/demo)
* Download: [www.highcharts.com/download](https://www.highcharts.com/download)
* License: [www.highcharts.com/license](https://www.highcharts.com/license)
* Documentation: [www.highcharts.com/docs](https://www.highcharts.com/docs/index)
* Support: [www.highcharts.com/support](https://www.highcharts.com/support)
* Issues: [Working repo](https://github.com/highcharts/highcharts/issues)

## Why Highcharts?

### Lightweight & Performant
Despite the comprehensive feature set, Highcharts has a **small core library** optimized for performance, with **zero dependencies**. With **ES6 module support** and **tree shaking**, you only load what you need, keeping your bundle size minimal and your applications fast. WebGL/WebGPU features boost the rendering of millions of data points if necessary.

**Note on package size:** The npm package includes all additional modules, typescript typing, various module loading options, and additional packages. However, the actual library you bundle is lightweight. We always strive to keep the core `highcharts.js` minified & gzipped at <100kB, with zero dependencies.

### Comprehensive Chart Library
From area to x-range, **all major chart types and more** are included. Whether you need basic visualizations or complex financial charts, we've got you covered.

### Accessibility First
Built-in accessibility features like **keyboard navigation, screen reader support, and audio charts** help you reach the widest audience possible. We actively contribute to research in the field of accessible data visualization, and strive to make data more accessible to all.

### Highly Customizable
Choose whether to style your charts via code configuration or CSS. Any visual element can be customized, and let you create on-brand visualizations that render crisp and clear at any resolution. Customizability also goes beyond the visual, allowing deep nested interactions if your use-case requires it. 

### Vibrant Community
We love to learn how you are using Highcharts, and what you would like to see from us in the future. Join our significant developer community on [GitHub](https://github.com/highcharts/highcharts), [Stack Overflow](https://stackoverflow.com/tags/highcharts/), [Discord](https://discord.com/invite/xHxxcyyy6K), and [Highcharts Forums](https://www.highcharts.com/forum/).

### Works with Your Stack
Highcharts is front-end tech that works with any back-end database or server stack, and is available for popular frameworks and technologies including React, Angular, Vue, Svelte, Node.js, Flutter, and Python.

## License
SEE LICENSE IN [LICENSE.md](https://github.com/highcharts/highcharts-dist/blob/master/LICENSE.md).

## Installation

There are many ways to use Highcharts. Below are some basic snippets, and our [Installation docs](http://www.highcharts.com/docs/getting-started/installation) can be consulted for more details.

### Install from npm
```bash
npm install --save highcharts
```

For server-side chart generation, use the [Highcharts Export Server](https://www.npmjs.com/package/highcharts-export-server) instead.

#### Nightly builds
```bash
npm install --save highcharts/highcharts-dist#nightly
```
**Note:** Nightly builds are not recommended for production as they may contain bugs and are not considered stable.

### Install with PNPM
```bash
pnpm add highcharts
```

### Use our CDN
```html
<script src="https://code.highcharts.com/highcharts.js"></script>
```
Browse all available files at [code.highcharts.com](https://code.highcharts.com).

**Note:** The CDN is not recommended for at-scale production, and may be rate limited to maintain 
availability according to our fair usage policy.

## Usage

Here are a few quick start samples. Visit our [Getting started](https://www.highcharts.com/docs/index) tutorials to learn more.

### Load as ES6 module (Recommended for Tree Shaking)
ES6 modules allow tree shaking to minimize your bundle size by including only the features you use.

#### With TypeScript
```ts
import Highcharts from 'highcharts/esm/highcharts.js';
// Or load Stock, Maps, or Gantt
// import Highcharts from 'highcharts/esm/highstock.js';

// Load additional modules as needed
import 'highcharts/esm/modules/exporting.js';

// Create your chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

#### With Babel
```js
import Highcharts from 'highcharts/esm/highcharts';
// Or load Stock, Maps, or Gantt
// import Highcharts from 'highcharts/esm/highstock';

// Load additional modules as needed
import 'highcharts/esm/modules/exporting';

// Create your chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

### Load as CommonJS module
```js
// Load Highcharts
var Highcharts = require('highcharts');
// Or load Stock, Maps, or Gantt
// var Highcharts = require('highcharts/highstock');

// Load and initialize modules
require('highcharts/modules/exporting')(Highcharts);

// Create your chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

---

Built with passion by [Highsoft](https://www.highcharts.com/about).
