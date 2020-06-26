(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),o=(n(0),n(235)),i={id:"java-versioning",title:"Versioning"},c={id:"java-versioning",title:"Versioning",description:"As outlined in the _Workflow Implementation Constraints_ section, workflow code has to be deterministic by taking the same",source:"@site/docs/java-versioning.md",permalink:"/docs/next/java-versioning",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/java-versioning.md",version:"next",sidebar:"docs",previous:{title:"Implementing activities",permalink:"/docs/next/java-implementing-activities"},next:{title:"Distributed CRON",permalink:"/docs/next/java-distributed-cron"}},l=[],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As outlined in the ",Object(o.b)("em",{parentName:"p"},"Workflow Implementation Constraints")," section, workflow code has to be deterministic by taking the same\ncode path when replaying history events. Any workflow code change that affects the order in which decisions are generated breaks\nthis assumption. The solution that allows updating code of already running workflows is to keep both the old and new code.\nWhen replaying, use the code version that the events were generated with and when executing a new code path, always take the\nnew code."),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"Workflow.getVersion")," function to return a version of the code that should be executed and then use the returned\nvalue to pick a correct branch. Let's look at an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public void processFile(Arguments args) {\n    String localName = null;\n    String processedName = null;\n    try {\n        localName = activities.download(args.getSourceBucketName(), args.getSourceFilename());\n        processedName = activities.processFile(localName);\n        activities.upload(args.getTargetBucketName(), args.getTargetFilename(), processedName);\n    } finally {\n        if (localName != null) { // File was downloaded.\n            activities.deleteLocalFile(localName);\n        }\n        if (processedName != null) { // File was processed.\n            activities.deleteLocalFile(processedName);\n        }\n    }\n}\n")),Object(o.b)("p",null,"Now we decide to calculate the processed file checksum and pass it to upload.\nThe correct way to implement this change is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public void processFile(Arguments args) {\n    String localName = null;\n    String processedName = null;\n    try {\n        localName = activities.download(args.getSourceBucketName(), args.getSourceFilename());\n        processedName = activities.processFile(localName);\n        int version = Workflow.getVersion("checksumAdded", Workflow.DEFAULT_VERSION, 1);\n        if (version == Workflow.DEFAULT_VERSION) {\n            activities.upload(args.getTargetBucketName(), args.getTargetFilename(), processedName);\n        } else {\n            long checksum = activities.calculateChecksum(processedName);\n            activities.uploadWithChecksum(\n                args.getTargetBucketName(), args.getTargetFilename(), processedName, checksum);\n        }\n    } finally {\n        if (localName != null) { // File was downloaded.\n            activities.deleteLocalFile(localName);\n        }\n        if (processedName != null) { // File was processed.\n            activities.deleteLocalFile(processedName);\n        }\n    }\n}\n')),Object(o.b)("p",null,"Later, when all workflows that use the old version are completed, the old branch can be removed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public void processFile(Arguments args) {\n    String localName = null;\n    String processedName = null;\n    try {\n        localName = activities.download(args.getSourceBucketName(), args.getSourceFilename());\n        processedName = activities.processFile(localName);\n        // getVersion call is left here to ensure that any attempt to replay history\n        // for a different version fails. It can be removed later when there is no possibility\n        // of this happening.\n        Workflow.getVersion("checksumAdded", 1, 1);\n        long checksum = activities.calculateChecksum(processedName);\n        activities.uploadWithChecksum(\n            args.getTargetBucketName(), args.getTargetFilename(), processedName, checksum);\n    } finally {\n        if (localName != null) { // File was downloaded.\n            activities.deleteLocalFile(localName);\n        }\n        if (processedName != null) { // File was processed.\n            activities.deleteLocalFile(processedName);\n        }\n    }\n}\n')),Object(o.b)("p",null,"The Id that is passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"getVersion")," call identifies the change. Each change is expected to have its own Id. But if\na change spawns multiple places in the workflow code and the new code should be either executed in all of them or\nin none of them, then they have to share the Id."))}d.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(g,c({ref:t},s,{components:n})):r.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);