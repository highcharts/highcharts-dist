/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as s from"../highcharts.js";var i,e={};e.n=s=>{var i=s&&s.__esModule?()=>s.default:()=>s;return e.d(i,{a:i}),i},e.d=(s,i)=>{for(var r in i)e.o(i,r)&&!e.o(s,r)&&Object.defineProperty(s,r,{enumerable:!0,get:i[r]})},e.o=(s,i)=>Object.prototype.hasOwnProperty.call(s,i);let r=s.default;var t=e.n(r);let{composed:o}=t();i=t().Series,(0,r.pushUnique)(o,"PriceIndication")&&((0,r.addEvent)(i,"afterRender",function(){let s=this.options,i=s.lastVisiblePrice,e=s.lastPrice;if((i||e)&&"highcharts-navigator-series"!==s.id&&this.visible){let{points:t,xAxis:o,yAxis:a}=this,{cross:l,crosshair:c,crossLabel:h}=a,n=t.length,d=this.dataTable.rowCount,b=this.getColumn("x")[d-1],P=this.getColumn("y")[d-1]??this.getColumn("close")[d-1];if(e?.enabled&&(a.crosshair=a.options.crosshair=s.lastPrice,!this.chart.styledMode&&a.crosshair&&a.options.crosshair&&s.lastPrice&&(a.crosshair.color=a.options.crosshair.color=s.lastPrice.color||this.color),a.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete a.crossLabel,a.drawCrosshair(void 0,{x:b,y:P,plotX:o.toPixels(b,!0),plotY:a.toPixels(P,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=P),this.lastPriceLabel=a.crossLabel),i?.enabled&&n>0){a.crosshair=a.options.crosshair=(0,r.merge)({color:"transparent"},s.lastVisiblePrice),a.cross=this.lastVisiblePrice;let i=t[n-1].isInside?t[n-1]:t[n-2];this.lastVisiblePriceLabel?.destroy(),delete a.crossLabel,a.drawCrosshair(void 0,i),a.cross&&(this.lastVisiblePrice=a.cross,i&&"number"==typeof i.y&&(this.lastVisiblePrice.y=i.y)),this.lastVisiblePriceLabel=a.crossLabel}a.crosshair=a.options.crosshair=c,a.cross=l,a.crossLabel=h}}),(0,r.addEvent)(i,"hide",function(){let s=this;["lastPrice","lastPriceLabel","lastVisiblePrice","lastVisiblePriceLabel"].forEach(i=>{s[i]?.hide()})}));let a=t();export{a as default};