(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(6),i=(n(0),n(183)),a={id:"go-versioning",title:"Versioning"},l={id:"go-versioning",title:"Versioning",description:"The definition code of a Temporal workflow must be deterministic because Temporal uses event sourcing",source:"@site/docs/go-versioning.md",permalink:"/docs/go-versioning",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/go-versioning.md",sidebar:"docs",previous:{title:"Testing",permalink:"/docs/go-workflow-testing"},next:{title:"Sessions",permalink:"/docs/go-sessions"}},c=[{value:"workflow.GetVersion()",id:"workflowgetversion",children:[]},{value:"Sanity checking",id:"sanity-checking",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The definition code of a Temporal workflow must be deterministic because Temporal uses event sourcing\nto reconstruct the workflow state by replaying the saved history event data on the workflow\ndefinition code. This means that any incompatible update to the workflow definition code could cause\na non-deterministic issue if not handled correctly."),Object(i.b)("h2",{id:"workflowgetversion"},"workflow.GetVersion()"),Object(i.b)("p",null,"Consider the following workflow definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'func MyWorkflow(ctx workflow.Context, data string) (string, error) {\n        ao := workflow.ActivityOptions{\n                ScheduleToStartTimeout: time.Minute,\n                StartToCloseTimeout:    time.Minute,\n        }\n        ctx = workflow.WithActivityOptions(ctx, ao)\n        var result1 string\n        err := workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n        if err != nil {\n                return "", err\n        }\n        var result2 string\n        err = workflow.ExecuteActivity(ctx, ActivityB, result1).Get(ctx, &result2)\n        return result2, err\n}\n')),Object(i.b)("p",null,"Now let's say we have replaced ActivityA with ActivityC, and deployed the updated code. If there\nis an existing workflow execution that was started by the original version of the workflow code, where\nActivityA had already completed and the result was recorded to history, the new version of the workflow\ncode will pick up that workflow execution and try to resume from there. However, the workflow will fail\nbecause the new code expects a result for ActivityC from the history data, but instead it gets the\nresult for ActivityA. This causes the workflow to fail on the non-deterministic error."),Object(i.b)("p",null,"Thus we use ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.GetVersion().")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'var err error\nv := workflow.GetVersion(ctx, "Step1", workflow.DefaultVersion, 1)\nif v == workflow.DefaultVersion {\n        err = workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n} else {\n        err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n}\nif err != nil {\n        return "", err\n}\n\nvar result2 string\nerr = workflow.ExecuteActivity(ctx, ActivityB, result1).Get(ctx, &result2)\nreturn result2, err\n')),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"workflow.GetVersion()")," is run for the new workflow execution, it records a marker in the workflow\nhistory so that all future calls to ",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion")," for this change Id--",Object(i.b)("inlineCode",{parentName:"p"},"Step 1")," in the example--on this\nworkflow execution will always return the given version number, which is ",Object(i.b)("inlineCode",{parentName:"p"},"1")," in the example."),Object(i.b)("p",null,"If you make an additional change, such as replacing ActivityC with ActivityD, you need to\nadd some additional code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'v := workflow.GetVersion(ctx, "Step1", workflow.DefaultVersion, 2)\nif v == workflow.DefaultVersion {\n        err = workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n} else if v == 1 {\n        err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n} else {\n        err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n}\n')),Object(i.b)("p",null,"Note that we have changed ",Object(i.b)("inlineCode",{parentName:"p"},"maxSupported")," from 1 to 2. A workflow that had already passed this\n",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()")," call before it was introduced will return ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultVersion"),". A workflow that was run\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"maxSupported")," set to 1, will return 1. New workflows will return 2."),Object(i.b)("p",null,"After you are sure that all of the workflow executions prior to version 1 have completed, you can\nremove the code for that version. It should now look like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'v := workflow.GetVersion(ctx, "Step1", 1, 2)\nif v == 1 {\n        err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n} else {\n        err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n}\n')),Object(i.b)("p",null,"You'll note that ",Object(i.b)("inlineCode",{parentName:"p"},"minSupported")," has changed from ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultVersion")," to ",Object(i.b)("inlineCode",{parentName:"p"},"1"),". If an older version of the\nworkflow execution history is replayed on this code, it will fail because the minimum expected version\nis 1. After you are sure that all of the workflow executions for version 1 have completed, then you\ncan remove 1 so that your code would look like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'_ := workflow.GetVersion(ctx, "Step1", 2, 2)\nerr = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n')),Object(i.b)("p",null,"Note that we have preserved the call to ",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()"),". There are two reasons to preserve this call:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"This ensures that if there is a workflow execution still running for an older version, it will\nfail here and not proceed."),Object(i.b)("li",{parentName:"ol"},"If you need to make additional changes for ",Object(i.b)("inlineCode",{parentName:"li"},"Step1"),", such as changing ActivityD to ActivityE, you\nonly need to update ",Object(i.b)("inlineCode",{parentName:"li"},"maxVersion")," from 2 to 3 and branch from there.")),Object(i.b)("p",null,"You only need to preserve the first call to ",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()")," for each ",Object(i.b)("inlineCode",{parentName:"p"},"changeID"),". All subsequent calls to\n",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()")," with the same change Id are safe to remove. If necessary, you can remove the first\n",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()")," call, but you need to ensure the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All executions with an older version are completed."),Object(i.b)("li",{parentName:"ul"},"You can no longer use ",Object(i.b)("inlineCode",{parentName:"li"},"Step1")," for the changeId. If you need to make changes to that same part in\nthe future, such as change from ActivityD to ActivityE, you would need to use a different changeId\nlike ",Object(i.b)("inlineCode",{parentName:"li"},"Step1-fix2"),", and start minVersion from DefaultVersion again. The code would look like the\nfollowing:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'v := workflow.GetVersion(ctx, "Step1-fix2", workflow.DefaultVersion, 1)\nif v == workflow.DefaultVersion {\n        err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n} else {\n        err = workflow.ExecuteActivity(ctx, ActivityE, data).Get(ctx, &result1)\n}\n')),Object(i.b)("p",null,"Upgrading a workflow is straightforward if you don't need to preserve your currently running\nworkflow executions. You can simply terminate all of the currently running workflow executions and\nsuspend new ones from being created while you deploy the new version of your workflow code, which does\nnot use ",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()"),", and then resume workflow creation. However, that is often not the case, and\nyou need to take care of the currently running workflow executions, so using ",Object(i.b)("inlineCode",{parentName:"p"},"GetVersion()")," to update\nyour code is the method to use."),Object(i.b)("p",null,"However, if you want your currently running workflows to proceed based on the current workflow logic,\nbut you want to ensure new workflows are running on new logic, you can define your workflow as a\nnew ",Object(i.b)("inlineCode",{parentName:"p"},"WorkflowType"),", and change your start path (calls to ",Object(i.b)("inlineCode",{parentName:"p"},"StartWorkflow()"),") to start the new workflow\ntype."),Object(i.b)("h2",{id:"sanity-checking"},"Sanity checking"),Object(i.b)("p",null,"The Temporal client SDK performs a sanity check to help prevent obvious incompatible changes.\nThe sanity check verifies whether a decision made in replay matches the event recorded in history,\nin the same order. The decision is generated by calling any of the following methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"workflow.ExecuteActivity()"),Object(i.b)("li",{parentName:"ul"},"workflow.ExecuteChildWorkflow()"),Object(i.b)("li",{parentName:"ul"},"workflow.NewTimer()"),Object(i.b)("li",{parentName:"ul"},"workflow.Sleep()"),Object(i.b)("li",{parentName:"ul"},"workflow.SideEffect()"),Object(i.b)("li",{parentName:"ul"},"workflow.RequestCancelWorkflow()"),Object(i.b)("li",{parentName:"ul"},"workflow.SignalExternalWorkflow()")),Object(i.b)("p",null,"Adding, removing, or reordering any of the above methods triggers the sanity check and results in\na non-deterministic error."),Object(i.b)("p",null,"The sanity check does not perform a thorough check. For example, it does not check on the activity's\ninput arguments or the timer duration. If the check is enforced on every property, then it becomes\ntoo restricted and harder to maintain the workflow code. For example, if you move your activity code\nfrom one package to another package, that changes the ",Object(i.b)("inlineCode",{parentName:"p"},"ActivityType"),", which technically becomes a different\nactivity. But, we don't want to fail on that change, so we only check the function name part of the\n",Object(i.b)("inlineCode",{parentName:"p"},"ActivityType"),"."))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(a,".").concat(d)]||p[d]||w[d]||i;return n?r.a.createElement(f,l({ref:t},s,{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);