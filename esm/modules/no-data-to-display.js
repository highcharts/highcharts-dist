/**
 * Highcharts JS v13.0.0 (2026-06-11)
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
 */import*as t from"../highcharts.js";var a={};a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a);let e=t.default;var o=a.n(e);let n=t.default.AST;var i=a.n(n);let s={lang:{noData:"No data to display"},noData:{attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"0.8em",color:"var(--highcharts-neutral-color-60)"}}};function r(){let t=this.series||[],a=t.length;for(;a--;)if(t[a].hasData()&&!t[a].options.isInternal)return!0;return this.loadingShown}function l(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())}function d(t){let a=this.options,o=t||a&&a.lang.noData||"",n=a&&(a.noData||{});this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(o,0,0,void 0,void 0,void 0,n.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(i().filterUserAttributes(n.attr||{})).css(n.style||{}),this.noDataLabel.align((0,e.extend)(this.noDataLabel.getBBox(),n.position||{}),!1,"plotBox"))}function h(){this.hasData()?this.hideNoData():this.showNoData()}let D=o();({compose:function(t,a){let o=t.prototype;o.showNoData||(o.hasData=r,o.hideNoData=l,o.showNoData=d,(0,e.addEvent)(t,"render",h),(0,e.merge)(!0,a,s))}}).compose(D.Chart,D.defaultOptions);let c=o();export{c as default};