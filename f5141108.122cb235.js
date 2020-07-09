(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{384:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var o=r(1),n=r(10),a=(r(0),r(395)),i={id:"learn-topology",title:"Deployment Topology"},l={id:"version-0.26.0/learn-topology",isDocsHomePage:!1,title:"Deployment Topology",description:"Overview",source:"@site/versioned_docs/version-0.26.0/learn-topology.md",permalink:"/docs/learn-topology",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/learn-topology.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Queries",permalink:"/docs/learn-queries"},next:{title:"Task Queues",permalink:"/docs/learn-task-queues"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Temporal Service",id:"temporal-service",children:[]},{value:"Workflow Worker",id:"workflow-worker",children:[]},{value:"Activity Worker",id:"activity-worker",children:[]},{value:"External Clients",id:"external-clients",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Temporal is a highly scalable fault-oblivious stateful code platform. The fault-oblivious code is a next level of abstraction over commonly used techniques to achieve fault tolerance and durability."),Object(a.b)("p",null,"A common Temporal-based application consists of a Temporal service, workflow and activity workers, and external clients.\nNote that both types of workers as well as external clients are roles and can be collocated in a single application process if necessary."),Object(a.b)("h2",{id:"temporal-service"},"Temporal Service"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/docs/learn-topology-overview.png",alt:"Temporal Overview"}))),Object(a.b)("p",null,"At the core of Temporal is a highly scalable multitentant service. The service exposes all its functionality through a strongly typed ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-proto/blob/master/workflowservice/service.proto"}),"Proto API"),"."),Object(a.b)("p",null,"Internally it depends on a persistent store. Currently, Apache Cassandra and MySQL stores are supported out of the box. For listing workflows using complex predicates, Elasticsearch cluster can be used."),Object(a.b)("p",null,"Temporal service is responsible for keeping workflow state and associated durable timers. It maintains internal queues (called task queues) which are used to dispatch tasks to external workers."),Object(a.b)("p",null,"Temporal service is multitentant. Therefore it is expected that multiple pools of workers implementing different use cases connect to the same service instance. For example, at Uber a single service is used by more than a hundred applications. At the same time some external customers deploy an instance of Temporal service per application. For local development, a local Temporal service instance configured through docker-compose is used."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/docs/temporal-overview.svg",alt:"Temporal Overview"}))),Object(a.b)("h2",{id:"workflow-worker"},"Workflow Worker"),Object(a.b)("p",null,"Temporal reuses terminology from ",Object(a.b)("em",{parentName:"p"},"workflow automation")," namespace. So fault-oblivious stateful code is called workflow."),Object(a.b)("p",null,"The Temporal service does not execute workflow code directly. The workflow code is hosted by an external (from the service point of view) ",Object(a.b)("em",{parentName:"p"},"workflow worker")," process. These processes receive ",Object(a.b)("em",{parentName:"p"},"decision tasks")," that contain events that the workflow is expected to handle from the Temporal service, delivers them to the workflow code, and communicates workflow ",Object(a.b)("em",{parentName:"p"},"decisions")," back to the service."),Object(a.b)("p",null,"As workflow code is external to the service, it can be implemented in any language that can talk service Thrift API. Currently Java and Go clients are production ready. While Python and C# clients are under development. Let us know if you are interested in contributing a client in your preferred language."),Object(a.b)("p",null,"The Temporal service API doesn't impose any specific workflow definition language. So a specific worker can be implemented to execute practically any existing workflow specification. The model the Temporal team chose to support out of the box is based on the idea of durable function. Durable functions are as close as possible to application business logic with minimal plumbing required."),Object(a.b)("h2",{id:"activity-worker"},"Activity Worker"),Object(a.b)("p",null,"Workflow fault-oblivious code is immune to infrastructure failures. But it has to communicate with the imperfect external world where failures are common. All communication to the external world is done through activities. Activities are pieces of code that can perform any application-specific action like calling a service, updating a database record, or downloading a file from Amazon S3. Temporal activities are very feature-rich compared to queuing systems. Example features are task routing to specific processes, infinite retries, heartbeats, and unlimited execution time."),Object(a.b)("p",null,"Activities are hosted by ",Object(a.b)("em",{parentName:"p"},"activity worker")," processes that receive ",Object(a.b)("em",{parentName:"p"},"activity tasks")," from the Temporal service, invoke correspondent activity implementations and report back task completion statuses."),Object(a.b)("h2",{id:"external-clients"},"External Clients"),Object(a.b)("p",null,"Workflow and activity workers host workflow and activity code. But to create a workflow instance (an execution in Temporal terminology) the ",Object(a.b)("inlineCode",{parentName:"p"},"StartWorkflowExecution")," Temporal service API call should be used. Usually, workflows are started by outside entities like UIs, microservices or CLIs."),Object(a.b)("p",null,"These entities can also:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"notify workflows about asynchronous external events in the form of signals"),Object(a.b)("li",{parentName:"ul"},"synchronously query workflow state"),Object(a.b)("li",{parentName:"ul"},"synchronously wait for a workflow completion"),Object(a.b)("li",{parentName:"ul"},"cancel, terminate, restart, and reset workflows"),Object(a.b)("li",{parentName:"ul"},"search for specific workflows using list API")))}p.isMDXComponent=!0},395:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?n.a.createElement(d,l({ref:t},s,{components:r})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);