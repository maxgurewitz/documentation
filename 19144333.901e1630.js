(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{169:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(1),r=o(10),a=(o(0),o(395)),l={id:"learn-cli",title:"Command Line Interface"},i={id:"version-0.26.0/learn-cli",isDocsHomePage:!1,title:"Command Line Interface",description:"The Temporal CLI is a command-line tool you can use to perform various tasks on a Temporal server. It can perform",source:"@site/versioned_docs/version-0.26.0/learn-cli.md",permalink:"/docs/learn-cli",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/learn-cli.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Filtering Workflows",permalink:"/docs/learn-workflow-filtering"},next:{title:"Quick Start",permalink:"/docs/java-quick-start"}},c=[{value:"Using the CLI",id:"using-the-cli",children:[]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Quick Start",id:"quick-start",children:[{value:"Namespace operation examples",id:"namespace-operation-examples",children:[]},{value:"Workflow operation examples",id:"workflow-operation-examples",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Temporal CLI is a command-line tool you can use to perform various tasks on a Temporal server. It can perform\nnamespace operations such as register, update, and describe as well as workflow operations like start\nworkflow, show workflow history, and signal workflow."),Object(a.b)("h2",{id:"using-the-cli"},"Using the CLI"),Object(a.b)("p",null,"The Temporal CLI can be used directly from the Docker Hub image ",Object(a.b)("em",{parentName:"p"},"temporalio/tctl")," or by building the CLI tool\nlocally."),Object(a.b)("p",null,"Example of using the docker image to describe a namespace:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run --rm temporalio/tctl:0.26.0 --namespace samples-namespace namespace describe\n")),Object(a.b)("p",null,'On Docker versions 18.03 and later, you may get a "connection refused" error. You can work around this by setting the host to "host.docker.internal" (see ',Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds"}),"here")," for more info)."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"docker run --network=host --rm temporalio/tctl:0.26.0 --namespace samples-namespace namespace describe\n")),Object(a.b)("p",null,"To build the CLI tool locally, clone the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal"}),"Temporal server repo")," and run\n",Object(a.b)("inlineCode",{parentName:"p"},"make bins"),". This produces an executable called ",Object(a.b)("inlineCode",{parentName:"p"},"tctl"),". With a local build, the same command to\ndescribe a namespace would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl --namespace samples-namespace namespace describe\n")),Object(a.b)("p",null,"The example commands below will use ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl")," for brevity."),Object(a.b)("h2",{id:"environment-variables"},"Environment variables"),Object(a.b)("p",null,"Setting environment variables for repeated parameters can shorten the CLI commands."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TEMPORAL_CLI_ADDRESS")," - host:port for Temporal frontend service, the default is for the local server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TEMPORAL_CLI_NAMESPACE")," - default workflow namespace, so you don't need to specify ",Object(a.b)("inlineCode",{parentName:"li"},"--namespace"))),Object(a.b)("h2",{id:"quick-start"},"Quick Start"),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl")," for help on top level commands and global options\nRun ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl namespace")," for help on namespace operations\nRun ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl workflow")," for help on workflow operations\nRun ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl taskqueue")," for help on task queue operations\n(",Object(a.b)("inlineCode",{parentName:"p"},"./tctl help"),", ",Object(a.b)("inlineCode",{parentName:"p"},"./tctl help [namespace|workflow]")," will also print help messages)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," make sure you have a Temporal server running before using CLI"),Object(a.b)("h3",{id:"namespace-operation-examples"},"Namespace operation examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Register a new namespace named "samples-namespace":')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl --namespace samples-namespace namespace register --global_namespace false\n# OR using short alias\n./tctl --ns samples-namespace n re --gd false\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'View "samples-namespace" details:')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl --namespace samples-namespace namespace describe\n")),Object(a.b)("h3",{id:"workflow-operation-examples"},"Workflow operation examples"),Object(a.b)("p",null,"The following examples assume the TEMPORAL_CLI_NAMESPACE environment variable is set."),Object(a.b)("h4",{id:"run-workflow"},"Run workflow"),Object(a.b)("p",null,"Start a workflow and see its progress. This command doesn't finish until workflow completes."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl workflow run --tl helloWorldGroup --wt main.Workflow --et 60 -i '\"temporal\"'\n\n# view help messages for workflow run\n./tctl workflow run -h\n")),Object(a.b)("p",null,"Brief explanation:\nTo run a workflow, the user must specify the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Task queue name (--tl)"),Object(a.b)("li",{parentName:"ol"},"Workflow type (--wt)"),Object(a.b)("li",{parentName:"ol"},"Execution start to close timeout in seconds (--et)"),Object(a.b)("li",{parentName:"ol"},"Input in JSON format (--i) (optional)")),Object(a.b)("p",null,"example above uses ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples/blob/master/cmd/samples/recipes/helloworld/helloworld_workflow.go"}),"this sample workflow"),"\nand takes a string as input with the ",Object(a.b)("inlineCode",{parentName:"p"},"-i '\"temporal\"'")," parameter. Single quotes (",Object(a.b)("inlineCode",{parentName:"p"},"''"),") are used to wrap input as JSON."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," You need to start the worker so that the workflow can make progress.\n(Run ",Object(a.b)("inlineCode",{parentName:"p"},"make && ./bin/helloworld -m worker")," in temporal-go-samples to start the worker)"),Object(a.b)("h4",{id:"show-running-workers-of-a-task-queue"},"Show running workers of a task queue"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl taskqueue desc --tl helloWorldGroup\n")),Object(a.b)("h4",{id:"start-workflow"},"Start workflow"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'./tctl workflow start --tl helloWorldGroup --wt main.Workflow --et 60 -i \'"temporal"\'\n\n# view help messages for workflow start\n./tctl workflow start -h\n\n# for a workflow with multiple inputs, separate each json with space/newline like\n./tctl workflow start --tl helloWorldGroup --wt main.WorkflowWith3Args --et 60 -i \'"your_input_string" 123 {"Name":"my-string", "Age":12345}\'\n')),Object(a.b)("p",null,"The workflow ",Object(a.b)("inlineCode",{parentName:"p"},"start")," command is similar to the ",Object(a.b)("inlineCode",{parentName:"p"},"run")," command, but immediately returns the workflow_id and\nrun_id after starting the workflow. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"show")," command to view the workflow's history/progress."),Object(a.b)("h5",{id:"reuse-the-same-workflow-id-when-startingrunning-a-workflow"},"Reuse the same workflow id when starting/running a workflow"),Object(a.b)("p",null,"Use option ",Object(a.b)("inlineCode",{parentName:"p"},"--workflowidreusepolicy")," or ",Object(a.b)("inlineCode",{parentName:"p"},"--wrp")," to configure the workflow id reuse policy.\n",Object(a.b)("strong",{parentName:"p"},"Option 0 AllowDuplicateFailedOnly:")," Allow starting a workflow execution using the same workflow Id when a workflow with the same workflow Id is not already running and the last execution close state is one of ",Object(a.b)("em",{parentName:"p"},"[terminated, cancelled, timedout, failed]"),".\n",Object(a.b)("strong",{parentName:"p"},"Option 1 AllowDuplicate:")," Allow starting a workflow execution using the same workflow Id when a workflow with the same workflow Id is not already running.\n",Object(a.b)("strong",{parentName:"p"},"Option 2 RejectDuplicate:")," Do not allow starting a workflow execution using the same workflow Id as a previous workflow."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'# use AllowDuplicateFailedOnly option to start a workflow\n./tctl workflow start --tl helloWorldGroup --wt main.Workflow --et 60 -i \'"temporal"\' --wid "<duplicated workflow id>" --wrp 0\n\n# use AllowDuplicate option to run a workflow\n./tctl workflow run --tl helloWorldGroup --wt main.Workflow --et 60 -i \'"temporal"\' --wid "<duplicated workflow id>" --wrp 1\n')),Object(a.b)("h5",{id:"start-a-workflow-with-a-memo"},"Start a workflow with a memo"),Object(a.b)("p",null,"Memos are immutable key/value pairs that can be attached to a workflow run when starting the workflow. These are\nvisible when listing workflows. More information on memos can be found\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/learn-workflow-filtering#memo-vs-search-attributes"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"tctl wf start -tl helloWorldGroup -wt main.Workflow -et 60 -i '\"temporal\"' -memo_key \u2018\u201cService\u201d \u201cEnv\u201d \u201cInstance\u201d\u2019 -memo \u2018\u201cserverName1\u201d \u201ctest\u201d 5\u2019\n")),Object(a.b)("h4",{id:"show-workflow-history"},"Show workflow history"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl workflow show -w 3ea6b242-b23c-4279-bb13-f215661b4717 -r 866ae14c-88cf-4f1e-980f-571e031d71b0\n# a shortcut of this is (without -w -r flag)\n./tctl workflow showid 3ea6b242-b23c-4279-bb13-f215661b4717 866ae14c-88cf-4f1e-980f-571e031d71b0\n\n# if run_id is not provided, it will show the latest run history of that workflow_id\n./tctl workflow show -w 3ea6b242-b23c-4279-bb13-f215661b4717\n# a shortcut of this is\n./tctl workflow showid 3ea6b242-b23c-4279-bb13-f215661b4717\n")),Object(a.b)("h4",{id:"show-workflow-execution-information"},"Show workflow execution information"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl workflow describe -w 3ea6b242-b23c-4279-bb13-f215661b4717 -r 866ae14c-88cf-4f1e-980f-571e031d71b0\n# a shortcut of this is (without -w -r flag)\n./tctl workflow describeid 3ea6b242-b23c-4279-bb13-f215661b4717 866ae14c-88cf-4f1e-980f-571e031d71b0\n\n# if run_id is not provided, it will show the latest workflow execution of that workflow_id\n./tctl workflow describe -w 3ea6b242-b23c-4279-bb13-f215661b4717\n# a shortcut of this is\n./tctl workflow describeid 3ea6b242-b23c-4279-bb13-f215661b4717\n")),Object(a.b)("h4",{id:"list-closed-or-open-workflow-executions"},"List closed or open workflow executions"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl workflow list\n\n# default will only show one page, to view more items, use --more flag\n./tctl workflow list -m\n")),Object(a.b)("p",null,"Use ",Object(a.b)("strong",{parentName:"p"},"--query")," to list workflows with SQL like query:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl workflow list --query \"WorkflowType='main.SampleParentWorkflow' AND CloseTime = missing \"\n")),Object(a.b)("p",null,'This will return all open workflows with workflowType as "main.SampleParentWorkflow".'),Object(a.b)("h4",{id:"query-workflow-execution"},"Query workflow execution"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'# use custom query type\n./tctl workflow query -w <wid> -r <rid> --qt <query-type>\n\n# use build-in query type "__stack_trace" which is supported by Temporal SDK\n./tctl workflow query -w <wid> -r <rid> --qt __stack_trace\n# a shortcut to query using __stack_trace is (without --qt flag)\n./tctl workflow stack -w <wid> -r <rid>\n')),Object(a.b)("h4",{id:"signal-cancel-terminate-workflow"},"Signal, cancel, terminate workflow"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"# signal\n./tctl workflow signal -w <wid> -r <rid> -n <signal-name> -i '\"signal-value\"'\n\n# cancel\n./tctl workflow cancel -w <wid> -r <rid>\n\n# terminate\n./tctl workflow terminate -w <wid> -r <rid> --reason\n")),Object(a.b)("p",null,"Terminating a running workflow execution will record a WorkflowExecutionTerminated event as the closing event in the history. No more decision tasks will be scheduled for a terminated workflow execution.\nCanceling a running workflow execution will record a WorkflowExecutionCancelRequested event in the history, and a new decision task will be scheduled. The workflow has a chance to do some clean up work after cancellation."),Object(a.b)("h4",{id:"signal-cancel-terminate-workflows-as-a-batch-job"},"Signal, cancel, terminate workflows as a batch job"),Object(a.b)("p",null,"Batch job is based on List Workflow Query(",Object(a.b)("strong",{parentName:"p"},"--query"),"). It supports signal, cancel and terminate as batch job type.\nFor terminating workflows as batch job, it will terminte the children recursively."),Object(a.b)("p",null,"Start a batch job(using signal as batch type):"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'tctl --ns samples-namespace wf batch start --query "WorkflowType=\'main.SampleParentWorkflow\' AND CloseTime=missing" --reason "test" --bt signal --sig testname\nThis batch job will be operating on 5 workflows.\nPlease confirm[Yes/No]:yes\n{\n  "jobId": "<batch-job-id>",\n  "msg": "batch job is started"\n}\n\n')),Object(a.b)("p",null,"You need to remember the JobId or use List command to get all your batch jobs:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"tctl --ns samples-namespace wf batch list\n")),Object(a.b)("p",null,"Describe the progress of a batch job:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"tctl --ns samples-namespace wf batch desc -jid <batch-job-id>\n")),Object(a.b)("p",null,"Terminate a batch job:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"tctl --ns samples-namespace wf batch terminate -jid <batch-job-id>\n")),Object(a.b)("p",null,"Note that the operation performed by a batch will not be rolled back by terminating the batch. However, you can use reset to rollback your workflows."),Object(a.b)("h4",{id:"restart-reset-workflow"},"Restart, reset workflow"),Object(a.b)("p",null,"The Reset command allows resetting a workflow to a particular point and continue running from there.\nThere are a lot of use cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rerun a failed workflow from the beginning with the same start parameters."),Object(a.b)("li",{parentName:"ul"},"Rerun a failed workflow from the failing point without losing the achieved progress(history)."),Object(a.b)("li",{parentName:"ul"},"After deploying new code, reset an open workflow to let the workflow run to different flows.")),Object(a.b)("p",null,"You can reset to some predefined event types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'./tctl workflow reset -w <wid> -r <rid> --reset_type <reset_type> --reason "some_reason"\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"FirstDecisionCompleted: reset to the beginning of the history."),Object(a.b)("li",{parentName:"ul"},"LastDecisionCompleted: reset to the end of the history."),Object(a.b)("li",{parentName:"ul"},"LastContinuedAsNew: reset to the end of the history for the previous run.")),Object(a.b)("p",null,"If you are familiar with the Temporal history event, You can also reset to any decision finish event by using:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'./tctl workflow reset -w <wid> -r <rid> --event_id <decision_finish_event_id> --reason "some_reason"\n')),Object(a.b)("p",null,"Some things to note:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When reset, a new run will be kicked off with the same workflowId. But if there is a running execution for the workflow(workflowId), the current run will be terminated."),Object(a.b)("li",{parentName:"ul"},"decision_finish_event_id is the Id of events of the type: DecisionTaskComplete/DecisionTaskFailed/DecisionTaskTimeout."),Object(a.b)("li",{parentName:"ul"},"To restart a workflow from the beginning, reset to the first decision task finish event.")),Object(a.b)("p",null,"To reset multiple workflows, you can use batch reset command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'./tctl workflow reset-batch --input_file <file_of_workflows_to_reset> --reset_type <reset_type> --reason "some_reason"\n')),Object(a.b)("h4",{id:"recovery-from-bad-deployment----auto-reset-workflow"},"Recovery from bad deployment -- auto-reset workflow"),Object(a.b)("p",null,"If a bad deployment lets a workflow run into a wrong state, you might want to reset the workflow to the point that the bad deployment started to run. But usually it is not easy to find out all the workflows impacted, and every reset point for each workflow. In this case, auto-reset will automatically reset all the workflows given a bad deployment identifier."),Object(a.b)("p",null,"Let's get familiar with some concepts. Each deployment will have an identifier, we call it \"",Object(a.b)("strong",{parentName:"p"},"Binary Checksum"),'" as it is usually generated by the md5sum of a binary file. For a workflow, each binary checksum will be associated with an ',Object(a.b)("strong",{parentName:"p"},"auto-reset point"),", which contains a ",Object(a.b)("strong",{parentName:"p"},"runId"),", an ",Object(a.b)("strong",{parentName:"p"},"eventID"),", and the ",Object(a.b)("strong",{parentName:"p"},"created_time")," that binary/deployment made the first decision for the workflow."),Object(a.b)("p",null,"To find out which ",Object(a.b)("strong",{parentName:"p"},"binary checksum")," of the bad deployment to reset, you should be aware of at least one workflow running into a bad state. Use the describe command with ",Object(a.b)("strong",{parentName:"p"},"--reset_points_only")," option to show all the reset points:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"./tctl wf desc -w <WorkflowId>  --reset_points_only\n+----------------------------------+--------------------------------+--------------------------------------+---------+\n|         BINARY CHECKSUM          |          CREATE TIME           |                RUNID                 | EVENTID |\n+----------------------------------+--------------------------------+--------------------------------------+---------+\n| c84c5afa552613a83294793f4e664a7f | 2019-05-24 10:01:00.398455019  | 2dd29ab7-2dd8-4668-83e0-89cae261cfb1 |       4 |\n| aae748fdc557a3f873adbe1dd066713f | 2019-05-24 11:01:00.067691445  | d42d21b8-2adb-4313-b069-3837d44d6ce6 |       4 |\n...\n...\n")),Object(a.b)("p",null,"Then use this command to tell Temporal to auto-reset all workflows impacted by the bad deployment. The command will store the bad binary checksum into namespace info and trigger a process to reset all your workflows."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'./tctl --ns <YourNamespace> namespace update --add_bad_binary aae748fdc557a3f873adbe1dd066713f  --reason "rollback bad deployment"\n')),Object(a.b)("p",null,"As you add the bad binary checksum to your namespace, Temporal will not dispatch any decision tasks to the bad binary. So make sure that you have rolled back to a good deployment(or roll out new bits with bug fixes). Otherwise your workflow can't make any progress after auto-reset."))}b.isMDXComponent=!0},395:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return u}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(o),m=n,u=p["".concat(l,".").concat(m)]||p[m]||w[m]||a;return o?r.a.createElement(u,i({ref:t},s,{components:o})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);