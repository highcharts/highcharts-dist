/**
 * Highcharts JS v13.0.1 (2026-08-17)
 * @module highcharts/modules/no-data-to-display
 * @requires highcharts
 *
 * Plugin for displaying a message when there is no data visible in chart.
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";let e={};e.n=t=>{let a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a:a}),a},e.d=(t,a)=>{if(Array.isArray(a))for(var o=0;o<a.length;){var n=a[o++],r=a[o++];e.o(t,n)?0===r&&o++:0===r?Object.defineProperty(t,n,{enumerable:!0,value:a[o++]}):Object.defineProperty(t,n,{enumerable:!0,get:r})}else for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let a=t.default;var o=e.n(a);let n=t.default.AST;var r=e.n(n);let i={lang:{noData:"No data to display"},noData:{attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"0.8em",color:"var(--highcharts-neutral-color-60)"}}};function l(){let t=this.series||[],e=t.length;for(;e--;)if(t[e].hasData()&&!t[e].options.isInternal)return!0;return this.loadingShown}function s(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())}function d(t){let e=this.options,o=t||e&&e.lang.noData||"",n=e&&(e.noData||{});this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(o,0,0,void 0,void 0,void 0,n.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(r().filterUserAttributes(n.attr||{})).css(n.style||{}),this.noDataLabel.align((0,a.extend)(this.noDataLabel.getBBox(),n.position||{}),!1,"plotBox"))}function h(){this.hasData()?this.hideNoData():this.showNoData()}let f=o();({compose:function(t,e){let o=t.prototype;o.showNoData||(o.hasData=l,o.hideNoData=s,o.showNoData=d,(0,a.addEvent)(t,"render",h),(0,a.merge)(!0,e,i))}}).compose(f.Chart,f.defaultOptions);let c=o();export{c as default};