/**
 * Highstock JS v13.0.0 (2026-06-11)
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
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r=t.n(a);let i=e.default.SeriesRegistry;var l=t.n(i);let{sma:n}=l().seriesTypes;function s(e,t){return parseFloat(e.toFixed(t))}class o extends n{constructor(){super(...arguments),this.nameComponents=void 0}getValues(e,t){let a=e.xData,r=e.yData,i=t.maxAccelerationFactor,l=t.increment,n=t.initialAccelerationFactor,o=t.decimals,c=t.index,u=[],p=[],d=[],h=t.initialAccelerationFactor,m,f=r[0][1],x,v,g,y=1,F,M,A,O,b=r[0][2],D,j,P,_;if(!(c>=r.length)){for(_=0;_<c;_++)f=Math.max(r[_][1],f),b=Math.min(r[_][2],s(b,o));for(m=r[_][1]>b?1:-1,x=f-b,v=(h=t.initialAccelerationFactor)*x,u.push([a[c],b]),p.push(a[c]),d.push(s(b,o)),_=c+1;_<r.length;_++)if(F=r[_-1][2],M=r[_-2][2],A=r[_-1][1],O=r[_-2][1],j=r[_][1],P=r[_][2],null!==M&&null!==O&&null!==F&&null!==A&&null!==j&&null!==P){var S,T,W,k,w,C,R,V,q,z,B,E,G,H,I,J,K,L,N,Q,U;w=m,C=y,R=b,V=v,q=M,z=F,B=A,E=O,G=f,b=w===C?1===w?R+V<Math.min(q,z)?R+V:Math.min(q,z):R+V>Math.max(E,B)?R+V:Math.max(E,B):G,S=m,T=f,D=1===S?j>T?j:T:P<T?P:T,W=y,k=b,H=g=1===W&&P>k||-1===W&&j>k?1:-1,I=m,J=D,K=f,L=h,N=l,Q=i,U=n,v=(h=H===I?1===H&&J>K||-1===H&&J<K?L===Q?Q:s(L+N,2):L:U)*(x=D-b),u.push([a[_],s(b,o)]),p.push(a[_]),d.push(s(b,o)),y=m,m=g,f=D}return{values:u,xData:p,yData:d}}}}o.defaultOptions=(0,a.merge)(n.defaultOptions,{lineWidth:0,marker:{enabled:!0},states:{hover:{lineWidthPlus:0}},params:{period:void 0,initialAccelerationFactor:.02,maxAccelerationFactor:.2,increment:.02,index:2,decimals:4}}),l().registerSeriesType("psar",o);let c=r();export{c as default};