(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(6),r=(n(0),n(235)),l={id:"learn-server-configuration",title:"Configuring Temporal",sidebar_label:"Configuration"},o={id:"learn-server-configuration",title:"Configuring Temporal",description:"Temporal Server configuration is found in `development.yaml` and may contain the following possible sections:",source:"@site/docs/learn-server-configuration.md",permalink:"/docs/next/learn-server-configuration",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/learn-server-configuration.md",version:"next",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"Task Lists",permalink:"/docs/next/learn-task-lists"},next:{title:"Archival",permalink:"/docs/next/learn-archival"}},b=[{value:"global",id:"global",children:[{value:"membership - <em>required</em>",id:"membership---required",children:[]},{value:"pprof",id:"pprof",children:[]},{value:"tls",id:"tls",children:[]}]},{value:"persistence",id:"persistence",children:[]},{value:"log",id:"log",children:[]},{value:"clusterMetadata",id:"clustermetadata",children:[]},{value:"services",id:"services",children:[{value:"rpc - <em>required</em>",id:"rpc---required",children:[]},{value:"metrics",id:"metrics",children:[]}]},{value:"kafka",id:"kafka",children:[]},{value:"publicClient",id:"publicclient",children:[]}],c={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Temporal Server configuration is found in ",Object(r.b)("inlineCode",{parentName:"p"},"development.yaml")," and may contain the following possible sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#global"}),Object(r.b)("strong",{parentName:"a"},"global"))," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#persistence"}),Object(r.b)("strong",{parentName:"a"},"persistence"))," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#log"}),Object(r.b)("strong",{parentName:"a"},"log"))," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#clustermetadata"}),Object(r.b)("strong",{parentName:"a"},"clusterMetadata"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#services"}),Object(r.b)("strong",{parentName:"a"},"services"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#kafka"}),Object(r.b)("strong",{parentName:"a"},"kafka"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#publicclient"}),Object(r.b)("strong",{parentName:"a"},"publicClient"))),Object(r.b)("li",{parentName:"ul"},"archival"),Object(r.b)("li",{parentName:"ul"},"dcRedirectionPolicy"),Object(r.b)("li",{parentName:"ul"},"dynamicConfigClient"),Object(r.b)("li",{parentName:"ul"},"namespaceDefaults")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Changing any properties in ",Object(r.b)("inlineCode",{parentName:"p"},"development.yaml")," file requires a process restart for changes to take effect."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," If you'd like to dig deeper and see how we actually parse this file, see our source code ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal/blob/master/common/service/config/config.go"}),"here"),"."),Object(r.b)("h2",{id:"global"},"global"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"global")," section contains process-wide configuration. See below for a minimal configuration (optional parameters are commented out.)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'global:\n  membership: \n    name: temporal\n    #maxJoinDuration: 30s\n    #broadcastAddress: "127.0.0.1"\n  #pprof:\n    #port: 7936\n  #tls:\n    #...\n\n')),Object(r.b)("h3",{id:"membership---required"},"membership - ",Object(r.b)("em",{parentName:"h3"},"required")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"membership")," section controls the following membership layer parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - ",Object(r.b)("em",{parentName:"li"},"required")," - used to identify other cluster members in the gossip ring. This must be the same for all nodes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxJoinDuration")," - The amount of time the service will attempt to join the gossip layer before failing."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"broadcastAddress")," - Used as the address that is communicated to remote nodes to connect on. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This is generally used when BindOnIP would be the same across several nodes (ie: 0.0.0.0) and for nat traversal scenarios. ",Object(r.b)("inlineCode",{parentName:"li"},"net.ParseIP")," controls the supported syntax. Note: Only IPV4 is supported.")))),Object(r.b)("h3",{id:"pprof"},"pprof"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"port")," - If specified, this will initialize pprof upon process start on the listed port.")),Object(r.b)("h3",{id:"tls"},"tls"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"tls")," section controls the SSL/TLS settings for network communication and contains two subsections, ",Object(r.b)("inlineCode",{parentName:"p"},"internode")," and ",Object(r.b)("inlineCode",{parentName:"p"},"frontend"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"internode")," section governs internal service communication among roles where the ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," governs SDK client communication to the frontend service role."),Object(r.b)("p",null,"Each of these subsections contain a ",Object(r.b)("inlineCode",{parentName:"p"},"server")," section and a ",Object(r.b)("inlineCode",{parentName:"p"},"client")," section. The ",Object(r.b)("inlineCode",{parentName:"p"},"server")," contains the following parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"certFile")," - The path to the file containing the PEM-encoded public key of the certificate to use."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyFile")," - The path to the file containing the PEM-encoded private key of the certificate to use."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"requireClientAuth")," - ",Object(r.b)("em",{parentName:"li"},"boolean")," - Requires clients to authenticate with a certificate when connecting, otherwise known as mutual TLS."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clientCaFiles")," - A list of paths to files containing the PEM-encoded public key of the Certificate Authorities you wish to trust for client authentication. This value is ignored if ",Object(r.b)("inlineCode",{parentName:"li"},"requireClientAuth")," is not enabled.")),Object(r.b)("p",null,"Below is an example enabling Server TLS (https) between SDKs and the Frontend APIs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  tls:\n    frontend:\n      server:\n        certFile: /path/to/public/cert\n        keyFile: /path/to/private/cert\n      client:\n        serverName: dnsSanInFrontendCertificate\n")),Object(r.b)("p",null,"Note, the ",Object(r.b)("inlineCode",{parentName:"p"},"client")," section generally needs to be provided to specify an expected DNS SubjectName contained in the presented server certificate via the ",Object(r.b)("inlineCode",{parentName:"p"},"serverName")," field; this is needed as Temporal uses IP to IP communication. You can avoid specifying this if your server certificates contain the appropriate IP Subject Alternative Names. "),Object(r.b)("p",null,"Additionally, the ",Object(r.b)("inlineCode",{parentName:"p"},"rootCaFiles")," field needs to be provided when the client's host does not trust the Root CA used by the server. The example below extends the above example to manually specify the Root CA used by the frontend services:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  tls:\n    frontend:\n      server:\n        certFile: /path/to/public/cert\n        keyFile: /path/to/private/cert\n      client:\n        serverName: dnsSanInFrontendCertificate\n        rootCaFiles:\n          - /path/to/frontend/server/ca\n")),Object(r.b)("p",null,"Below is an additional example of a fully secured cluster using mutual TLS for both frontend and internode communication with manually specified Cas:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  tls:\n    internode:\n      server:\n        certFile: /path/to/internode/publicCert\n        keyFile: /path/to/internode/privCert\n        requireClientAuth: true\n        clientCaFiles:\n          - /path/to/internode/serverCa\n      client:\n        serverName: dnsSanInInternodeCertificate\n        rootCaFiles:\n          - /path/to/internode/serverCa\n    frontend:\n      server:\n        certFile: /path/to/frontend/publicCert\n        keyFile: /path/to/frontend/privCert\n        requireClientAuth: true\n        clientCaFiles:\n          - /path/to/internode/serverCa\n          - /path/to/sdkClientPool1/ca\n          - /path/to/sdkClientPool2/ca\n      client:\n        serverName: dnsSanInFrontendCertificate\n        rootCaFiles:\n          - /path/to/frontend/serverCa\n\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," In the case that client authentication is enabled, the ",Object(r.b)("inlineCode",{parentName:"p"},"internode.server")," certificate is used as the client certificate among services. This adds the following requirements:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"internode.server")," certificate must be specified on all roles, even for a frontend-only configuration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Internode server certificates must be minted with either ",Object(r.b)("strong",{parentName:"p"},"no")," Extended Key Usages or ",Object(r.b)("strong",{parentName:"p"},"both")," ServerAuth and ClientAuth EKUs.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If your Certificate Authorities are untrusted, such as in the previous example, the internode server Ca will need to be specified in the following places:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"internode.server.clientCaFiles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"internode.client.rootCaFiles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"frontend.server.clientCaFiles"))))),Object(r.b)("h2",{id:"persistence"},"persistence"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"persistence")," section holds configuration for the data store / persistence layer. Below is an example minimal specification for a password-secured Cassandra cluster."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'persistence:\n  defaultStore: default\n  visibilityStore: visibility\n  numHistoryShards: 512\n  datastores:\n    default:\n      cassandra:\n        hosts: "127.0.0.1"\n        keyspace: "temporal"\n        user: "username"\n        password: "password"\n    visibility:\n      cassandra:\n        hosts: "127.0.0.1"\n        keyspace: "temporal_visibility"\n')),Object(r.b)("p",null,"The following top level configuration items are required:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"numHistoryShards")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the number of history shards to create when initializing the cluster. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Warning"),": This value is immutable and will be ignored after the first run. Please ensure you set this value appropriately high enough to scale with the worst case peak load for this cluster."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultStore")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the name of the data store definition that should be used by the Temporal server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"visibilityStore")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the name of the data store definition that should be used by the Temporal visibility server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"datastores")," - ",Object(r.b)("em",{parentName:"li"},"required")," - contains named data store definitions to be referenced.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Each definition is defined with a heading declaring a name (ie: ",Object(r.b)("inlineCode",{parentName:"li"},"default:")," and ",Object(r.b)("inlineCode",{parentName:"li"},"visibility:")," above), which contains a data store definition."),Object(r.b)("li",{parentName:"ul"},"data store definitions must be either ",Object(r.b)("inlineCode",{parentName:"li"},"cassandra")," or ",Object(r.b)("inlineCode",{parentName:"li"},"sql"),".")))),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"cassandra")," data store definition can contain the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hosts")," - ",Object(r.b)("em",{parentName:"li"},"required")," - a csv of Cassandra endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"port")," - default: 9042 - Cassandra port used for connection by ",Object(r.b)("inlineCode",{parentName:"li"},"gocql")," client."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user")," - Cassandra user used for authentication by ",Object(r.b)("inlineCode",{parentName:"li"},"gocql")," client."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password")," - Cassandra password used for authentication by ",Object(r.b)("inlineCode",{parentName:"li"},"gocql")," client."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyspace")," - ",Object(r.b)("em",{parentName:"li"},"required")," -  the Cassandra keyspace."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"datacenter")," - the data center filter arg for Cassandra."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxConns")," - the max number of connections to this data store for a single TLS configuration."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls")," - See TLS below.")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," data store definition can contain the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user")," - user used for authentication."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password")," - password used for authentication."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pluginName")," - ",Object(r.b)("em",{parentName:"li"},"required")," - SQL database type.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Valid values"),": ",Object(r.b)("inlineCode",{parentName:"li"},"mysql")," or ",Object(r.b)("inlineCode",{parentName:"li"},"postgres"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"databaseName")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the name of SQL database to connect to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"connectAddr")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the remote addr of the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"connectProtocol")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the protocol that goes with the ",Object(r.b)("inlineCode",{parentName:"li"},"connectAddr"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Valid values"),": ",Object(r.b)("inlineCode",{parentName:"li"},"tcp")," or ",Object(r.b)("inlineCode",{parentName:"li"},"unix")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"connectAttributes")," - a map of key-value attributes to be sent as part of connect ",Object(r.b)("inlineCode",{parentName:"li"},"data_source_name")," url."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxConns")," - the max number of connections to this data store."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxIdleConns")," - the max number of idle connections to this data store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxConnLifetime")," - is the maximum time a connection can be alive."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"numShards")," - number of storage shards to use for tables in a sharded sql database (",Object(r.b)("em",{parentName:"li"},"Default:")," 1)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls")," - See below.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tls")," sections may contain:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," - ",Object(r.b)("em",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"serverName")," - name of the server hosting the data store."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"certFile")," - path to the cert file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyFile")," - path to the key file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"caFile")," - path to the ca file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enableHostVerification")," - ",Object(r.b)("em",{parentName:"li"},"boolean")," - ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to verify the hostname and server cert (like a wildcard for Cassandra cluster). This option is basically the inverse of ",Object(r.b)("inlineCode",{parentName:"li"},"InSecureSkipVerify"),". See ",Object(r.b)("inlineCode",{parentName:"li"},"InSecureSkipVerify")," in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://golang.org/pkg/crypto/tls/"}),"http://golang.org/pkg/crypto/tls/")," for more info.")),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"certFile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"keyFile")," are optional depending on server config, but both fields must be omitted to avoid using a client certificate."),Object(r.b)("h2",{id:"log"},"log"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"log")," section is optional and contains the following possible values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stdout")," - ",Object(r.b)("em",{parentName:"li"},"boolean")," - ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the output needs to go to standard out."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"level")," - sets the logging level.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Valid values")," - debug, info, warn, error or fatal."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"outputFile")," - path to output log file.")),Object(r.b)("h2",{id:"clustermetadata"},"clusterMetadata"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"clusterMetadata")," contains all cluster definitions, including those which participate in cross DC."),Object(r.b)("p",null,"An example ",Object(r.b)("inlineCode",{parentName:"p"},"clusterMetadata")," section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'clusterMetadata:\n    enableGlobalNamespace: false\n    failoverVersionIncrement: 10\n    masterClusterName: "active"\n    currentClusterName: "active"\n    clusterInformation:\n        active:\n            enabled: true\n            initialFailoverVersion: 0\n            rpcAddress: "127.0.0.1:7233"\n    #replicationConsumer:\n      #type: kafka\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"currentClusterName")," - ",Object(r.b)("em",{parentName:"li"},"required")," - the name of the current cluster. ",Object(r.b)("strong",{parentName:"li"},"Warning"),": This value is immutable and will be ignored after the first run."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enableGlobalNamespace")," - ",Object(r.b)("em",{parentName:"li"},"Default:")," ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"replicationConsumerConfig")," - determines which method to use to consume replication tasks. The type may be either ",Object(r.b)("inlineCode",{parentName:"li"},"kafka")," or ",Object(r.b)("inlineCode",{parentName:"li"},"rpc"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"failoverVersionIncrement")," - the increment of each cluster version when failover happens."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"masterClusterName")," - the master cluster name, only the master cluster can register/update namespace. All clusters can do namespace failover."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clusterInformation")," - contains a map of cluster names to ",Object(r.b)("inlineCode",{parentName:"li"},"ClusterInformation")," definitions. ",Object(r.b)("inlineCode",{parentName:"li"},"ClusterInformation")," sections consist of:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enabled")," - ",Object(r.b)("em",{parentName:"li"},"boolean")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialFailoverVersion")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rpcAddress")," - indicate the remote service address (host:port). Host can be DNS name. Use ",Object(r.b)("inlineCode",{parentName:"li"},"dns:///")," prefix to enable round-robin between IP address for DNS name.")))),Object(r.b)("h2",{id:"services"},"services"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"services")," section contains configuration keyed by service role type. There are four supported service roles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"frontend")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"matching")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"worker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"history"))),Object(r.b)("p",null,"Below is a minimal example of a ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," service definition under ",Object(r.b)("inlineCode",{parentName:"p"},"services"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'services:\n  frontend:\n    rpc:\n      grpcPort: 8233\n      membershipPort: 8933\n      bindOnLocalHost: true\n    metrics:\n      statsd:\n        hostPort: "127.0.0.1:8125"\n        prefix: "temporal_standby"\n\n')),Object(r.b)("p",null,"There are two sections defined under each service heading:"),Object(r.b)("h3",{id:"rpc---required"},"rpc - ",Object(r.b)("em",{parentName:"h3"},"required")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rpc")," contains settings related to the way a service interacts with other services. The following values are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grpcPort")," is the port  on which gRPC will listen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"membershipPort")," - used by the membership listener."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bindOnLocalHost")," - uses ",Object(r.b)("inlineCode",{parentName:"li"},"localhost")," as the listener address."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bindOnIP")," - used to bind service on specific ip (eg. ",Object(r.b)("inlineCode",{parentName:"li"},"0.0.0.0"),") - check ",Object(r.b)("inlineCode",{parentName:"li"},"net.ParseIP")," for supported syntax, only IPv4 is supported, mutually exclusive with ",Object(r.b)("inlineCode",{parentName:"li"},"BindOnLocalHost")," option."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableLogging")," - disables all logging for rpc."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logLevel")," - the desired log level.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": Port values are currently expected to be consistent among role types across all hosts. "),Object(r.b)("h3",{id:"metrics"},"metrics"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"metrics")," contains configuration for the metrics subsystem keyed by provider name. There are three supported providers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"statsd")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prometheus")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"m3"))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"statsd")," sections supports the following settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hostPort")," - the statsd server host:port."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prefix")," - specific prefix in reporting to ",Object(r.b)("inlineCode",{parentName:"li"},"statsd"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flushInterval")," - maximum interval for sending packets. (",Object(r.b)("em",{parentName:"li"},"Default")," 1 second)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flushBytes")," - specifies the maximum UDP packet size you wish to send. (",Object(r.b)("em",{parentName:"li"},"Default")," 1432 bytes).")),Object(r.b)("p",null,"Additionally, metrics supports the following non-provider specific settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tags")," - the set of key-value pairs to be reported."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prefix")," - sets the prefix to all outgoing metrics.")),Object(r.b)("h2",{id:"kafka"},"kafka"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," section describes the configuration needed to connect to all Kafka clusters and supports the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls")," - uses the TLS structure as under the ",Object(r.b)("inlineCode",{parentName:"li"},"persistence")," section."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clusters")," - map of named ",Object(r.b)("inlineCode",{parentName:"li"},"ClusterConfig")," definitions, which describe the configuration for each Kafka cluster. A ",Object(r.b)("inlineCode",{parentName:"li"},"ClusterConfig")," definition contains a list of brokers using the configuration value ",Object(r.b)("inlineCode",{parentName:"li"},"brokers"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"topics")," - map of topics to Kafka clusters."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"temporal-cluster-topics"),"- map of named ",Object(r.b)("inlineCode",{parentName:"li"},"TopicList")," definitions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"applications")," - map of named ",Object(r.b)("inlineCode",{parentName:"li"},"TopicList")," definitions.")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"TopicList")," definition describes the topic names for each cluster and contains the following required values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"topic")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"retryTopic")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dlqTopic"))),Object(r.b)("p",null,"Below is a sample ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'kafka:\n  tls:\n    enabled: false\n    certFile: ""\n    keyFile: ""\n    caFile: ""\n  clusters:\n    test:\n      brokers:\n        - 127.0.0.1:9092\n  topics:\n    active:\n      cluster: test\n    active-dlq:\n      cluster: test\n    standby:\n      cluster: test\n    standby-dlq:\n      cluster: test\n    other:\n      cluster: test\n    other-dlq:\n      cluster: test\n  temporal-cluster-topics:\n    active:\n      topic: active\n      dlq-topic: active-dlq\n    standby:\n      topic: standby\n      dlq-topic: standby-dlq\n    other:\n      topic: other\n      dlq-topic: other-dlq\n')),Object(r.b)("h2",{id:"publicclient"},"publicClient"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"publicClient")," is a required section that contains a single value ",Object(r.b)("inlineCode",{parentName:"p"},"hostPort")," that is used to specify IPv4 address or DNS name and port to reach a frontend client."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'publicClient:\n  hostPort: "localhost:8933"\n')),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"dns:///")," prefix to enable round-robin between IP address for DNS name."))}s.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?i.a.createElement(u,o({ref:t},c,{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);