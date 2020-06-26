(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),a=(r(0),r(235)),i={id:"use-cases-orchestration",title:"Microservice Orchestration and Saga",sidebar_label:"Microservice Orchestration"},s={id:"version-0.23.1/use-cases-orchestration",title:"Microservice Orchestration and Saga",description:"It is common that some business processes are implemented as multiple microservice calls.",source:"@site/versioned_docs/version-0.23.1/use-cases-orchestration.md",permalink:"/docs/use-cases-orchestration",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/use-cases-orchestration.md",version:"0.23.1",sidebar_label:"Microservice Orchestration",sidebar:"version-0.23.1/docs",previous:{title:"Periodic Execution (aka Distributed Cron)",permalink:"/docs/use-cases-periodic"},next:{title:"Polling",permalink:"/docs/use-cases-polling"}},c=[],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is common that some business processes are implemented as multiple microservice calls.\nAnd the implementation must guarantee that all of the calls must eventually succeed even with the occurrence of prolonged downstream service failures.\nIn some cases, instead of trying to complete the process by retrying for a long time, compensation rollback logic should be executed.\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://microservices.io/patterns/data/saga.html"}),"Saga Pattern")," is one way to standardize on compensation APIs."),Object(a.b)("p",null,"Temporal is a perfect fit for such scenarios. It guarantees that workflow code eventually completes, has built-in support\nfor unlimited exponential activity retries and simplifies coding of the compensation logic. It also gives full visibility into the state of each workflow, in contrast to an orchestration based on queues where getting a current status of each individual request is practically impossible."),Object(a.b)("p",null,"Following are some real-world examples of Temporal-based service orchestration scenarios:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://banzaicloud.com/blog/introduction-to-cadence/"}),"Using Temporal workflows to spin up Kubernetes by Banzai Cloud")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://eng.uber.com/customer-obsession-ticket-routing-workflow-and-orchestration-engine/"}),"Improving the User Experience with Uber\u2019s Customer Obsession Ticket Routing Workflow and Orchestration Engine"))))}u.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return r?o.a.createElement(d,s({ref:t},l,{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);