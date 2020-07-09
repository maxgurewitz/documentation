(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{266:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return w}));var n=o(1),r=o(10),a=(o(0),o(395)),i={id:"java-starting-workflow-executions",title:"Starting workflow executions"},l={id:"version-0.23.1/java-starting-workflow-executions",isDocsHomePage:!1,title:"Starting workflow executions",description:"A workflow interface that executes a workflow requires initializing a WorkflowClient instance, creating",source:"@site/versioned_docs/version-0.23.1/java-starting-workflow-executions.md",permalink:"/docs/0.23.1/java-starting-workflow-executions",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/java-starting-workflow-executions.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Implementing Workflows",permalink:"/docs/0.23.1/java-implementing-workflows"},next:{title:"Activity Interface",permalink:"/docs/0.23.1/java-activity-interface"},latestVersionMainDocPermalink:"/docs/overview"},c=[],s={rightToc:c};function w(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A workflow interface that executes a workflow requires initializing a ",Object(a.b)("inlineCode",{parentName:"p"},"WorkflowClient")," instance, creating\na client side stub to the workflow, and then calling a method annotated with @WorkflowMethod."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"    // service and client are heavyweight objects that should be created once per process lifetime. \n    WorkflowServiceStubs service = WorkflowServiceStubs.newInstance();\n    WorkflowClient client = WorkflowClient.newInstance(service);\n    // Create a new workflow stub per each workflow start\n    FileProcessingWorkflow workflow = workflowClient.newWorkflowStub(FileProcessingWorkflow.class);\n")),Object(a.b)("p",null,"There are two ways to start workflow execution: asynchronously and synchronously. Asynchronous start initiates a workflow execution and immediately returns to the caller. This is the most common way to start workflows in production code. Synchronous invocation starts a workflow\nand then waits for its completion. If the process that started the workflow crashes or stops waiting, the workflow continues executing.\nBecause workflows are potentially long running, and crashes of clients happen, this is not very commonly found in production use."),Object(a.b)("p",null,"Asynchronous start:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Returns as soon as the workflow starts.\nWorkflowExecution workflowExecution = WorkflowClient.start(workflow::processFile, workflowArgs);\n\nSystem.out.println("Started process file workflow with workflowId=\\"" + workflowExecution.getWorkflowId()\n                    + "\\" and runId=\\"" + workflowExecution.getRunId() + "\\"");\n')),Object(a.b)("p",null,"Synchronous start:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Start a workflow and then wait for a result.\n// Note that if the waiting process is killed, the workflow will continue execution.\nString result = workflow.processFile(workflowArgs);\n")),Object(a.b)("p",null,"If you need to wait for a workflow completion after an asynchronous start, the most straightforward way\nis to call the blocking version again. If ",Object(a.b)("inlineCode",{parentName:"p"},"WorkflowOptions.WorkflowIdReusePolicy")," is not ",Object(a.b)("inlineCode",{parentName:"p"},"AllowDuplicate"),", then instead\nof throwing ",Object(a.b)("inlineCode",{parentName:"p"},"DuplicateWorkflowException"),", it reconnects to an existing workflow and waits for its completion.\nThe following example shows how to do this from a different process than the one that started the workflow. All this process\nneeds is a ",Object(a.b)("inlineCode",{parentName:"p"},"WorkflowId"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"WorkflowExecution execution = new WorkflowExecution().setWorkflowId(workflowId);\nFileProcessingWorkflow workflow = workflowClient.newWorkflowStub(execution);\n// Returns result potentially waiting for workflow to complete.\nString result = workflow.processFile(workflowArgs);\n")))}w.isMDXComponent=!0},395:function(e,t,o){"use strict";o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),w=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},f=function(e){var t=w(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=w(o),p=n,d=f["".concat(i,".").concat(p)]||f[p]||u[p]||a;return o?r.a.createElement(d,l({ref:t},s,{components:o})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);