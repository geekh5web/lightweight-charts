"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"CandlestickData",title:"Interface: CandlestickData",sidebar_label:"CandlestickData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/CandlestickData",id:"api/interfaces/CandlestickData",title:"Interface: CandlestickData",description:"Structure describing a single item of data for candlestick series",source:"@site/docs/api/interfaces/CandlestickData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CandlestickData",permalink:"/lightweight-charts/docs/next/api/interfaces/CandlestickData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CandlestickData",title:"Interface: CandlestickData",sidebar_label:"CandlestickData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"wickColor",id:"wickcolor",level:3},{value:"time",id:"time",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"open",id:"open",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"high",id:"high",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"low",id:"low",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"close",id:"close",level:3},{value:"Inherited from",id:"inherited-from-4",level:4}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Structure describing a single item of data for candlestick series"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},(0,n.kt)("inlineCode",{parentName:"a"},"OhlcData"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"CandlestickData"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"color"},"color"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"color"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bordercolor"},"borderColor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional border color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"wickcolor"},"wickColor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"wickColor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional wick color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"time"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time"))),(0,n.kt)("p",null,"The bar time."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData#time"},"time")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"open"},"open"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"open"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The open price."),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData#open"},"open")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"high"},"high"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"high"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The high price."),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData#high"},"high")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"low"},"low"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"low"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The low price."),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData#low"},"low")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"close"},"close"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"close"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The close price."),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData#close"},"close")))}d.isMDXComponent=!0}}]);