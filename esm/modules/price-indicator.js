/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as s from"../highcharts.js";let e={};e.n=s=>{let i=s&&s.__esModule?()=>s.default:()=>s;return e.d(i,{a:i}),i},e.d=(s,i)=>{if(Array.isArray(i))for(var r=0;r<i.length;){var t=i[r++],a=i[r++];e.o(s,t)?0===a&&r++:0===a?Object.defineProperty(s,t,{enumerable:!0,value:i[r++]}):Object.defineProperty(s,t,{enumerable:!0,get:a})}else for(var t in i)e.o(i,t)&&!e.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:i[t]})},e.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e);let i=s.default;var r,t=e.n(i);let{composed:a}=t();r=t().Series,(0,i.pushUnique)(a,"PriceIndication")&&((0,i.addEvent)(r,"afterRender",function(){let s=this.options,e=s.lastVisiblePrice,r=s.lastPrice;if((e||r)&&"highcharts-navigator-series"!==s.id&&this.visible){let{points:t,xAxis:a,yAxis:l}=this,{cross:o,crosshair:c,crossLabel:h}=l,n=t.length,d=this.dataTable.rowCount,b=this.getColumn("x")[d-1],P=this.getColumn("y")[d-1]??this.getColumn("close")[d-1],p=this.dataModify?.modifyValue(P)??P;if(r?.enabled&&(l.crosshair=l.options.crosshair=s.lastPrice,!this.chart.styledMode&&l.crosshair&&l.options.crosshair&&s.lastPrice&&(l.crosshair.color=l.options.crosshair.color=s.lastPrice.color||this.color),l.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete l.crossLabel,l.drawCrosshair(void 0,{x:b,y:P,series:this,plotX:(0,i.clamp)(a.toPixels(b,!0),0,a.len),plotY:l.toPixels(p,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=P),this.lastPriceLabel=l.crossLabel),e?.enabled&&n>0){l.crosshair=l.options.crosshair=(0,i.merge)({color:"transparent"},s.lastVisiblePrice),l.cross=this.lastVisiblePrice;let e=t[n-1].isInside?t[n-1]:t[n-2];this.lastVisiblePriceLabel?.destroy(),delete l.crossLabel,l.drawCrosshair(void 0,e),l.cross&&(this.lastVisiblePrice=l.cross,e&&"number"==typeof e.y&&(this.lastVisiblePrice.y=e.y)),this.lastVisiblePriceLabel=l.crossLabel}l.crosshair=l.options.crosshair=c,l.cross=o,l.crossLabel=h}}),(0,i.addEvent)(r,"hide",function(){let s=this;["lastPrice","lastPriceLabel","lastVisiblePrice","lastVisiblePriceLabel"].forEach(e=>{s[e]?.hide()})}));let l=t();export{l as default};