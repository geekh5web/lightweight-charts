"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},o="From v3 to v4",s={unversionedId:"migrations/from-v3-to-v4",id:"migrations/from-v3-to-v4",title:"From v3 to v4",description:"In this document you can find the migration guide from the previous version v3 to v4.",source:"@site/docs/migrations/from-v3-to-v4.md",sourceDirName:"migrations",slug:"/migrations/from-v3-to-v4",permalink:"/lightweight-charts/docs/next/migrations/from-v3-to-v4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/next/migrations/from-v2-to-v3"},next:{title:"iOS wrapper",permalink:"/lightweight-charts/docs/next/ios"}},l={},c=[{value:"Exported enum <code>LasPriceAnimationMode</code> has been removed",id:"exported-enum-laspriceanimationmode-has-been-removed",level:2},{value:"<code>scaleMargins</code> option has been removed from series options",id:"scalemargins-option-has-been-removed-from-series-options",level:2},{value:"<code>backgroundColor</code> from <code>layout</code> options has been removed",id:"backgroundcolor-from-layout-options-has-been-removed",level:2},{value:"<code>overlay</code> property of series options has been removed",id:"overlay-property-of-series-options-has-been-removed",level:2},{value:"<code>priceScale</code> option has been removed",id:"pricescale-option-has-been-removed",level:2},{value:"<code>priceScale()</code> method of chart API now requires to provide price scale id",id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id",level:2},{value:"<code>drawTicks</code> from <code>leftPriceScale</code> and <code>rightPriceScale</code> options has been renamed to <code>ticksVisible</code>",id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible",level:2},{value:"The type of outbound time values has been changed",id:"the-type-of-outbound-time-values-has-been-changed",level:2},{value:"<code>seriesPrices</code> property from <code>MouseEventParams</code> has been removed",id:"seriesprices-property-from-mouseeventparams-has-been-removed",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"from-v3-to-v4"},"From v3 to v4"),(0,n.kt)("p",null,"In this document you can find the migration guide from the previous version v3 to v4."),(0,n.kt)("h2",{id:"exported-enum-laspriceanimationmode-has-been-removed"},"Exported enum ",(0,n.kt)("inlineCode",{parentName:"h2"},"LasPriceAnimationMode")," has been removed"),(0,n.kt)("p",null,"Please use ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LastPriceAnimationMode"},(0,n.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))," instead."),(0,n.kt)("h2",{id:"scalemargins-option-has-been-removed-from-series-options"},(0,n.kt)("inlineCode",{parentName:"h2"},"scaleMargins")," option has been removed from series options"),(0,n.kt)("p",null,"Previously, you could do something like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries({\n    scaleMargins: { /* options here */},\n});\n")),(0,n.kt)("p",null,"And ",(0,n.kt)("inlineCode",{parentName:"p"},"scaleMargins")," option was applied to series' price scale as ",(0,n.kt)("inlineCode",{parentName:"p"},"scaleMargins")," option."),(0,n.kt)("p",null,"Since v4 this option won't be applied to the price scale and will be just ignored (if you're using TypeScript you will get a compilation error)."),(0,n.kt)("p",null,"To fix this, you need to apply these options to series' price scale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries();\n\nseries.priceScale().applyOptions({\n    scaleMargins: { /* options here */},\n});\n")),(0,n.kt)("h2",{id:"backgroundcolor-from-layout-options-has-been-removed"},(0,n.kt)("inlineCode",{parentName:"h2"},"backgroundColor")," from ",(0,n.kt)("inlineCode",{parentName:"h2"},"layout")," options has been removed"),(0,n.kt)("p",null,"If you want to have solid background color you need to use ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions#background"},(0,n.kt)("inlineCode",{parentName:"a"},"background"))," property instead, e.g. instead of:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        backgroundColor: 'red',\n    },\n});\n")),(0,n.kt)("p",null,"use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        background: {\n            type: ColorType.Solid,\n            color: 'red',\n        },\n    },\n});\n")),(0,n.kt)("h2",{id:"overlay-property-of-series-options-has-been-removed"},(0,n.kt)("inlineCode",{parentName:"h2"},"overlay")," property of series options has been removed"),(0,n.kt)("p",null,"Please follow ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/migrations/from-v2-to-v3#creating-overlay"},"the guide for migrating from v2 to v3")," where this option was deprecated."),(0,n.kt)("h2",{id:"pricescale-option-has-been-removed"},(0,n.kt)("inlineCode",{parentName:"h2"},"priceScale")," option has been removed"),(0,n.kt)("p",null,"Please follow ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/migrations/from-v2-to-v3#two-price-scales"},"the guide for migrating from v2 to v3"),"."),(0,n.kt)("h2",{id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id"},(0,n.kt)("inlineCode",{parentName:"h2"},"priceScale()")," method of chart API now requires to provide price scale id"),(0,n.kt)("p",null,"Before v4 you could write the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const priceScale = chart.priceScale();\n")),(0,n.kt)("p",null,"And in ",(0,n.kt)("inlineCode",{parentName:"p"},"priceScale")," you had a right price scale if it is visible and a left price scale otherwise."),(0,n.kt)("p",null,"Since v4 you have to provide an ID of price scale explicitly, e.g. if you want to get a right price scale you need to provide ",(0,n.kt)("inlineCode",{parentName:"p"},"'right'"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const rightPriceScale = chart.priceScale('right');\nconst leftPriceScale = chart.priceScale('left');\n")),(0,n.kt)("h2",{id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible"},(0,n.kt)("inlineCode",{parentName:"h2"},"drawTicks")," from ",(0,n.kt)("inlineCode",{parentName:"h2"},"leftPriceScale")," and ",(0,n.kt)("inlineCode",{parentName:"h2"},"rightPriceScale")," options has been renamed to ",(0,n.kt)("inlineCode",{parentName:"h2"},"ticksVisible")),(0,n.kt)("p",null,"Since v4 you have to use ",(0,n.kt)("inlineCode",{parentName:"p"},"ticksVisible")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"drawTicks"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    leftPriceScale: {\n        ticksVisible: false,\n    },\n    rightPriceScale: {\n        ticksVisible: false,\n    },\n});\n")),(0,n.kt)("p",null,"Also this option is off by default."),(0,n.kt)("h2",{id:"the-type-of-outbound-time-values-has-been-changed"},"The type of outbound time values has been changed"),(0,n.kt)("p",null,"Affected API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribeclick"},(0,n.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))," (via ",(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#time"},(0,n.kt)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribecrosshairmove"},(0,n.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove"))," (via ",(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#time"},(0,n.kt)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},(0,n.kt)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter"))," (via argument of ",(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/#timeformatterfn"},(0,n.kt)("inlineCode",{parentName:"a"},"TimeFormatterFn")),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions#tickmarkformatter"},(0,n.kt)("inlineCode",{parentName:"a"},"TimeScaleOptions.tickMarkFormatter"))," (via argument of ",(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/#tickmarkformatter"},(0,n.kt)("inlineCode",{parentName:"a"},"TickMarkFormatter")),")")),(0,n.kt)("p",null,"Previously the type of an inbound time (a values you provide to the library, e.g. in ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,n.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),") was different from an outbound one (a values the library provides to your code, e.g. an argument of ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},(0,n.kt)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter")),").\nSo the difference between types was that outbound time couldn't be a business day string."),(0,n.kt)("p",null,"Since v4 we improved our API in this matter and now the library will return exactly the same values back for all time-related properties."),(0,n.kt)("p",null,"Thus, if you provide a string to your series in ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,n.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),", you'll receive exactly the same value back:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"series.setData([\n    { time: '2001-01-01', value: 1 },\n]);\n\nchart.applyOptions({\n    localization: {\n        timeFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n    timeScale: {\n        tickMarkFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n});\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.time); // will be '2001-01-01' if you hover the bar above\n});\n\nchart.subscribeClick(param => {\n    console.log(param.time); // will be '2001-01-01' if you click on the bar above\n});\n")),(0,n.kt)("p",null,"Handling this breaking change depends on your needs and your handlers, but generally speaking you need to convert provided time to a desired format manually if it is required.\nFor example, you could use provided helpers to check the type of a time:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    createChart,\n    isUTCTimestamp,\n    isBusinessDay,\n} from 'lightweight-charts';\n\nconst chart = createChart(document.body);\n\nchart.subscribeClick(param => {\n    if (param.time === undefined) {\n        // the time is undefined, i.e. there is no any data point where a time could be received from\n        return;\n    }\n\n    if (isUTCTimestamp(param.time)) {\n        // param.time is UTCTimestamp\n    } else if (isBusinessDay(param.time)) {\n        // param.time is a BusinessDay object\n    } else {\n        // param.time is a business day string in ISO format, e.g. `'2010-01-01'`\n    }\n});\n")),(0,n.kt)("h2",{id:"seriesprices-property-from-mouseeventparams-has-been-removed"},(0,n.kt)("inlineCode",{parentName:"h2"},"seriesPrices")," property from ",(0,n.kt)("inlineCode",{parentName:"h2"},"MouseEventParams")," has been removed"),(0,n.kt)("p",null,"Affected API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribeclick"},(0,n.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribecrosshairmove"},(0,n.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove")))),(0,n.kt)("p",null,"The property ",(0,n.kt)("inlineCode",{parentName:"p"},"seriesPrices")," of ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams"},(0,n.kt)("inlineCode",{parentName:"a"},"MouseEventParams"))," has been removed."),(0,n.kt)("p",null,"Instead, you can use ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#seriesdata"},(0,n.kt)("inlineCode",{parentName:"a"},"MouseEventParams.seriesData"))," - it is pretty similar to the old ",(0,n.kt)("inlineCode",{parentName:"p"},"seriesPrices"),", but it contains series' data items instead of just prices:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"lineSeries.setData([{ time: '2001-01-01', value: 1 }]);\nbarSeries.setData([{ time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 }]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.seriesData.get(lineSeries)); // { time: '2001-01-01', value: 1 } or undefined\n    console.log(param.seriesData.get(barSeries)); // { time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 } or undefined\n});\n")))}m.isMDXComponent=!0}}]);