(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(1),i=n(10),s=(n(0),n(395)),r={id:"go-sessions",title:"Sessions"},a={id:"version-0.26.0/go-sessions",isDocsHomePage:!1,title:"Sessions",description:"The session framework provides a straightforward interface for scheduling multiple activities on a single worker without requiring you to manually specify the task queue name. It also includes features like concurrent session limitation and worker failure detection.",source:"@site/versioned_docs/version-0.26.0/go-sessions.md",permalink:"/docs/go-sessions",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/go-sessions.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Versioning",permalink:"/docs/go-versioning"},next:{title:"Distributed CRON",permalink:"/docs/go-distributed-cron"}},c=[{value:"Use Cases",id:"use-cases",children:[]},{value:"Basic Usage",id:"basic-usage",children:[{value:"Sample Code",id:"sample-code",children:[]}]},{value:"Session Metadata",id:"session-metadata",children:[]},{value:"Concurrent Session Limitation",id:"concurrent-session-limitation",children:[]},{value:"Recreate Session",id:"recreate-session",children:[]},{value:"Q &amp; A",id:"q--a",children:[{value:"Is there a complete example?",id:"is-there-a-complete-example",children:[]},{value:"What happens to my activity if the worker dies?",id:"what-happens-to-my-activity-if-the-worker-dies",children:[]},{value:"Is the concurrent session limitation per process or per host?",id:"is-the-concurrent-session-limitation-per-process-or-per-host",children:[]}]},{value:"Future Work",id:"future-work",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The session framework provides a straightforward interface for scheduling multiple activities on a single worker without requiring you to manually specify the task queue name. It also includes features like ",Object(s.b)("strong",{parentName:"p"},"concurrent session limitation")," and ",Object(s.b)("strong",{parentName:"p"},"worker failure detection"),"."),Object(s.b)("h2",{id:"use-cases"},"Use Cases"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"File Processing"),": You may want to implement a workflow that can download a file, process it, and then upload the modified version. If these three steps are implemented as three different activities, all of them should be executed by the same worker.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Machine Learning Model Training"),": Training a machine learning model typically involves three stages: download the data set, optimize the model, and upload the trained parameter. Since the models may consume a large amount of resources (GPU memory for example), the number of models processed on a host needs to be limited."))),Object(s.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(s.b)("p",null,"Before using the session framework to write your workflow code, you need to configure your worker to process sessions. To do that, set the ",Object(s.b)("inlineCode",{parentName:"p"},"EnableSessionWorker")," field of ",Object(s.b)("inlineCode",{parentName:"p"},"worker.Options")," to ",Object(s.b)("inlineCode",{parentName:"p"},"true")," when starting your worker."),Object(s.b)("p",null,"The most important APIs provided by the session framework are ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.CreateSession()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.CompleteSession()"),". The basic idea is that all the activities executed within a session will be processed by the same worker and these two APIs allow you to create new sessions and close them after all activities finish executing."),Object(s.b)("p",null,"Here's a more detailed description of these two APIs:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"type SessionOptions struct {\n  // ExecutionTimeout: required, no default.\n  //     Specifies the maximum amount of time the session can run.\n  ExecutionTimeout time.Duration\n\n  // CreationTimeout: required, no default.\n  //     Specifies how long session creation can take before returning an error.\n  CreationTimeout  time.Duration\n}\n\nfunc CreateSession(ctx Context, sessionOptions *SessionOptions) (Context, error)\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CreateSession()")," takes in ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.Context"),", ",Object(s.b)("inlineCode",{parentName:"p"},"sessionOptions")," and returns a new context which contains metadata information of the created session (referred to as the ",Object(s.b)("strong",{parentName:"p"},"session context")," below). When it's called, it will check the task queue name specified in the ",Object(s.b)("inlineCode",{parentName:"p"},"ActivityOptions")," (or in the ",Object(s.b)("inlineCode",{parentName:"p"},"StartWorkflowOptions")," if the task queue name is not specified in ",Object(s.b)("inlineCode",{parentName:"p"},"ActivityOptions"),"), and create the session on one of the workers which is polling that task queue."),Object(s.b)("p",null,"The returned session context should be used to execute all activities belonging to the session. The context will be cancelled if the worker executing this session dies or ",Object(s.b)("inlineCode",{parentName:"p"},"CompleteSession()")," is called. When using the returned session context to execute activities, a ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.ErrSessionFailed")," error may be returned if the session framework detects that the worker executing this session has died. The failure of your activities won't affect the state of the session, so you still need to handle the errors returned from your activities and call ",Object(s.b)("inlineCode",{parentName:"p"},"CompleteSession()")," if necessary."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CreateSession()")," will return an error if the context passed in already contains an open session. If all the workers are currently busy and unable to handle new sessions, the framework will keep retrying until the ",Object(s.b)("inlineCode",{parentName:"p"},"CreationTimeout")," you specified in ",Object(s.b)("inlineCode",{parentName:"p"},"SessionOptions")," has passed before returning an error (check the ",Object(s.b)("strong",{parentName:"p"},"Concurrent Session Limitation")," section for more details)."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"func CompleteSession(ctx Context)\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CompleteSession()")," releases the resources reserved on the worker, so it's important to call it as soon as you no longer need the session. It will cancel the session context and therefore all the activities using that session context. Note that it's safe to call ",Object(s.b)("inlineCode",{parentName:"p"},"CompleteSession()")," on a failed session, meaning that you can call it from a ",Object(s.b)("inlineCode",{parentName:"p"},"defer")," function after the session is successfully created."),Object(s.b)("h3",{id:"sample-code"},"Sample Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"func FileProcessingWorkflow(ctx workflow.Context, fileID string) (err error) {\n  ao := workflow.ActivityOptions{\n    ScheduleToStartTimeout: time.Second * 5,\n    StartToCloseTimeout:    time.Minute,\n  }\n  ctx = workflow.WithActivityOptions(ctx, ao)\n\n  so := &workflow.SessionOptions{\n    CreationTimeout:  time.Minute,\n    ExecutionTimeout: time.Minute,\n  }\n  sessionCtx, err := workflow.CreateSession(ctx, so)\n  if err != nil {\n    return err\n  }\n  defer workflow.CompleteSession(sessionCtx)\n\n  var fInfo *fileInfo\n  err = workflow.ExecuteActivity(sessionCtx, downloadFileActivityName, fileID).Get(sessionCtx, &fInfo)\n  if err != nil {\n    return err\n  }\n\n  var fInfoProcessed *fileInfo\n  err = workflow.ExecuteActivity(sessionCtx, processFileActivityName, *fInfo).Get(sessionCtx, &fInfoProcessed)\n  if err != nil {\n    return err\n  }\n\n  return workflow.ExecuteActivity(sessionCtx, uploadFileActivityName, *fInfoProcessed).Get(sessionCtx, nil)\n}\n")),Object(s.b)("h2",{id:"session-metadata"},"Session Metadata"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"type SessionInfo struct {\n  // A unique Id for the session\n  SessionID         string\n\n  // The hostname of the worker that is executing the session\n  HostName          string\n\n  // ... other unexported fields\n}\n\nfunc GetSessionInfo(ctx Context) *SessionInfo\n")),Object(s.b)("p",null,"The session context also stores some session metadata, which can be retrieved by the ",Object(s.b)("inlineCode",{parentName:"p"},"GetSessionInfo()")," API. If the context passed in doesn't contain any session metadata, this API will return a ",Object(s.b)("inlineCode",{parentName:"p"},"nil")," pointer."),Object(s.b)("h2",{id:"concurrent-session-limitation"},"Concurrent Session Limitation"),Object(s.b)("p",null,"To limit the number of concurrent sessions running on a worker, set the ",Object(s.b)("inlineCode",{parentName:"p"},"MaxConcurrentSessionExecutionSize")," field of ",Object(s.b)("inlineCode",{parentName:"p"},"worker.Options")," to the desired value. By default this field is set to a very large value, so there's no need to manually set it if no limitation is needed."),Object(s.b)("p",null,"If a worker hits this limitation, it won't accept any new ",Object(s.b)("inlineCode",{parentName:"p"},"CreateSession()")," requests until one of the existing sessions is completed. ",Object(s.b)("inlineCode",{parentName:"p"},"CreateSession()")," will return an error if the session can't be created within ",Object(s.b)("inlineCode",{parentName:"p"},"CreationTimeout"),"."),Object(s.b)("h2",{id:"recreate-session"},"Recreate Session"),Object(s.b)("p",null,"For long-running sessions, you may want to use the ",Object(s.b)("inlineCode",{parentName:"p"},"ContinueAsNew")," feature to split the workflow into multiple runs when all activities need to be executed by the same worker. The ",Object(s.b)("inlineCode",{parentName:"p"},"RecreateSession()")," API is designed for such a use case."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"func RecreateSession(ctx Context, recreateToken []byte, sessionOptions *SessionOptions) (Context, error)\n")),Object(s.b)("p",null,"Its usage is the same as ",Object(s.b)("inlineCode",{parentName:"p"},"CreateSession()")," except that it also takes in a ",Object(s.b)("inlineCode",{parentName:"p"},"recreateToken"),", which is needed to create a new session on the same worker as the previous one. You can get the token by calling the ",Object(s.b)("inlineCode",{parentName:"p"},"GetRecreateToken()")," method of the ",Object(s.b)("inlineCode",{parentName:"p"},"SessionInfo")," object."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"token := workflow.GetSessionInfo(sessionCtx).GetRecreateToken()\n")),Object(s.b)("h2",{id:"q--a"},"Q & A"),Object(s.b)("h3",{id:"is-there-a-complete-example"},"Is there a complete example?"),Object(s.b)("p",null,"Yes, the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples/blob/master/cmd/samples/fileprocessing/workflow.go"}),"file processing example")," in the temporal-go-samples repo has been updated to use the session framework."),Object(s.b)("h3",{id:"what-happens-to-my-activity-if-the-worker-dies"},"What happens to my activity if the worker dies?"),Object(s.b)("p",null,"If your activity has already been scheduled, it will be cancelled. If not, you will get a ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.ErrSessionFailed")," error when you call ",Object(s.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),"."),Object(s.b)("h3",{id:"is-the-concurrent-session-limitation-per-process-or-per-host"},"Is the concurrent session limitation per process or per host?"),Object(s.b)("p",null,"It's per worker process, so make sure there's only one worker process running on the host if you plan to use that feature."),Object(s.b)("h2",{id:"future-work"},"Future Work"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"})),Object(s.b)("p",null,"Right now a session is considered failed if the worker process dies. However, for some use cases, you may only care whether worker host is alive or not. For these uses cases, the session should be automatically re-established if the worker process is restarted."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"})),Object(s.b)("p",null,"The current implementation assumes that all sessions are consuming the same type of resource and there's only one global limitation. Our plan is to allow you to specify what type of resource your session will consume and enforce different limitations on different types of resources."))}p.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||s;return n?i.a.createElement(m,a({ref:t},l,{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var l=2;l<s;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);