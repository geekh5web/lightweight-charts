"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,u=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return r?a.createElement(u,o(o({ref:t},f),{},{components:r})):a.createElement(u,o({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"BarsInfo",title:"Interface: BarsInfo",sidebar_label:"BarsInfo",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/BarsInfo",id:"version-3.8/api/interfaces/BarsInfo",title:"Interface: BarsInfo",description:"Represents a range of bars and the number of bars outside the range.",source:"@site/versioned_docs/version-3.8/api/interfaces/BarsInfo.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarsInfo",permalink:"/lightweight-charts/docs/api/interfaces/BarsInfo",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"BarsInfo",title:"Interface: BarsInfo",sidebar_label:"BarsInfo",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"barsBefore",id:"barsbefore",level:3},{value:"barsAfter",id:"barsafter",level:3},{value:"from",id:"from",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"to",id:"to",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],f={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a range of bars and the number of bars outside the range."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Range"},(0,n.kt)("inlineCode",{parentName:"a"},"Range")),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time")),">",">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BarsInfo"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"barsbefore"},"barsBefore"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"barsBefore"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The number of bars before the start of the range.\nPositive value means that there are some bars before (out of logical range from the left) the ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Range#from"},"from")," logical index in the series.\nNegative value means that the first series' bar is inside the passed logical range, and between the first series' bar and the ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Range#from"},"from")," logical index are some bars."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"barsafter"},"barsAfter"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"barsAfter"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The number of bars after the end of the range.\nPositive value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"barsAfter")," field means that there are some bars after (out of logical range from the right) the ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Range#to"},"to")," logical index in the series.\nNegative value means that the last series' bar is inside the passed logical range, and between the last series' bar and the ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/Range#to"},"to")," logical index are some bars."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"from"},"from"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"from"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time"))),(0,n.kt)("p",null,"The from value. The start of the range."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"Partial.from"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"to"},"to"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"to"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time"))),(0,n.kt)("p",null,"The to value. The end of the range."),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,"Partial.to"))}c.isMDXComponent=!0}}]);