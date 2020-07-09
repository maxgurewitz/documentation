(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(10),a=(r(0),r(395)),i={id:"installing-server",title:"Installing Temporal",sidebar_label:"Installing Temporal"},l={id:"version-0.25.0/installing-server",isDocsHomePage:!1,title:"Installing Temporal",description:"Prerequisites",source:"@site/versioned_docs/version-0.25.0/installing-server.md",permalink:"/docs/0.25.0/installing-server",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.25.0/installing-server.md",version:"0.25.0",sidebar_label:"Installing Temporal",sidebar:"version-0.25.0/docs",previous:{title:"MIT License",permalink:"/docs/0.25.0/license"},next:{title:"Periodic Execution (aka Distributed Cron)",permalink:"/docs/0.25.0/use-cases-periodic"},latestVersionMainDocPermalink:"/docs/overview"},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run Temporal Server Using docker-compose",id:"run-temporal-server-using-docker-compose",children:[]},{value:"Write Workflows and Activities using Client SDK",id:"write-workflows-and-activities-using-client-sdk",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Follow the Docker installation instructions found here: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install"}),"https://docs.docker.com/engine/install")),Object(a.b)("p",null,"Follow the docker-compose installation instructions found here: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install"}),"https://docs.docker.com/compose/install")),Object(a.b)("h3",{id:"run-temporal-server-using-docker-compose"},"Run Temporal Server Using docker-compose"),Object(a.b)("p",null,"Download the Temporal docker-compose file to preferred location (i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"quick_start")," directory):"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -L https://github.com/temporalio/temporal/releases/download/v0.25.0/docker.tar.gz | tar -xz --strip-components 1 docker/docker-compose.yml\n\nls\n# docker-compose.yml\n")),Object(a.b)("p",null,"Start Temporal Service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up\n")),Object(a.b)("p",null,"The output should look similar to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Creating network \"quick_start_default\" with the default driver\nPulling temporal (temporalio/temporal-auto-setup:0.25.0)...\n...\n...\ntemporal_1   | Description: Default namespace for Temporal Server\ntemporal_1   | OwnerEmail:\ntemporal_1   | NamespaceData: map[string]string(nil)\ntemporal_1   | Status: NamespaceStatusRegistered\ntemporal_1   | RetentionInDays: 1\ntemporal_1   | EmitMetrics: false\ntemporal_1   | ActiveClusterName: active\ntemporal_1   | Clusters: active\ntemporal_1   | HistoryArchivalStatus: Enabled\ntemporal_1   | HistoryArchivalURI: file:///tmp/temporal_archival/development\ntemporal_1   | VisibilityArchivalStatus: Disabled\ntemporal_1   | Bad binaries to reset:\ntemporal_1   | +-----------------+----------+------------+--------+\ntemporal_1   | | BINARY CHECKSUM | OPERATOR | START TIME | REASON |\ntemporal_1   | +-----------------+----------+------------+--------+\ntemporal_1   | +-----------------+----------+------------+--------+\ntemporal_1   | + echo 'Default namespace registration complete.'\ntemporal_1   | Default namespace registration complete.\n")),Object(a.b)("p",null,"At this point Temporal Server is running! You can also see the web interface on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8088/"}),"localhost:8088")),Object(a.b)("h2",{id:"write-workflows-and-activities-using-client-sdk"},"Write Workflows and Activities using Client SDK"),Object(a.b)("p",null,"Try out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/java-quick-start"}),"Java SDK"),"."),Object(a.b)("p",null,"Try out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/go-quick-start"}),"Go SDK"),"."))}p.isMDXComponent=!0},395:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(b,l({ref:t},s,{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);