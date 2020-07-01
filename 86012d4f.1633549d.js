(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(1),o=r(7),n=(r(0),r(359)),i={id:"go-tracing",title:"Tracing and Context Propagation"},p={id:"version-0.23.1/go-tracing",isDocsHomePage:!1,title:"Tracing and Context Propagation",description:"Tracing",source:"@site/versioned_docs/version-0.23.1/go-tracing.md",permalink:"/docs/0.23.1/go-tracing",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/go-tracing.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Distributed CRON",permalink:"/docs/0.23.1/go-distributed-cron"},latestVersionMainDocPermalink:"/docs/overview"},c=[{value:"Tracing",id:"tracing",children:[]},{value:"Context Propagation",id:"context-propagation",children:[{value:"Server-Side Headers Support",id:"server-side-headers-support",children:[]},{value:"Context Propagators",id:"context-propagators",children:[]}]},{value:"Q &amp; A",id:"q--a",children:[{value:"Is there a complete example?",id:"is-there-a-complete-example",children:[]},{value:"Can I configure multiple context propagators?",id:"can-i-configure-multiple-context-propagators",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"tracing"},"Tracing"),Object(n.b)("p",null,"The Go client provides distributed tracing support through ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://opentracing.io/"}),"OpenTracing"),". Tracing can be\nconfigured by providing an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/github.com/opentracing/opentracing-go#Tracer"}),"opentracing.Tracer"),"\nimplementation in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#ClientOptions"}),"ClientOptions"),"\nand ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#WorkerOptions"}),"WorkerOptions")," during client and worker instantiation,\nrespectively. Tracing allows\nyou to view the call graph of a workflow along with its activities, child workflows etc. For more details on how to\nconfigure and leverage tracing, see the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://opentracing.io/docs/getting-started/"}),"OpenTracing documentation"),".\nThe OpenTracing support has been validated using ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jaegertracing.io/"}),"Jaeger"),", but other implementations\nmentioned ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://opentracing.io/docs/supported-tracers/"}),"here")," should also work. Tracing support utilizes generic context\npropagation support provided by the client."),Object(n.b)("h2",{id:"context-propagation"},"Context Propagation"),Object(n.b)("p",null,"We provide a standard way to propagate custom context across a workflow.\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#ClientOptions"}),"ClientOptions")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#WorkerOptions"}),"WorkerOptions"),"\nallow configuring a context propagator. The context propagator extracts and passes on information present in the ",Object(n.b)("inlineCode",{parentName:"p"},"context.Context"),"\nand ",Object(n.b)("inlineCode",{parentName:"p"},"workflow.Context")," objects across the workflow. Once a context propagator is configured, you should be able to access the required values\nin the context objects as you would normally do in Go.\nFor a sample, the Go client implements a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-sdk/blob/master/internal/tracer.go"}),"tracing context propagator"),"."),Object(n.b)("h3",{id:"server-side-headers-support"},"Server-Side Headers Support"),Object(n.b)("p",null,"On the server side, Temporal provides a mechanism to propagate what it calls headers across different workflow\ntransitions."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-proto"}),"message Header {\n    map<string, bytes> fields = 1;\n}\n")),Object(n.b)("p",null,"The client leverages this to pass around selected context information. ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#HeaderReader"}),"HeaderReader"),"\nand ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#HeaderWriter"}),"HeaderWriter")," are interfaces\nthat allow reading and writing to the Temporal server headers. The client already provides ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-sdk/blob/master/internal/headers.go"}),"implementations"),"\nfor these. ",Object(n.b)("inlineCode",{parentName:"p"},"HeaderWriter")," sets a field in the header. Headers is a map, so setting a value for the the same key\nmultiple times will overwrite the previous values. ",Object(n.b)("inlineCode",{parentName:"p"},"HeaderReader")," iterates through the headers map and runs the\nprovided handler function on each key/value pair, allowing you to deal with the fields you are interested in."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"type HeaderWriter interface {\n  Set(string, []byte)\n}\n\ntype HeaderReader interface {\n  ForEachKey(handler func(string, []byte) error) error\n}\n")),Object(n.b)("h3",{id:"context-propagators"},"Context Propagators"),Object(n.b)("p",null,"Context propagators require implementing the following four methods to propagate selected context across a workflow:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Inject")," is meant to pick out the context keys of interest from a Go ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/pkg/context/#Context"}),"context.Context")," object and write that into the\nheaders using the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#HeaderWriter"}),"HeaderWriter")," interface"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"InjectFromWorkflow")," is the same as above, but operates on a ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#Context"}),"workflow.Context")," object"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Extract")," reads the headers and places the information of interest back into the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/pkg/context/#Context"}),"context.Context")," object"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ExtractToWorkflow")," is the same as above, but operates on a ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#Context"}),"workflow.Context")," object")),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-sdk/blob/master/internal/tracer.go"}),"tracing context propagator"),"\nshows a sample implementation of context propagation."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"type ContextPropagator interface {\n  Inject(context.Context, HeaderWriter) error\n\n  Extract(context.Context, HeaderReader) (context.Context, error)\n\n  InjectFromWorkflow(Context, HeaderWriter) error\n\n  ExtractToWorkflow(Context, HeaderReader) (Context, error)\n}\n")),Object(n.b)("h2",{id:"q--a"},"Q & A"),Object(n.b)("h3",{id:"is-there-a-complete-example"},"Is there a complete example?"),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples/blob/master/ctxpropagation/workflow.go"}),"context propagation sample"),"\nconfigures a custom context propagator and shows context propagation of custom keys across a workflow and an activity."),Object(n.b)("h3",{id:"can-i-configure-multiple-context-propagators"},"Can I configure multiple context propagators?"),Object(n.b)("p",null,"Yes, we recommended that you configure multiple context propagators with each propagator meant to propagate a particular type of context."))}s.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),g=a,m=b["".concat(i,".").concat(g)]||b[g]||d[g]||n;return r?o.a.createElement(m,p({ref:t},l,{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);