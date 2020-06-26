(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(235)),i={id:"learn-task-lists",title:"Task Lists"},s={id:"learn-task-lists",title:"Task Lists",description:"When a workflow invokes an activity, it sends the ```ScheduleActivityTask``` [decision](/docs/learn-glossary#decision) to the ",source:"@site/docs/learn-task-lists.md",permalink:"/docs/next/learn-task-lists",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/learn-task-lists.md",version:"next",sidebar:"docs",previous:{title:"Deployment Topology",permalink:"/docs/next/learn-topology"},next:{title:"Configuring Temporal",permalink:"/docs/next/learn-server-configuration"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a workflow invokes an activity, it sends the ",Object(o.b)("inlineCode",{parentName:"p"},"ScheduleActivityTask")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/learn-glossary#decision"}),"decision")," to the\nTemporal service. As a result, the service updates the workflow state and dispatches\nan ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/learn-glossary#activity-task"}),"activity task")," to a worker that implements the activity.\nInstead of calling the worker directly, an intermediate queue is used. So the service adds an ",Object(o.b)("em",{parentName:"p"},"activity task")," to this\nqueue and a worker receives the task using a long poll request.\nTemporal calls this queue used to dispatch activity tasks an ",Object(o.b)("em",{parentName:"p"},"activity task list"),"."),Object(o.b)("p",null,"Similarly, when a workflow needs to handle an external event, a decision task is created.\n",Object(o.b)("em",{parentName:"p"},"A Decision task list")," is used to deliver it to the workflow worker (also called ",Object(o.b)("em",{parentName:"p"},"decider"),")."),Object(o.b)("p",null,"While Temporal task lists are queues, they have some differences from commonly used queuing technologies.\nThe main one is that they do not require explicit registration and are created on demand. The number of task lists\nis not limited. A common use case is to have a task list per worker process and use it to deliver activity tasks\nto the process. Another use case is to have a task list per pool of workers."),Object(o.b)("p",null,"There are multiple advantages of using a task list to deliver tasks instead of invoking an activity\nworker through a synchronous RPC:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Worker doesn't need to have any open ports, which is more secure."),Object(o.b)("li",{parentName:"ul"},"Worker doesn't need to advertise itself through DNS or any other network discovery mechanism."),Object(o.b)("li",{parentName:"ul"},"When all workers are down, messages are persisted in a task list waiting for the workers to recover."),Object(o.b)("li",{parentName:"ul"},"A worker polls for a message only when it has spare capacity, so it never gets overloaded."),Object(o.b)("li",{parentName:"ul"},"Automatic load balancing across a large number of workers."),Object(o.b)("li",{parentName:"ul"},"Task lists support server side throttling. This allows you to limit the task dispatch rate to the pool of workers and still supports adding a task with a higher rate when spikes happen."),Object(o.b)("li",{parentName:"ul"},"Task lists can be used to route a request to specific pools of workers or even a specific process.")))}p.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,s({ref:t},l,{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);