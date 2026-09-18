/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as s from"../highcharts.js";let i={};i.n=s=>{let e=s&&s.__esModule?()=>s.default:()=>s;return i.d(e,{a:e}),e},i.d=(s,e)=>{for(var t in e)i.o(e,t)&&!i.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},i.o=(s,i)=>Object.prototype.hasOwnProperty.call(s,i);let e=s.default;var t,r=i.n(e);let{composed:l}=r();t=r().Series,(0,e.pushUnique)(l,"PriceIndication")&&((0,e.addEvent)(t,"afterRender",function(){let s=this.options,i=s.lastVisiblePrice,t=s.lastPrice;if((i||t)&&"highcharts-navigator-series"!==s.id&&this.visible){let{points:r,xAxis:l,yAxis:o}=this,{cross:a,crosshair:c,crossLabel:h}=o,n=r.length,d=this.dataTable.rowCount,b=this.getColumn("x")[d-1],P=this.getColumn("y")[d-1]??this.getColumn("close")[d-1],p=this.dataModify?.modifyValue(P)??P;if(t?.enabled&&(o.crosshair=o.options.crosshair=s.lastPrice,!this.chart.styledMode&&o.crosshair&&o.options.crosshair&&s.lastPrice&&(o.crosshair.color=o.options.crosshair.color=s.lastPrice.color||this.color),o.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete o.crossLabel,o.drawCrosshair(void 0,{x:b,y:P,series:this,plotX:(0,e.clamp)(l.toPixels(b,!0),0,l.len),plotY:o.toPixels(p,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=P),this.lastPriceLabel=o.crossLabel),i?.enabled&&n>0){o.crosshair=o.options.crosshair=(0,e.merge)({color:"transparent"},s.lastVisiblePrice),o.cross=this.lastVisiblePrice;let i=r[n-1].isInside?r[n-1]:r[n-2];this.lastVisiblePriceLabel?.destroy(),delete o.crossLabel,o.drawCrosshair(void 0,i),o.cross&&(this.lastVisiblePrice=o.cross,i&&"number"==typeof i.y&&(this.lastVisiblePrice.y=i.y)),this.lastVisiblePriceLabel=o.crossLabel}o.crosshair=o.options.crosshair=c,o.cross=a,o.crossLabel=h}}),(0,e.addEvent)(t,"hide",function(){let s=this;["lastPrice","lastPriceLabel","lastVisiblePrice","lastVisiblePriceLabel"].forEach(i=>{s[i]?.hide()})}));let o=r();export{o as default};