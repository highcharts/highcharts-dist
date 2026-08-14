/**
 * Highstock JS v13.0.0-modified (2026-08-14)
 * @module highcharts/indicators/psar
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Parabolic SAR Indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{if(Array.isArray(a))for(var r=0;r<a.length;){var l=a[r++],i=a[r++];t.o(e,l)?0===i&&r++:0===i?Object.defineProperty(e,l,{enumerable:!0,value:a[r++]}):Object.defineProperty(e,l,{enumerable:!0,get:i})}else for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let l=e.default.SeriesRegistry;var i=t.n(l);let{sma:n}=i().seriesTypes;function s(e,t){return parseFloat(e.toFixed(t))}class o extends n{constructor(){super(...arguments),this.nameComponents=void 0}getValues(e,t){let a=e.xData,r=e.yData,l=t.maxAccelerationFactor,i=t.increment,n=t.initialAccelerationFactor,o=t.decimals,c=t.index,u=[],p=[],d=[],h=t.initialAccelerationFactor,m,f=r[0][1],x,y,v,g=1,b,A,F,M,O=r[0][2],j,P,D,_;if(!(c>=r.length)){for(_=0;_<c;_++)f=Math.max(r[_][1],f),O=Math.min(r[_][2],s(O,o));for(m=r[_][1]>O?1:-1,x=f-O,y=(h=t.initialAccelerationFactor)*x,u.push([a[c],O]),p.push(a[c]),d.push(s(O,o)),_=c+1;_<r.length;_++)if(b=r[_-1][2],A=r[_-2][2],F=r[_-1][1],M=r[_-2][1],P=r[_][1],D=r[_][2],null!==A&&null!==M&&null!==b&&null!==F&&null!==P&&null!==D){var S,T,W,k,w,C,R,V,q,z,B,E,G,H,I,J,K,L,N,Q,U;w=m,C=g,R=O,V=y,q=A,z=b,B=F,E=M,G=f,O=w===C?1===w?R+V<Math.min(q,z)?R+V:Math.min(q,z):R+V>Math.max(E,B)?R+V:Math.max(E,B):G,S=m,T=f,j=1===S?P>T?P:T:D<T?D:T,W=g,k=O,H=v=1===W&&D>k||-1===W&&P>k?1:-1,I=m,J=j,K=f,L=h,N=i,Q=l,U=n,y=(h=H===I?1===H&&J>K||-1===H&&J<K?L===Q?Q:s(L+N,2):L:U)*(x=j-O),u.push([a[_],s(O,o)]),p.push(a[_]),d.push(s(O,o)),g=m,m=v,f=j}return{values:u,xData:p,yData:d}}}}o.defaultOptions=(0,a.merge)(n.defaultOptions,{lineWidth:0,marker:{enabled:!0},states:{hover:{lineWidthPlus:0}},params:{period:void 0,initialAccelerationFactor:.02,maxAccelerationFactor:.2,increment:.02,index:2,decimals:4}}),i().registerSeriesType("psar",o);let c=r();export{c as default};