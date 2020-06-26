(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(235)),o={id:"go-activities",title:"Activities"},c={id:"go-activities",title:"Activities",description:"An activity is the implementation of a particular task in the business logic.",source:"@site/docs/go-activities.md",permalink:"/docs/next/go-activities",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/go-activities.md",version:"next",sidebar:"docs",previous:{title:"Creating Workflows",permalink:"/docs/next/go-create-workflows"},next:{title:"Executing Activities",permalink:"/docs/next/go-execute-activity"}},l=[{value:"Overview",id:"overview",children:[{value:"Declaration",id:"declaration",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Registration",id:"registration",children:[]}]},{value:"Failing an Activity",id:"failing-an-activity",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An activity is the implementation of a particular task in the business logic."),Object(r.b)("p",null,"Activities are implemented as functions. Data can be passed directly to an activity via function\nparameters. The parameters can be either basic types or structs, with the only requirement being that\nthe parameters must be serializable. Though it is not required, we recommend that the first parameter\nof an activity function is of type ",Object(r.b)("inlineCode",{parentName:"p"},"context.Context"),", in order to allow the activity to interact with\nother framework methods. The function must return an ",Object(r.b)("inlineCode",{parentName:"p"},"error")," value, and can optionally return a result\nvalue. The result value can be either a basic type or a struct with the only requirement being that\nit is serializable."),Object(r.b)("p",null,"The values passed to activities through invocation parameters or returned through the result value\nare recorded in the execution history. The entire execution history is transferred from the Temporal\nservice to workflow workers with every event that the workflow logic needs to process. A large execution\nhistory can thus adversely impact the performance of your workflow. Therefore, be mindful of the amount\nof data you transfer via activity invocation parameters or return values. Otherwise, no additional\nlimitations exist on activity implementations."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The following example demonstrates a simple activity that accepts a string parameter, appends a word\nto it, and then returns a result."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package sample\n\nimport (\n    "context"\n\n    "go.uber.org/zap"\n\n    "go.temporal.io/temporal/activity"\n)\n\n// SimpleActivity is a sample Temporal activity function that takes one parameter and\n// returns a string containing the parameter value.\nfunc SimpleActivity(ctx context.Context, value string) (string, error) {\n    activity.GetLogger(ctx).Info("SimpleActivity called.", zap.String("Value", value))\n    return "Processed: " + value, nil\n}\n')),Object(r.b)("p",null,"Let's take a look at each component of this activity."),Object(r.b)("h3",{id:"declaration"},"Declaration"),Object(r.b)("p",null,"In the Temporal programing model, an activity is implemented with a function. The function declaration specifies the parameters the activity accepts as well as any values it might return. An activity function can take zero or many activity specific parameters and can return one or two values. It must always at least return an error value. The activity function can accept as parameters and return as results any serializable type."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"func SimpleActivity(ctx context.Context, value string) (string, error)")),Object(r.b)("p",null,"The first parameter to the function is context.Context. This is an optional parameter and can be omitted. This parameter is the standard Go context.\nThe second string parameter is a custom activity specific parameter that can be used to pass data into the activity on start. An activity can have one or more such parameters. All parameters to an activity function must be serializable, which essentially means that params can\u2019t be channels, functions, variadic, or unsafe pointers.\nThe activity declares two return values: string and error. The string return value is used to return the result of the activity. The error return value is used to indicate that an error was encountered during execution."),Object(r.b)("h3",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"You can write activity implementation code in the same way that you would any other Go service code.\nAdditionally, you can use the usual loggers and metrics controllers, and the standard Go concurrency\nconstructs."),Object(r.b)("h4",{id:"heart-beating"},"Heart Beating"),Object(r.b)("p",null,"For long-running activities, Temporal provides an API for the activity code to report both liveness and\nprogress back to the Temporal managed service."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"progress := 0\nfor hasWork {\n    // Send heartbeat message to the server.\n    activity.RecordHeartbeat(ctx, progress)\n    // Do some work.\n    ...\n    progress++\n}\n")),Object(r.b)("p",null,"When an activity times out due to a missed heartbeat, the last value of the details (",Object(r.b)("inlineCode",{parentName:"p"},"progress")," in the\nabove sample) is returned from the ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity")," function as the details field of ",Object(r.b)("inlineCode",{parentName:"p"},"TimeoutError"),"\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"TimeoutType")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"Heartbeat"),"."),Object(r.b)("p",null,"You can also heartbeat an activity from an external source:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"// The client is a heavyweight object that should be created once per process.\nserviceClient, err := client.NewClient(client.Options{\n    HostPort:     HostPort,\n    Namespace:   Namespace,\n    MetricsScope: scope,\n})\n\n// Record heartbeat.\nerr := serviceClient.RecordActivityHeartbeat(ctx, taskToken, details)\n")),Object(r.b)("p",null,"The parameters of the ",Object(r.b)("inlineCode",{parentName:"p"},"RecordActivityHeartbeat")," function are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"taskToken"),": The value of the binary ",Object(r.b)("inlineCode",{parentName:"li"},"TaskToken")," field of the ",Object(r.b)("inlineCode",{parentName:"li"},"ActivityInfo")," struct retrieved inside\nthe activity."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"details"),": The serializable payload containing progress information.")),Object(r.b)("h4",{id:"cancellation"},"Cancellation"),Object(r.b)("p",null,"When an activity is cancelled, or its workflow execution has completed or failed, the context passed\ninto its function is cancelled, which sets its channel\u2019s closed state to ",Object(r.b)("inlineCode",{parentName:"p"},"Done"),". An activity can use that\nto perform any necessary cleanup and abort its execution. Cancellation is only delivered to activities\nthat call ",Object(r.b)("inlineCode",{parentName:"p"},"RecordActivityHeartbeat"),"."),Object(r.b)("h3",{id:"registration"},"Registration"),Object(r.b)("p",null,"To make the activity visible to the worker process hosting it, the activity must be registered via a\ncall to ",Object(r.b)("inlineCode",{parentName:"p"},"activity.Register"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"activity.Register(SimpleActivity)\n")),Object(r.b)("p",null,"This call creates an in-memory mapping inside the worker process between the fully qualified function\nname and the implementation. If a worker receives a request to start an activity execution for an\nactivity type it does not know, it will fail that request."),Object(r.b)("h2",{id:"failing-an-activity"},"Failing an Activity"),Object(r.b)("p",null,"To mark an activity as failed, the activity function must return an error via the ",Object(r.b)("inlineCode",{parentName:"p"},"error")," return value."))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);