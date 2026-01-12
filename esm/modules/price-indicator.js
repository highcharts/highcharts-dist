/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/price-indicator
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as s from"../highcharts.js";var i={};i.n=s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return i.d(e,{a:e}),e},i.d=(s,e)=>{for(var r in e)i.o(e,r)&&!i.o(s,r)&&Object.defineProperty(s,r,{enumerable:!0,get:e[r]})},i.o=(s,i)=>Object.prototype.hasOwnProperty.call(s,i);let e=s.default;var r=i.n(e);let{composed:t}=r(),{addEvent:o,merge:l,pushUnique:a}=r();function c(){let s=this;["lastPrice","lastPriceLabel","lastVisiblePrice","lastVisiblePriceLabel"].forEach(i=>{s[i]?.hide()})}function h(){let s=this.options,i=s.lastVisiblePrice,e=s.lastPrice;if((i||e)&&"highcharts-navigator-series"!==s.id&&this.visible){let r=this.xAxis,t=this.yAxis,o=t.crosshair,a=t.cross,c=t.crossLabel,h=this.points,n=h.length,b=this.dataTable.rowCount,d=this.getColumn("x")[b-1],P=this.getColumn("y")[b-1]??this.getColumn("close")[b-1];if(e&&e.enabled&&(t.crosshair=t.options.crosshair=s.lastPrice,!this.chart.styledMode&&t.crosshair&&t.options.crosshair&&s.lastPrice&&(t.crosshair.color=t.options.crosshair.color=s.lastPrice.color||this.color),t.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete t.crossLabel,t.drawCrosshair(null,{x:d,y:P,plotX:r.toPixels(d,!0),plotY:t.toPixels(P,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=P),this.lastPriceLabel=t.crossLabel),i&&i.enabled&&n>0){t.crosshair=t.options.crosshair=l({color:"transparent"},s.lastVisiblePrice),t.cross=this.lastVisiblePrice;let i=h[n-1].isInside?h[n-1]:h[n-2];this.lastVisiblePriceLabel&&this.lastVisiblePriceLabel.destroy(),delete t.crossLabel,t.drawCrosshair(null,i),t.cross&&(this.lastVisiblePrice=t.cross,i&&"number"==typeof i.y&&(this.lastVisiblePrice.y=i.y)),this.lastVisiblePriceLabel=t.crossLabel}t.crosshair=t.options.crosshair=o,t.cross=a,t.crossLabel=c}}({compose:function(s){a(t,"PriceIndication")&&(o(s,"afterRender",h),o(s,"hide",c))}}).compose(r().Series);let n=r();export{n as default};