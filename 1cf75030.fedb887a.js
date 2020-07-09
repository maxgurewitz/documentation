(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n(1),a=n(10),o=(n(0),n(395)),r={id:"java-implementing-activities",title:"Implementing activities"},c={id:"java-implementing-activities",isDocsHomePage:!1,title:"Implementing activities",description:"Activity implementation is an implementation of an activity interface. A single instance of the activities implementation",source:"@site/docs/java-implementing-activities.md",permalink:"/docs/next/java-implementing-activities",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/java-implementing-activities.md",version:"next",sidebar:"docs",previous:{title:"Activity Interface",permalink:"/docs/next/java-activity-interface"},next:{title:"Versioning",permalink:"/docs/next/java-versioning"},latestVersionMainDocPermalink:"/docs/overview"},l=[{value:"Accessing Activity Info",id:"accessing-activity-info",children:[]},{value:"Asynchronous Activity Completion",id:"asynchronous-activity-completion",children:[]},{value:"Activity Heart Beating",id:"activity-heart-beating",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Activity implementation is an implementation of an activity interface. A single instance of the activities implementation\nis shared across multiple simultaneous activity invocations. Therefore, the activity implementation code must be ",Object(o.b)("em",{parentName:"p"},"thread safe"),"."),Object(o.b)("p",null,"The values passed to activities through invocation parameters or returned through a result value are recorded in the execution history.\nThe entire execution history is transferred from the Temporal service to workflow workers when a workflow state needs to recover.\nA large execution history can thus adversely impact the performance of your workflow. Therefore, be mindful of the amount of data you transfer via activity invocation parameters or return values. Otherwise, no additional limitations exist on activity implementations."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n    private final AmazonS3 s3Client;\n\n    private final String localDirectory;\n\n    void upload(String bucketName, String localName, String targetName) {\n        File f = new File(localName);\n        s3Client.putObject(bucket, remoteName, f);\n    }\n\n    String download(String bucketName, String remoteName, String localName) {\n        // Implementation omitted for brevity.\n        return downloadFileFromS3(bucketName, remoteName, localDirectory + localName);\n    }\n\n    String processFile(String localName) {\n        // Implementation omitted for brevity.\n        return compressFile(localName);\n    }\n\n    void deleteLocalFile(String fileName) {\n        File f = new File(localDirectory + fileName);\n        f.delete();\n    }\n}\n")),Object(o.b)("h2",{id:"accessing-activity-info"},"Accessing Activity Info"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/uber/cadence/activity/Activity.html"}),"Activity"),"\nclass provides static getters to access information about the workflow that invoked it. Note that this information is stored in a thread local variable. Therefore, calls to Activity accessors succeed only in the thread that invoked the activity function."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n     @Override\n     public String download(String bucketName, String remoteName, String localName) {\n        log.info("namespace=" +  Activity.getNamespace());\n        WorkflowExecution execution = Activity.getWorkflowExecution();\n        log.info("workflowId=" + execution.getWorkflowId());\n        log.info("runId=" + execution.getRunId());\n        ActivityTask activityTask = Activity.getTask();\n        log.info("activityId=" + activityTask.getActivityId());\n        log.info("activityTimeout=" + activityTask.getStartToCloseTimeoutSeconds());\n        return downloadFileFromS3(bucketName, remoteName, localDirectory + localName);\n     }\n     ...\n }\n')),Object(o.b)("h2",{id:"asynchronous-activity-completion"},"Asynchronous Activity Completion"),Object(o.b)("p",null,"Sometimes an activity lifecycle goes beyond a synchronous method invocation. For example, a request can be put in a queue\nand later a reply comes and is picked up by a different worker process. The whole request-reply interaction can be modeled\nas a single Temporal activity."),Object(o.b)("p",null,"To indicate that an activity should not be completed upon its method return, call ",Object(o.b)("inlineCode",{parentName:"p"},"Activity.doNotCompleteOnReturn()")," from the\noriginal activity thread. Then later, when replies come, complete the activity using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/uber/cadence/client/ActivityCompletionClient.html"}),"ActivityCompletionClient"),".\nTo correlate activity invocation with completion, use either ",Object(o.b)("inlineCode",{parentName:"p"},"TaskToken")," or workflow and activity Ids."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n     public String download(String bucketName, String remoteName, String localName) {\n         byte[] taskToken = Activity.getTaskToken(); // Used to correlate reply.\n         asyncDownloadFileFromS3(taskToken, bucketName, remoteName, localDirectory + localName);\n         Activity.doNotCompleteOnReturn();\n         return "ignored"; // Return value is ignored when doNotCompleteOnReturn was called.\n     }\n     ...\n}\n')),Object(o.b)("p",null,"When the download is complete, the download service potentially calls back from a different process:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"    public <R> void completeActivity(byte[] taskToken, R result) {\n        completionClient.complete(taskToken, result);\n    }\n\n    public void failActivity(byte[] taskToken, Exception failure) {\n        completionClient.completeExceptionally(taskToken, failure);\n    }\n")),Object(o.b)("h2",{id:"activity-heart-beating"},"Activity Heart Beating"),Object(o.b)("p",null,"Some activities are long running. To react to a crash quickly, use a heartbeat mechanism.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"Activity.heartbeat")," function lets the Temporal service know that the activity is still alive. You can piggyback\n",Object(o.b)("inlineCode",{parentName:"p"},"details")," on an activity heartbeat. If an activity times out, the last value of ",Object(o.b)("inlineCode",{parentName:"p"},"details")," is included\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"ActivityTimeoutException")," delivered to a workflow. Then the workflow can pass the details to\nthe next activity invocation. This acts as a periodic checkpoint mechanism for the progress of an activity."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n     @Override\n     public String download(String bucketName, String remoteName, String localName) {\n        InputStream inputStream = openInputStream(file);\n        try {\n            byte[] bytes = new byte[MAX_BUFFER_SIZE];\n            while ((read = inputStream.read(bytes)) != -1) {\n                totalRead += read;\n                f.write(bytes, 0, read);\n                /*\n                 * Let the service know about the download progress.\n                 */\n                 Activity.heartbeat(totalRead);\n            }\n        } finally {\n            inputStream.close();\n        }\n     }\n     ...\n}\n")))}m.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,v=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(v,c({ref:t},s,{components:n})):a.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);