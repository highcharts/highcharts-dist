/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/hollowcandlestick
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Hollow Candlestick series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kolodziej
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as t from"../highcharts.js";var e={};e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var l in i)e.o(i,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:i[l]})},e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let i=t.default;var l=e.n(i);let s=t.default.SeriesRegistry;var o=e.n(s);let{seriesTypes:{candlestick:r}}=o();class n extends r.prototype.pointClass{getClassName(){let t=super.getClassName.apply(this),e=this.index,i=this.series.hollowCandlestickData[e];return i.isBullish||"up"!==i.trendDirection||(t+="-bearish-up"),t}}let a=t.default.Axis;var h=e.n(a);let{seriesTypes:{candlestick:p}}=o(),{addEvent:u,merge:c}=l();class d extends p{constructor(){super(...arguments),this.hollowCandlestickData=[]}getPriceMovement(){let t,e=this.allGroupedTable||this.dataTable,i=e.rowCount,l=this.hollowCandlestickData;l.length=0;for(let s=0;s<i;s++){let i=e.getRow(s,this.pointArrayMap);l.push(this.isBullish(i,s?t:i)),t=i}}getLineColor(t){return"up"===t?this.options.upColor||"#06b535":this.options.color||"#f21313"}getPointFill(t){return t.isBullish?"transparent":"up"===t.trendDirection?this.options.upColor||"#06b535":this.options.color||"#f21313"}init(){super.init.apply(this,arguments),this.hollowCandlestickData=[]}isBullish(t,e){return{isBullish:(t[0]||0)<=(t[3]||0),trendDirection:(t[3]||0)<(e?.[3]||0)?"down":"up"}}pointAttribs(t,e){let i,l=super.pointAttribs.call(this,t,e),s=t.index,o=this.hollowCandlestickData[s];return l.fill=this.getPointFill(o)||l.fill,l.stroke=this.getLineColor(o.trendDirection)||l.stroke,e&&(l.fill=(i=this.options.states[e]).color||l.fill,l.stroke=i.lineColor||l.stroke,l["stroke-width"]=i.lineWidth||l["stroke-width"]),l}}d.defaultOptions=c(p.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"}),u(d,"updatedData",function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)}),u(h(),"postProcessData",function(){this.series.forEach(function(t){t.is("hollowcandlestick")&&t.getPriceMovement()})}),d.prototype.pointClass=n,o().registerSeriesType("hollowcandlestick",d);let f=l();export{f as default};