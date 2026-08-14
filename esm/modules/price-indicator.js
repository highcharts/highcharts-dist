/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/modules/price-indicator
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * (c) 2018-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * Price indicator for Highcharts Stock
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as s from"../highcharts.js";let e={};e.n=s=>{let i=s&&s.__esModule?()=>s.default:()=>s;return e.d(i,{a:i}),i},e.d=(s,i)=>{if(Array.isArray(i))for(var r=0;r<i.length;){var t=i[r++],l=i[r++];e.o(s,t)?0===l&&r++:0===l?Object.defineProperty(s,t,{enumerable:!0,value:i[r++]}):Object.defineProperty(s,t,{enumerable:!0,get:l})}else for(var t in i)e.o(i,t)&&!e.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:i[t]})},e.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e);let i=s.default;var r,t=e.n(i);let{composed:l}=t();r=t().Series,(0,i.pushUnique)(l,"PriceIndication")&&((0,i.addEvent)(r,"afterRender",function(){let s=this.options,e=s.lastVisiblePrice,r=s.lastPrice;if((e||r)&&"highcharts-navigator-series"!==s.id&&this.visible){let{points:t,xAxis:l,yAxis:o}=this,{cross:a,crosshair:c,crossLabel:h}=o,n=t.length,d=this.dataTable.rowCount,b=this.getColumn("x")[d-1],P=this.getColumn("y")[d-1]??this.getColumn("close")[d-1];if(r?.enabled&&(o.crosshair=o.options.crosshair=s.lastPrice,!this.chart.styledMode&&o.crosshair&&o.options.crosshair&&s.lastPrice&&(o.crosshair.color=o.options.crosshair.color=s.lastPrice.color||this.color),o.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete o.crossLabel,o.drawCrosshair(void 0,{x:b,y:P,plotX:l.toPixels(b,!0),plotY:o.toPixels(P,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=P),this.lastPriceLabel=o.crossLabel),e?.enabled&&n>0){o.crosshair=o.options.crosshair=(0,i.merge)({color:"transparent"},s.lastVisiblePrice),o.cross=this.lastVisiblePrice;let e=t[n-1].isInside?t[n-1]:t[n-2];this.lastVisiblePriceLabel?.destroy(),delete o.crossLabel,o.drawCrosshair(void 0,e),o.cross&&(this.lastVisiblePrice=o.cross,e&&"number"==typeof e.y&&(this.lastVisiblePrice.y=e.y)),this.lastVisiblePriceLabel=o.crossLabel}o.crosshair=o.options.crosshair=c,o.cross=a,o.crossLabel=h}}),(0,i.addEvent)(r,"hide",function(){let s=this;["lastPrice","lastPriceLabel","lastVisiblePrice","lastVisiblePriceLabel"].forEach(e=>{s[e]?.hide()})}));let o=t();export{o as default};