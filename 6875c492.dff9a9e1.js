(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{223:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(367),m=t(369),c=t(361);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:s}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},369:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(365),m=t(359),c=t(368),o=t(361),s=t(372),i=t(366),g=t(96),u=t.n(g);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:g,isBlogPostPage:d=!1}=e,{date:h,permalink:p,tags:v,readingTime:b}=r,{author:N,title:f,image:_}=t,w=t.author_url||t.authorURL,k=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,T=Object(i.a)(_,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,_&&n.a.createElement("meta",{property:"og:image",content:T}),_&&n.a.createElement("meta",{property:"twitter:image",content:T}),_&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f})),n.a.createElement("article",{className:d?void 0:"margin-bottom--xl"},(()=>{const e=d?"h1":"h2",a=h.substring(0,10).split("-"),t=a[0],r=E[parseInt(a[1],10)-1],m=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},d?f:n.a.createElement(o.a,{to:p},f)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},r," ",m,", ",t," ",b&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},y&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:y,alt:N})),n.a.createElement("div",{className:"avatar__intro"},N&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},N)),n.a.createElement("small",{className:"avatar__subtitle"},k)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},a)),(v.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),v.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":"Read more about "+f},n.a.createElement("strong",null,"Read More"))))))}}}]);