(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),i=(r(0),r(183)),a={id:"use-cases-periodic",title:"Periodic Execution (aka Distributed Cron)",sidebar_label:"Periodic Execution"},c={id:"use-cases-periodic",title:"Periodic Execution (aka Distributed Cron)",description:"Periodic execution, frequently referred to as distributed cron, is when you execute business logic periodically. The advantage of Temporal for these scenarios is that it guarantees execution, sophisticated error handling, retry policies, and visibility into execution history.",source:"@site/docs/use-cases-periodic.md",permalink:"/docs/use-cases-periodic",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/use-cases-periodic.md",sidebar_label:"Periodic Execution",sidebar:"docs",previous:{title:"SDK Video Tutorial",permalink:"/docs/go-sdk-video-tutorial"},next:{title:"Microservice Orchestration and Saga",permalink:"/docs/use-cases-orchestration"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Periodic execution, frequently referred to as distributed cron, is when you execute business logic periodically. The advantage of Temporal for these scenarios is that it guarantees execution, sophisticated error handling, retry policies, and visibility into execution history."),Object(i.b)("p",null,"Another important dimension is scale. Some use cases require periodic execution for a large number of entities.\nAt Uber, there are applications that create periodic workflows per customer.\nImagine 100+ million parallel cron jobs that don't require a separate batch processing framework."),Object(i.b)("p",null,"Periodic execution is often part of other use cases. For example, once a month report generation is a periodic service orchestration. Or an event-driven workflow that accumulates loyalty points for a customer and applies those points once a month."),Object(i.b)("p",null,"There are many real-world examples of Temporal periodic executions. Such as the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An Uber backend service that recalculates various statistics for each ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://eng.uber.com/h3/"}),"hex")," in each city once a minute."),Object(i.b)("li",{parentName:"ul"},"Monthly Uber for Business report generation.")))}l.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(f,c({ref:t},u,{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);