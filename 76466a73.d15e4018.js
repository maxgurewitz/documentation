(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{271:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(10),i=(r(0),r(395)),a={id:"go-quick-start",title:"Quick Start"},l={id:"version-0.23.1/go-quick-start",isDocsHomePage:!1,title:"Quick Start",description:"This topic helps you install the Temporal server and implement a workflow.",source:"@site/versioned_docs/version-0.23.1/go-quick-start.md",permalink:"/docs/0.23.1/go-quick-start",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/go-quick-start.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Distributed CRON",permalink:"/docs/0.23.1/java-distributed-cron"},next:{title:"SDK Video Tutorial",permalink:"/docs/0.23.1/go-sdk-video-tutorial"},latestVersionMainDocPermalink:"/docs/overview"},c=[{value:"Install Temporal Server Locally",id:"install-temporal-server-locally",children:[]},{value:"Start with an empty directory",id:"start-with-an-empty-directory",children:[]},{value:"Initialize Go Modules and SDK Package Dependency",id:"initialize-go-modules-and-sdk-package-dependency",children:[]},{value:"Implement Activities",id:"implement-activities",children:[{value:"Get User Activity",id:"get-user-activity",children:[]},{value:"Send Greeting Activity",id:"send-greeting-activity",children:[]}]},{value:"Implement Greetings Workflow",id:"implement-greetings-workflow",children:[]},{value:"Host Workflows and Activities inside Worker",id:"host-workflows-and-activities-inside-worker",children:[]},{value:"Start Worker",id:"start-worker",children:[]},{value:"Start workflow execution",id:"start-workflow-execution",children:[]},{value:"Workflow Completes Execution",id:"workflow-completes-execution",children:[]},{value:"Try Go SDK Samples",id:"try-go-sdk-samples",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This topic helps you install the Temporal server and implement a workflow."),Object(i.b)("h2",{id:"install-temporal-server-locally"},"Install Temporal Server Locally"),Object(i.b)("p",null,"To run samples locally you need to run Temporal server locally using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installing-server"}),"instructions"),". "),Object(i.b)("h2",{id:"start-with-an-empty-directory"},"Start with an empty directory"),Object(i.b)("p",null,"Create directory for the project"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"mkdir tutorial-go-sdk\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd tutorial-go-sdk\n")),Object(i.b)("h2",{id:"initialize-go-modules-and-sdk-package-dependency"},"Initialize Go Modules and SDK Package Dependency"),Object(i.b)("p",null,"Initialize Go modules"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> go mod init github.com/temporalio/tutorial-go-sdk\ngo: creating new go.mod: module github.com/temporalio/tutorial-go-sdk\n")),Object(i.b)("p",null,"Add dependency to Temporal Go SDK"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> go get go.temporal.io/temporal@v0.23.1\ngo: downloading go.temporal.io/temporal v0.23.1\ngo: go.temporal.io/temporal upgrade => v0.23.1\n")),Object(i.b)("h2",{id:"implement-activities"},"Implement Activities"),Object(i.b)("h3",{id:"get-user-activity"},"Get User Activity"),Object(i.b)("p",null,"Create file get_user.go"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n\n    "go.temporal.io/temporal/activity"\n)\n\n// GetUser is the implementation for Temporal activity\nfunc GetUser(ctx context.Context) (string, error) {\n    logger := activity.GetLogger(ctx)\n    logger.Info("GetUser activity called")\n    return "Temporal", nil\n}\n')),Object(i.b)("h3",{id:"send-greeting-activity"},"Send Greeting Activity"),Object(i.b)("p",null,"Create file send_greeting.go"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "go.temporal.io/temporal/activity"\n)\n\n// SendGreeting is the implementation for Temporal activity\nfunc SendGreeting(ctx context.Context, user string) error {\n    logger := activity.GetLogger(ctx)\n    logger.Info("SendGreeting activity called")\n\n    fmt.Printf("Greeting sent to user: %v\\n", user)\n    return nil\n}\n')),Object(i.b)("h2",{id:"implement-greetings-workflow"},"Implement Greetings Workflow"),Object(i.b)("p",null,"Create file greetings.go"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "time"\n\n    "go.temporal.io/temporal/workflow"\n    "go.uber.org/zap"\n)\n\n// Greetings is the implementation for Temporal workflow\nfunc Greetings(ctx workflow.Context) error {\n    logger := workflow.GetLogger(ctx)\n    logger.Info("Workflow Greetings started")\n\n    ao := workflow.ActivityOptions{\n        ScheduleToStartTimeout: time.Hour,\n        StartToCloseTimeout:    time.Hour,\n    }\n    ctx = workflow.WithActivityOptions(ctx, ao)\n\n    var user string\n    err := workflow.ExecuteActivity(ctx, GetUser).Get(ctx, &user)\n    if err != nil {\n        return err\n    }\n\n    err = workflow.ExecuteActivity(ctx, SendGreeting, user).Get(ctx, nil)\n    if err != nil {\n        return err\n    }\n\n    logger.Info("Greetings workflow complete", zap.String("user", user))\n    return nil\n}\n')),Object(i.b)("h2",{id:"host-workflows-and-activities-inside-worker"},"Host Workflows and Activities inside Worker"),Object(i.b)("p",null,"Create file main.go"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "go.uber.org/zap"\n\n    "go.temporal.io/temporal/client"\n    "go.temporal.io/temporal/worker"\n)\n\nfunc main() {\n    logger, err := zap.NewDevelopment()\n    if err != nil {\n        panic(err)\n    }\n\n    logger.Info("Zap logger created")\n\n    // The client is a heavyweight object that should be created once\n    serviceClient, err := client.NewClient(client.Options{\n            Logger: logger,\n    })\n\n    if err != nil {\n        logger.Fatal("Unable to start worker", zap.Error(err))\n    }\n\n    worker := worker.New(serviceClient, "tutorial_tl", worker.Options{})\n\n    worker.RegisterWorkflow(Greetings)\n    worker.RegisterActivity(GetUser)\n    worker.RegisterActivity(SendGreeting)\n\n    err = worker.Start()\n    if err != nil {\n        logger.Fatal("Unable to start worker", zap.Error(err))\n    }\n\n    select {}\n}\n')),Object(i.b)("h2",{id:"start-worker"},"Start Worker"),Object(i.b)("p",null,"Run your worker app which hosts workflow and activity implementations"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'> go run *.go\n2020-04-07T22:44:53.073-0700    INFO    tutorial-go-sdk/main.go:19      Zap logger created\n2020-04-07T22:44:53.111-0700    INFO    internal/internal_worker.go:1021        Started Worker  {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@"}\n')),Object(i.b)("h2",{id:"start-workflow-execution"},"Start workflow execution"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> docker run --network=host --rm temporalio/tctl:0.23.1 wf start --tl tutorial_tl -w Greet_Temporal_1 --wt Greetings --et 3600 --dt 10\nStarted Workflow Id: Greet_Temporal_1, run Id: b4f8957a-565c-40ad-8495-15a41338f8f4\n")),Object(i.b)("h2",{id:"workflow-completes-execution"},"Workflow Completes Execution"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'2020-04-07T22:46:32.424-0700    INFO    workflows/greetings.go:14       Workflow Greetings started      {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4"}\n2020-04-07T22:46:32.424-0700    DEBUG   internal/internal_event_handlers.go:466 ExecuteActivity {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4", "ActivityID": "0", "ActivityType": "GetUser"}\n2020-04-07T22:46:32.452-0700    INFO    activities/get_user.go:12       GetUser activity called {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "ActivityID": "0", "ActivityType": "GetUser", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4"}\n2020-04-07T22:46:32.485-0700    DEBUG   internal/internal_event_handlers.go:466 ExecuteActivity {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4", "ActivityID": "1", "ActivityType": "SendGreeting"}\n2020-04-07T22:46:32.505-0700    INFO    activities/send_greeting.go:13  SendGreeting activity called    {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "ActivityID": "1", "ActivityType": "SendGreeting", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4"}\nGreeting sent to user: Temporal\n2020-04-07T22:46:32.523-0700    INFO    workflows/greetings.go:33       Greetings workflow complete     {"Namespace": "default", "TaskList": "tutorial_tl", "WorkerID": "59260@local@", "WorkflowType": "Greetings", "WorkflowID": "Greet_Temporal_1", "RunID": "b4f8957a-565c-40ad-8495-15a41338f8f4", "user": "Temporal"}\n')),Object(i.b)("h2",{id:"try-go-sdk-samples"},"Try Go SDK Samples"),Object(i.b)("p",null,"Check ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples"}),"Go SDK Samples"),"\nand try simple Temporal usage scenario. "))}p.isMDXComponent=!0},395:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||g[d]||i;return r?o.a.createElement(m,l({ref:t},s,{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);