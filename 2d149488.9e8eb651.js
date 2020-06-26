(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(235)),i={id:"go-signals",title:"Signals"},l={id:"go-signals",title:"Signals",description:"**Signals** provide a mechanism to send data directly to a running workflow. Previously, you had",source:"@site/docs/go-signals.md",permalink:"/docs/next/go-signals",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/go-signals.md",version:"next",sidebar:"docs",previous:{title:"Error Handling",permalink:"/docs/next/go-error-handling"},next:{title:"ContinueAsNew",permalink:"/docs/next/go-continue-as-new"}},c=[{value:"SignalWithStart",id:"signalwithstart",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Signals")," provide a mechanism to send data directly to a running workflow. Previously, you had\ntwo options for passing data to the workflow implementation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Via start parameters"),Object(o.b)("li",{parentName:"ul"},"As return values from activities")),Object(o.b)("p",null,"With start parameters, we could only pass in values before workflow execution began."),Object(o.b)("p",null,"Return values from activities allowed us to pass information to a running workflow, but this\napproach comes with its own complications. One major drawback is reliance on polling. This means\nthat the data needs to be stored in a third-party location until it's ready to be picked up by\nthe activity. Further, the lifecycle of this activity requires management, and the activity\nrequires manual restart if it fails before acquiring the data."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Signals"),", on the other hand, provide a fully asynchronous and durable mechanism for providing data to\na running workflow. When a signal is received for a running workflow, Temporal persists the event\nand the payload in the workflow history. The workflow can then process the signal at any time\nafterwards without the risk of losing the information. The workflow also has the option to stop\nexecution by blocking on a ",Object(o.b)("strong",{parentName:"p"},"signal channel"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'var signalVal string\nsignalChan := workflow.GetSignalChannel(ctx, signalName)\n\ns := workflow.NewSelector(ctx)\ns.AddReceive(signalChan, func(c workflow.Channel, more bool) {\n    c.Receive(ctx, &signalVal)\n    workflow.GetLogger(ctx).Info("Received signal!", zap.String("signal", signalName), zap.String("value", signalVal))\n})\ns.Select(ctx)\n\nif len(signalVal) > 0 && signalVal != "SOME_VALUE" {\n    return errors.New("signalVal")\n}\n')),Object(o.b)("p",null,"In the example above, the workflow code uses ",Object(o.b)("strong",{parentName:"p"},"workflow.GetSignalChannel")," to open a\n",Object(o.b)("strong",{parentName:"p"},"workflow.Channel")," for the named signal. We then use a ",Object(o.b)("strong",{parentName:"p"},"workflow.Selector")," to wait on this\nchannel and process the payload received with the signal."),Object(o.b)("h2",{id:"signalwithstart"},"SignalWithStart"),Object(o.b)("p",null,"You may not know if a workflow is running and can accept a signal. The\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"client.SignalWithStartWorkflow")," API\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"client.SignalWithStartWorkflow")," API\nallows you to send a signal to the current workflow instance if one exists or to create a new\nrun and then send the signal. ",Object(o.b)("inlineCode",{parentName:"p"},"SignalWithStartWorkflow")," therefore doesn't take a run Id as a\nparameter."))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(i,".").concat(f)]||u[f]||g[f]||o;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);