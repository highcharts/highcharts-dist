/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/dpo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Wojciech Chmiel
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var a=0;a<r.length;){var o=r[a++],l=r[a++];t.o(e,o)?0===l&&a++:0===l?Object.defineProperty(e,o,{enumerable:!0,value:r[a++]}):Object.defineProperty(e,o,{enumerable:!0,get:l})}else for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=t.n(r);let o=e.default.SeriesRegistry;var l=t.n(o);let{sma:s}=l().seriesTypes;function n(e,t,a,o,l){let s=(0,r.pick)(t[a][o],t[a]);return l?(0,r.correctFloat)(e-s):(0,r.correctFloat)(e+s)}class p extends s{getValues(e,t){let a=t.period,o=t.index,l=Math.floor(a/2+1),s=a+l,p=e.xData||[],i=e.yData||[],d=i.length,u=[],f=[],c=[],y,h,g,m,O,b=0;if(!(p.length<=s)){for(m=0;m<a-1;m++)b=n(b,i,m,o);for(O=0;O<=d-s;O++)h=O+a-1,g=O+s-1,b=n(b,i,h,o),y=(0,r.pick)(i[g][o],i[g])-b/a,b=n(b,i,O,o,!0),u.push([p[g],y]),f.push(p[g]),c.push(y);return{values:u,xData:f,yData:c}}}}p.defaultOptions=(0,r.merge)(s.defaultOptions,{params:{index:0,period:21}}),(0,r.extend)(p.prototype,{nameBase:"DPO"}),l().registerSeriesType("dpo",p);let i=a();export{i as default};