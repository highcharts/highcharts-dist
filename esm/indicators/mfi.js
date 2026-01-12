/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/mfi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let a=e.default.SeriesRegistry;var o=t.n(a);let{sma:u}=o().seriesTypes,{extend:i,merge:n,error:l,isArray:p}=s();function d(e){return e.reduce(function(e,t){return e+t})}function f(e){return(e[1]+e[2]+e[3])/3}class h extends u{getValues(e,t){let r=t.period,s=e.xData,a=e.yData,o=a?a.length:0,u=t.decimals,i=e.chart.get(t.volumeSeriesID),n=i?.getColumn("y")||[],h=[],c=[],m=[],v=[],y=[],g,D,x,S,I,O,b=!1,j=1;if(!i)return void l("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);if(!(s.length<=r)&&p(a[0])&&4===a[0].length&&n){for(g=f(a[j]);j<r+1;)D=g,b=(g=f(a[j]))>=D,x=g*n[j],v.push(b?x:0),y.push(b?0:x),j++;for(O=j-1;O<o;O++){var F;O>j-1&&(v.shift(),y.shift(),D=g,b=(g=f(a[O]))>D,x=g*n[O],v.push(b?x:0),y.push(b?0:x)),S=d(y),F=100-100/(1+d(v)/S),I=parseFloat(F.toFixed(u)),h.push([s[O],I]),c.push(s[O]),m.push(I)}return{values:h,xData:c,yData:m}}}}h.defaultOptions=n(u.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),i(h.prototype,{nameBase:"Money Flow Index"}),o().registerSeriesType("mfi",h);let c=s();export{c as default};