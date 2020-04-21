(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),a=(r(0),r(183)),i={id:"learn-queries",title:"Queries"},c={id:"learn-queries",title:"Queries",description:"## Synchronous Query",source:"@site/docs/learn-queries.md",permalink:"/docs/learn-queries",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/learn-queries.md",sidebar:"docs",previous:{title:"Events",permalink:"/docs/learn-events"},next:{title:"Deployment Topology",permalink:"/docs/learn-topology"}},l=[{value:"Synchronous Query",id:"synchronous-query",children:[]},{value:"Stack Trace Query",id:"stack-trace-query",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"synchronous-query"},"Synchronous Query"),Object(a.b)("p",null,"Workflow code is stateful with the Temporal framework preserving it over various software and hardware failures. The state is constantly mutated during workflow execution. To expose this internal state to the external world Temporal provides a synchronous query feature. From the workflow implementer point of view the query is exposed as a synchronous callback that is invoked by external entities. Multiple such callbacks can be provided per workflow type exposing different information to different external systems."),Object(a.b)("p",null,"To execute a query an external client calls a synchronous Temporal API providing ",Object(a.b)("em",{parentName:"p"},"namespace, workflowId, query name")," and optional ",Object(a.b)("em",{parentName:"p"},"query arguments"),"."),Object(a.b)("p",null,"Query callbacks must be read-only not mutating the workflow state in any way. The other limitation is that the query callback cannot contain any blocking code. Both above limitations rule out ability to invoke activities from the query handlers."),Object(a.b)("p",null,"Temporal team is currently working on implementing ",Object(a.b)("em",{parentName:"p"},"update")," feature that would be similar to query in the way it is invoked, but would support workflow state mutation and local activity invocations."),Object(a.b)("h2",{id:"stack-trace-query"},"Stack Trace Query"),Object(a.b)("p",null,"The Temporal client libraries expose some predefined queries out of the box. Currently the only supported built-in query is ",Object(a.b)("em",{parentName:"p"},"stack_trace"),". This query returns stacks of all workflow owned threads. This is a great way to troubleshoot any workflow in production."))}s.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return r?o.a.createElement(m,c({ref:t},u,{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);