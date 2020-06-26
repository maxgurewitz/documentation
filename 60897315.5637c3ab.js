(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(6),i=(t(0),t(235)),a={id:"use-cases-provisioning",title:"Infrastructure Provisioning",sidebar_label:"Infrastructure Provisioning"},c={id:"use-cases-provisioning",title:"Infrastructure Provisioning",description:"Provisioning a new datacenter or a pool of machines in a public cloud is a potentially long running operation with",source:"@site/docs/use-cases-provisioning.md",permalink:"/docs/next/use-cases-provisioning",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/use-cases-provisioning.md",version:"next",sidebar_label:"Infrastructure Provisioning",sidebar:"docs",previous:{title:"Batch Job",permalink:"/docs/next/use-cases-batch-job"},next:{title:"CI/CD",permalink:"/docs/next/use-cases-cicd"}},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provisioning a new datacenter or a pool of machines in a public cloud is a potentially long running operation with\na lot of possibilities for intermittent failures. The scale is also a concern when tens or even hundreds of thousands of resources should be provisioned and configured. One useful feature for provisioning scenarios is Temporal support for routing activity execution to a specific process or host."),Object(i.b)("p",null,"A lot of operations require some sort of locking to ensure that no more than one mutation is executed on a resource at a time.\nTemporal provides strong guarantees of uniqueness by business Id. This can be used to implement such locking behavior in a fault tolerant and scalable manner."),Object(i.b)("p",null,"Some real-world use cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://banzaicloud.com/blog/introduction-to-cadence/"}),"Using Temporal workflows to spin up Kubernetes, by Banzai Cloud")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=kDlrM6sgk2k&feature=youtu.be&t=1188"}),"Using Temporal to orchestrate cluster life cycle in HashiCorp Consul, by HashiCorp"))))}l.isMDXComponent=!0},235:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||i;return t?o.a.createElement(d,c({ref:n},u,{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);