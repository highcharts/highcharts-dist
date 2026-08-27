/**
 * Highcharts JS v13.0.2 (2026-08-27)
 * @module highcharts/themes/grid-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{if(Array.isArray(o))for(var r=0;r<o.length;){var l=o[r++],a=o[r++];t.o(e,l)?0===a&&r++:0===a?Object.defineProperty(e,l,{enumerable:!0,value:o[r++]}):Object.defineProperty(e,l,{enumerable:!0,get:a})}else for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o=e.default;var r,l,a=t.n(o);let{setOptions:s}=a();(r=l||(l={})).options={palette:{colorScheme:"light",light:{neutralColor:"#111100",colors:["#7cb5ec","#f7a35c","#90ee7e","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"]}},chart:{style:{fontFamily:"Dosis, sans-serif"}},title:{style:{fontSize:"16px",fontWeight:"bold",textTransform:"uppercase"}},tooltip:{borderWidth:0,shadow:!1,backgroundColor:"var(--highcharts-neutral-color-80)",style:{color:"var(--highcharts-background-color)"}},legend:{backgroundColor:"var(--highcharts-neutral-color-5)",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{gridLineWidth:1,labels:{style:{fontSize:"12px"}}},yAxis:{minorTickInterval:"auto",title:{style:{textTransform:"uppercase"}},labels:{style:{fontSize:"12px"}}}},r.apply=function(){(0,o.createElement)("link",{href:"https://fonts.googleapis.com/css?family=Dosis:400,600",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),s(r.options)};let i=l;a().theme=i.options,i.apply();let n=a();export{n as default};