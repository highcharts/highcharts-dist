/**
 * Highstock JS v13.1.0 (2026-09-18)
 * @module highcharts/indicators/cmf
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Domas
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var l in r)t.o(r,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:r[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var l=t.n(r);let s=e.default.SeriesRegistry;var a=t.n(s);let{sma:i}=a().seriesTypes;class n extends i{constructor(){super(...arguments),this.nameBase="Chaikin Money Flow"}isValid(){let e=this.chart,t=this.options,r=this.linkedParent,l=this.volumeSeries||(this.volumeSeries=e.get(t.params.volumeSeriesID)),s=r?.pointArrayMap?.length===4;function a(e){return e.dataTable.rowCount>=t.params.period}return!!(r&&l&&a(r)&&a(l)&&s)}getValues(e,t){if(this.isValid())return this.getMoneyFlow(e.xData,e.yData,this.volumeSeries.getColumn("y"),t.period)}getMoneyFlow(e,t,r,l){let s=t.length,a=[],i=[],n=[],o=[],u,p,h=-1,d=0,m=0;function f(e,t){let r=e[1],l=e[2],s=e[3];return null!==t&&null!==r&&null!==l&&null!==s&&r!==l?(s-l-(r-s))/(r-l)*t:(h=u,null)}if(l>0&&l<=s){for(u=0;u<l;u++)a[u]=f(t[u],r[u]),d+=r[u],m+=a[u];for(i.push(e[u-1]),n.push(u-h>=l&&0!==d?m/d:null),o.push([i[0],n[0]]);u<s;u++)a[u]=f(t[u],r[u]),d-=r[u-l],d+=r[u],m-=a[u-l],m+=a[u],p=[e[u],u-h>=l?m/d:null],i.push(p[0]),n.push(p[1]),o.push([p[0],p[1]])}return{values:o,xData:i,yData:n}}}n.defaultOptions=(0,r.merge)(i.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),a().registerSeriesType("cmf",n);let o=l();export{o as default};