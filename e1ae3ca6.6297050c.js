(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return h}));var r=a(1),i=a(10),n=(a(0),a(395)),o={id:"learn-archival",title:"Archival"},l={id:"version-0.26.0/learn-archival",isDocsHomePage:!1,title:"Archival",description:"Archival is a feature that automatically moves workflow histories from persistence to another location after the retention period. The purpose of archival is to be able to keep histories as long as needed while not overwhelming the persistence store. There are two reasons you may want to keep the histories after the retention period has past:",source:"@site/versioned_docs/version-0.26.0/learn-archival.md",permalink:"/docs/learn-archival",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/learn-archival.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Configuring Temporal",permalink:"/docs/learn-server-configuration"},next:{title:"Cross-DC Replication",permalink:"/docs/learn-cross-dc-replication"}},c=[{value:"Concepts",id:"concepts",children:[]},{value:"Configuring Archival",id:"configuring-archival",children:[{value:"Cluster Archival Config",id:"cluster-archival-config",children:[]},{value:"Namespace Archival Config",id:"namespace-archival-config",children:[]}]},{value:"Running Locally",id:"running-locally",children:[]},{value:"FAQ",id:"faq",children:[{value:"How does archival interact with global namespaces?",id:"how-does-archival-interact-with-global-namespaces",children:[]},{value:"Can I specify multiple archival URIs?",id:"can-i-specify-multiple-archival-uris",children:[]},{value:"How does archival work with PII?",id:"how-does-archival-work-with-pii",children:[]}]},{value:"Planned Future Work",id:"planned-future-work",children:[]}],s={rightToc:c};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Archival is a feature that automatically moves workflow histories from persistence to another location after the retention period. The purpose of archival is to be able to keep histories as long as needed while not overwhelming the persistence store. There are two reasons you may want to keep the histories after the retention period has past:\n1. ",Object(n.b)("strong",{parentName:"p"},"Compliance:")," For legal reasons histories may need to be stored for a long period of time.\n2. ",Object(n.b)("strong",{parentName:"p"},"Debugging:")," Old histories can still be accessed for debugging."),Object(n.b)("p",null,"Archival is still in beta and there are three limits to its feature set:\n1. ",Object(n.b)("strong",{parentName:"p"},"Only Histories:")," Only histories are archived, visibility records are simply deleted after the retention period.\n2. ",Object(n.b)("strong",{parentName:"p"},"RunId Required:")," In order to access an archived history, both workflowId and runId are required.\n3. ",Object(n.b)("strong",{parentName:"p"},"Best Effort:")," There are cases in which a history can be deleted from persistence without being archived first. These cases are rare but are possible with the current state of archival."),Object(n.b)("p",null,"Work is being prioritized on archival to eliminate these limitations."),Object(n.b)("h2",{id:"concepts"},"Concepts"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Archiver:")," Archiver is the component responsible for archiving and retrieving workflow histories.  Its interface is quite generic and supports different kinds of archival locations: local file system, S3, Kafka, etc. Check ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/temporalio/temporal/blob/master/common/archiver/README.md"}),"this README")," for how to add a new archiver implementation."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"URI:")," An URI is used to specify the archival location. Based on the scheme part of an URI, the corresponding archiver will be selected by the system to perform archival.")),Object(n.b)("h2",{id:"configuring-archival"},"Configuring Archival"),Object(n.b)("p",null,"Archival is controlled by both namespace level config and cluster level config. "),Object(n.b)("h3",{id:"cluster-archival-config"},"Cluster Archival Config"),Object(n.b)("p",null,"A Temporal cluster can be in one of three archival states:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Disabled:")," No archivals will occur and the archivers will be not initialized on startup."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Paused:")," This state is not yet implemented. Currently setting cluster to paused is the same as setting it to disabled."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Enabled:")," Archivals will occur.")),Object(n.b)("p",null,"Enabling the cluster for archival simply means histories are being archived. There is another config which controls whether histories can be accessed from archival. Both these configs have defaults defined in static yaml, and have dynamic config overwrites. Note, however, dynamic config will take effect only when archival is enabled in static yaml."),Object(n.b)("h3",{id:"namespace-archival-config"},"Namespace Archival Config"),Object(n.b)("p",null,"A namespace includes two pieces of archival related config: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Status:")," Either enabled or disabled. If a namespace is in the disabled state no archivals will occur for that namespace.\nA namespace can safely switch between statuses."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"URI:")," The scheme and location where histories will be archived to. When a namespace enables archival for the first time URI is set and can never be mutated. If URI is not specified when first enabling a namespace for archival, a default URI from static config will be used.")),Object(n.b)("h2",{id:"running-locally"},"Running Locally"),Object(n.b)("p",null,"In order to run locally do the following:\n1. ",Object(n.b)("inlineCode",{parentName:"p"},"./temporal-server start"),"\n2. ",Object(n.b)("inlineCode",{parentName:"p"},"./tctl --ns samples-namespace namespace register --gd false --history_archival_status enabled --retention 0"),"\n3. Run the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples/tree/master/helloworld"}),"helloworld temporal sample")," by following the README\n4. Copy the workflowId and runId of the completed workflow from log output\n5. ",Object(n.b)("inlineCode",{parentName:"p"},"./temporal --ns samples-namespace wf show --wid <workflowId> --rid <runId>")),Object(n.b)("p",null,"In step 2, we registered a new namespace and enabled history archival feature for that namespace. Since we didn't provide an archival URI when registering the new namespace, the default URI specified in ",Object(n.b)("inlineCode",{parentName:"p"},"config/development.yaml")," is used. The default URI is ",Object(n.b)("inlineCode",{parentName:"p"},"file:///tmp/temporal_archival/development"),", so you can find the archived workflow history under the ",Object(n.b)("inlineCode",{parentName:"p"},"/tmp/temporal_archival/development")," directory. "),Object(n.b)("h2",{id:"faq"},"FAQ"),Object(n.b)("h3",{id:"how-does-archival-interact-with-global-namespaces"},"How does archival interact with global namespaces?"),Object(n.b)("p",null,"When archival occurs it will first run on the active side and some time later it will run on the standby side as well.\nBefore uploading history a check is done to see if it has already been uploaded, if so it is not re-uploaded."),Object(n.b)("h3",{id:"can-i-specify-multiple-archival-uris"},"Can I specify multiple archival URIs?"),Object(n.b)("p",null,"No, each namespace can only have one URI for history archival and one URI for visibility archival. Different namespaces, however, can have different URIs (with different schemes)."),Object(n.b)("h3",{id:"how-does-archival-work-with-pii"},"How does archival work with PII?"),Object(n.b)("p",null,"No temporal workflow should ever operate on clear text PII. Temporal can be thought\nof as a database and just as one would not store PII in a database PII should not be\nstored in Temporal. This is even more important when archival is enabled because\nthese histories can be kept forever. "),Object(n.b)("h2",{id:"planned-future-work"},"Planned Future Work"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Support archival of visibility."),Object(n.b)("li",{parentName:"ul"},"Support accessing histories without providing runId."),Object(n.b)("li",{parentName:"ul"},"Provide hard guarantee that no history is deleted from persistence before being archived if archival is enabled."),Object(n.b)("li",{parentName:"ul"},"Implement paused state. In this state no archivals will occur but histories also will not be deleted from persistence.\nOnce enabled again from paused state, all skipped archivals will occur. ")))}h.isMDXComponent=!0},395:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),h=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=h(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=h(a),b=r,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||n;return a?i.a.createElement(u,l({ref:t},s,{components:a})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);