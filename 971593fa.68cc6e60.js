(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{263:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return s}));var n=o(1),r=o(7),i=(o(0),o(359)),a={id:"go-child-workflows",title:"Child Workflows"},l={id:"go-child-workflows",isDocsHomePage:!1,title:"Child Workflows",description:"workflow.ExecuteChildWorkflow enables the scheduling of other workflows from within a workflow's",source:"@site/docs/go-child-workflows.md",permalink:"/docs/next/go-child-workflows",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/go-child-workflows.md",version:"next",sidebar:"docs",previous:{title:"Executing Activities",permalink:"/docs/next/go-execute-activity"},next:{title:"Activity and Workflow Retries",permalink:"/docs/next/go-retries"},latestVersionMainDocPermalink:"/docs/overview"},c=[],p={rightToc:c};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildWorkflow")," enables the scheduling of other workflows from within a workflow's\nimplementation. The parent workflow has the ability to monitor and impact the lifecycle of the child\nworkflow, similar to the way it does for an activity that it invoked."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'cwo := workflow.ChildWorkflowOptions{\n        // Do not specify WorkflowId if you want Temporal to generate a unique Id for the child execution.\n        WorkflowId:                   "BID-SIMPLE-CHILD-WORKFLOW",\n        ExecutionStartToCloseTimeout: time.Minute * 30,\n}\nctx = workflow.WithChildWorkflowOptions(ctx, cwo)\n\nvar result string\nfuture := workflow.ExecuteChildWorkflow(ctx, SimpleChildWorkflow, value)\nif err := future.Get(ctx, &result); err != nil {\n        workflow.GetLogger(ctx).Error("SimpleChildWorkflow failed.", zap.Error(err))\n        return err\n}\n')),Object(i.b)("p",null,"Let's take a look at each component of this call."),Object(i.b)("p",null,"Before calling ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildworkflow()"),", you must configure ",Object(i.b)("inlineCode",{parentName:"p"},"ChildWorkflowOptions")," for the\ninvocation. These options customize various execution timeouts, and are passed in by creating a child\ncontext from the initial context and overwriting the desired values. The child context is then passed\ninto the ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildWorkflow()")," call. If multiple activities are sharing the same option\nvalues, then the same context instance can be used when calling ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildworkflow()"),"."),Object(i.b)("p",null,"The first parameter in the call is the required ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.Context")," object. This type is a copy of\n",Object(i.b)("inlineCode",{parentName:"p"},"context.Context")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"Done()")," method returning ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.Channel")," instead of the native Go ",Object(i.b)("inlineCode",{parentName:"p"},"chan"),"."),Object(i.b)("p",null,"The second parameter is the function that we registered as a workflow function. This parameter can\nalso be a string representing the fully qualified name of the workflow function. The benefit of this\nis that when you pass in the actual function object, the framework can validate workflow parameters."),Object(i.b)("p",null,"The remaining parameters are passed to the workflow as part of the call. In our example, we have a\nsingle parameter: ",Object(i.b)("inlineCode",{parentName:"p"},"value"),". This list of parameters must match the list of parameters declared by\nthe workflow function."),Object(i.b)("p",null,"The method call returns immediately and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.Future"),". This allows you to execute more\ncode without having to wait for the scheduled workflow to complete."),Object(i.b)("p",null,"When you are ready to process the results of the workflow, call the ",Object(i.b)("inlineCode",{parentName:"p"},"Get()")," method on the returned future\nobject. The parameters to this method is the ",Object(i.b)("inlineCode",{parentName:"p"},"ctx")," object we passed to the\n",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildWorkflow()")," call and an output parameter that will receive the output of the\nworkflow. The type of the output parameter must match the type of the return value declared by the\nworkflow function. The ",Object(i.b)("inlineCode",{parentName:"p"},"Get()")," method will block until the workflow completes and results are\navailable."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildWorkflow()")," function is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()"),". All of the\npatterns described for using ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteActivity()")," apply to the ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.ExecuteChildWorkflow()"),"\nfunction as well."),Object(i.b)("p",null,"When a parent workflow is cancelled by the user, the child workflow can be cancelled or abandoned\nbased on a configurable child policy."))}s.isMDXComponent=!0},359:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},w=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),w=n,d=u["".concat(a,".").concat(w)]||u[w]||f[w]||i;return o?r.a.createElement(d,l({ref:t},p,{components:o})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}w.displayName="MDXCreateElement"}}]);