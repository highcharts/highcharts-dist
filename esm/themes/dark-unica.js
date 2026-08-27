/**
 * Highcharts JS v13.0.2 (2026-08-27)
 * @module highcharts/themes/dark-unica
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{if(Array.isArray(a))for(var r=0;r<a.length;){var o=a[r++],l=a[r++];t.o(e,o)?0===l&&r++:0===l?Object.defineProperty(e,o,{enumerable:!0,value:a[r++]}):Object.defineProperty(e,o,{enumerable:!0,get:l})}else for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let a=e.default;var r,o,l=t.n(a);let{setOptions:s}=l();(r=o||(o={})).options={palette:{colorScheme:"dark",dark:{backgroundColor:"#3e3e40",neutralColor:"#f0f0f3",highlightColor:"#75fffd",colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"]}},chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"}},title:{style:{textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{textTransform:"uppercase"}},plotOptions:{series:{dataLabels:{style:{fontSize:"13px"}}}},legend:{backgroundColor:"#00000388"},global:{buttonTheme:{states:{hover:{fill:"#707073"},select:{fill:"#000003"}}}}},r.apply=function(){(0,a.createElement)("link",{href:"https://fonts.googleapis.com/css?family=Unica+One",rel:"stylesheet",type:"text/css"},void 0,document.getElementsByTagName("head")[0]),s(r.options)};let n=o;l().theme=n.options,n.apply();let i=l();export{i as default};